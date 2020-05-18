import React, { useEffect, useState } from 'react';
import { getGrudges, addGrudge, deleteGrudge, updateGrudge } from '../../api';
import { GrudgeType } from '../../ts-types';
import Grudges from '../grudges';
import NewGrudge from '../new-grudge';
import styles from './app.module.css';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [grudges, setGrudges] = useState<GrudgeType[]>([]);

  useEffect(() => {
    getGrudges().then(grudges => {
      setGrudges(grudges);
      setLoaded(true);
    })
  }, [])

  const handleAddGrudge = (grudge: GrudgeType) => {
    addGrudge(grudge).then((res) => {
      setGrudges([res?.data || grudge, ...grudges]);
    });
  };

  const getFilteredGrudges = (id: string) => grudges.filter(other => other.id !== id);

  const removeGrudge = (grudge: GrudgeType) => {
    deleteGrudge(grudge.id).then((res) => {
      setGrudges(getFilteredGrudges(res.data.id));
    });
  };

  const toggle = (grudge: GrudgeType) => {
    const otherGrudges = getFilteredGrudges(grudge.id);
    const updatedGrudge = {...grudge, avenged: !grudge.avenged};
    updateGrudge(updatedGrudge).then(res => {
      setGrudges([res?.data || updatedGrudge, ...otherGrudges]);
    });

  };

  return loaded ? (
    <div className={styles.app}>
      <NewGrudge onSubmit={handleAddGrudge}/>
      <Grudges
        title="Unavenged Grudges"
        grudges={grudges.filter(grudge => !grudge.avenged)}
        onCheckOff={toggle}
        onRemove={removeGrudge}
      />
      <Grudges
        title="Avenged Grudges"
        grudges={grudges.filter(grudge => grudge.avenged)}
        onCheckOff={toggle}
        onRemove={removeGrudge}
      />
    </div>
  ) : (
    <div className={styles.loading}>
      ...loading
    </div>
  );
}

export default App;
