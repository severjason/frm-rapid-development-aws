import React, { useEffect, useState } from 'react';
import {API} from 'aws-amplify';
import { GrudgeType } from '../../ts-types';
import Grudges from '../grudges';
import NewGrudge from '../new-grudge';
import styles from './app.module.css';

const App = () => {
  const [grudges, setGrudges] = useState<GrudgeType[]>([]);

  useEffect(() => {
    API.get('api', '/grudges', {}).then(grudges => {
      console.log(grudges);
    })
  }, [])

  const addGrudge = (grudge: GrudgeType) => {
    setGrudges([grudge, ...grudges]);
  };

  const getFilteredGrudges = (grudge: GrudgeType) => grudges.filter(other => other.id !== grudge.id);

  const removeGrudge = (grudge: GrudgeType) => {
    setGrudges(getFilteredGrudges(grudge));
  };

  const toggle = (grudge: GrudgeType) => {
    const otherGrudges = getFilteredGrudges(grudge);
    const updatedGrudge = {...grudge, avenged: !grudge.avenged};
    setGrudges([updatedGrudge, ...otherGrudges]);
  };

  return (
    <div className={styles.app}>
      <NewGrudge onSubmit={addGrudge}/>
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
  );
}

export default App;
