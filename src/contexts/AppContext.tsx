import React, { createContext, useContext, useState } from 'react';
import { User } from '../types/User';

interface AppState {
  selectedUser: User | null;
  selectUser: (u: User | null) => void;
}

const UIContext = createContext<AppState>({
  selectedUser: null,
  selectUser: () => {},
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const selectUser = (user: User | null) => {
    setSelectedUser(user);
  };

  const state = {
    selectedUser,
  };

  return (
    <UIContext.Provider value={{ ...state, selectUser }}>
      {children}
    </UIContext.Provider>
  );
};

// Custom hook to access the context
const useAppContext = () => {
  return useContext(UIContext);
};

export { AppContextProvider, useAppContext };
