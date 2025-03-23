import { useContext } from 'react';
import { UIContext } from '../contexts/UIContext';

const useUIContext = () => {
  return useContext(UIContext);
};

export default useUIContext;
