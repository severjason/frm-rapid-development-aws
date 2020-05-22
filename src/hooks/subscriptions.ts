import { useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import { newGrudgeSubscription, deleteGrudgeSubscription, updateGrudgeSubscription } from '../api';
import { GrudgeType } from '../ts-types';

function useGrudgeSubscriptions(grudges: GrudgeType[], setGrudges: Dispatch<SetStateAction<GrudgeType[]>>) {

  const getFilteredGrudges = useCallback((id: string) => grudges.filter(other => other.id !== id), [grudges]);

  useEffect(() => {
    const addSubscription = newGrudgeSubscription().subscribe({
      next: ({value}) => {
        const newGrudge = value.data?.onCreateGrudge;
        return newGrudge ? setGrudges([newGrudge, ...grudges]) : false;
      }
    });

    const deleteSubscription = deleteGrudgeSubscription().subscribe({
      next: ({value}) => {
        const deletedGrudge = value.data?.onDeleteGrudge;
        return deletedGrudge ? setGrudges(getFilteredGrudges(deletedGrudge.id)) : false;
      }
    });

    const updateSubscription = updateGrudgeSubscription().subscribe({
      next: ({value}) => {
        const updatedGrudge = value.data?.onUpdateGrudge;
        return updatedGrudge ? setGrudges([updatedGrudge, ...getFilteredGrudges(updatedGrudge.id)]) : false;
      }
    });

    return () => {
      addSubscription.unsubscribe();
      deleteSubscription.unsubscribe();
      updateSubscription.unsubscribe();
    }
  }, [grudges, setGrudges, getFilteredGrudges]);
}

export default useGrudgeSubscriptions;
