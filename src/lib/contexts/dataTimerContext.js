import { createContext, useContext } from 'react';

export const DataTimerContext = createContext();

export const useTimerContext = () => useContext(DataTimerContext);
