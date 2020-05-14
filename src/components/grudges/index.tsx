import _noop from 'lodash/noop';
import React, { useState } from 'react';

import { GrudgeType } from '../../ts-types';
import Grudge from '../grudge';
import styles from './grudges.module.css';

type ContentFor = {
  person: GrudgeType['person'];
  deed: GrudgeType['deed'];
}

const contentFor = ({person, deed}: ContentFor) => (person + deed).toLowerCase();

type Props = {
  title: string;
  grudges: GrudgeType[];
  onCheckOff?: (grudge: GrudgeType) => void;
  onRemove?: (grudge: GrudgeType) => void;
}

const Grudges: React.FC<Props> =
  ({
     title,
     grudges,
     onCheckOff = _noop,
     onRemove = _noop,
   }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const updateSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchTerm = event.target.value.toLowerCase();
      setSearchTerm(newSearchTerm);
    };

    return (
      <section>
        <h2>
          {title} ({grudges.length})
        </h2>
        <input
          className={styles.searchTerm}
          value={searchTerm}
          placeholder="Filter…"
          onChange={updateSearchTerm}
        />
        {grudges
          .filter(grudge => contentFor(grudge).includes(searchTerm))
          .sort((a, b) => Number(a.id) - Number(b.id))
          .map(grudge => (
            <Grudge
              key={grudge.id}
              onCheckOff={() => onCheckOff(grudge)}
              onRemove={() => onRemove(grudge)}
              {...grudge}
            />
          ))}
      </section>
    );
  }

export default Grudges;
