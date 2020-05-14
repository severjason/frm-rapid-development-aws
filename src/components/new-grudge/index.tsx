import _noop from 'lodash/noop';
import React, { useState } from 'react';
import type { GrudgeType } from '../../ts-types';
import styles from './newGrudge.module.css';

type State = {
  person: GrudgeType['person'];
  deed: GrudgeType['deed'];
}

type Props = {
  onSubmit: (grudge: GrudgeType) => void;
}

const initialState: State = {person: '', deed: ''};

const NewGrudge: React.FC<Props> = ({onSubmit = _noop}) => {
  const [state, setState] = useState<State>(initialState);

  const handleChange = (type: GrudgeType['person' | 'deed']) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [type]: event.target.value});
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const {person, deed} = state;

    event.preventDefault();

    onSubmit({
      avenged: false,
      deed,
      id: Date.now().toString(),
      person,
    });

    setState(initialState);
  };

  return (
    <form className={styles.new} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name="person"
        placeholder="Person"
        type="text"
        value={state.person}
        onChange={handleChange('person')}
      />
      <input
        className={styles.input}
        name="deed"
        placeholder="Deed"
        type="text"
        value={state.deed}
        onChange={handleChange('deed')}
      />
      <input className="button" type="submit"/>
    </form>
  );

}

export default NewGrudge;
