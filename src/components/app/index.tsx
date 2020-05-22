import React, { useEffect, useState } from 'react';
import { getGrudges, addGrudge, deleteGrudge, updateGrudge } from '../../api';
import { useGrudgeSubscriptions } from '../../hooks';
import { GrudgeType } from '../../ts-types';
import { CreateGrudgeInput } from '../../ts-types/graphql';
import Grudges from '../grudges';
import NewGrudge from '../new-grudge';
import styles from './app.module.css';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [grudges, setGrudges] = useState<GrudgeType[]>([]);

  useGrudgeSubscriptions(grudges, setGrudges);

  useEffect(() => {
    getGrudges().then((res) => {
      const list =  res.data?.listGrudges?.items;
      list && setGrudges(list);
      setLoaded(true);
    });

  }, []);

  const handleAddGrudge = (grudge: CreateGrudgeInput) => addGrudge(grudge);

  const removeGrudge = (grudge: GrudgeType) => deleteGrudge(grudge.id);

  const toggle = (grudge: GrudgeType) => updateGrudge({...grudge, avenged: !grudge.avenged});

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
