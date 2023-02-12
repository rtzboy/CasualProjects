import { createContext, useContext } from 'react';

export const TypingContext = createContext();

export const useTypingContext = () => useContext(TypingContext);
