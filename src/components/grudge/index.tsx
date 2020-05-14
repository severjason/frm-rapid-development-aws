import React from 'react';
import styles from './grudge.module.css';
import type { GrudgeType } from '../../ts-types';

type Props = GrudgeType & {
  onCheckOff: () => void;
  onRemove: () => void;
}

const Grudge: React.FC<Props> =
  ({
     avenged, id, person, deed, onCheckOff, onRemove
   }) => {
    return (
      <article>
        <label htmlFor={id}>
          <input
            type="checkbox"
            checked={avenged}
            onChange={onCheckOff}
            id={id}
          />
          <strong>{person}</strong>:{' '}
          {deed}
        </label>
        <button className={styles.remove} onClick={onRemove}>
          Remove
        </button>
      </article>
    );
  }

export default Grudge;
