import React, { createContext, useContext, useState } from 'react';

interface AppState {
  infoPanelShown: boolean;
  showInfoPanel: (arg: boolean) => void;
}

const UIContext = createContext<AppState>({
  infoPanelShown: false,
  showInfoPanel: () => {},
});

const UIContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [infoPanel, setInfoPanel] = useState(false);

  const showInfoPanel = (arg: boolean) => {
    setInfoPanel(arg);
  };

  const state = {
    infoPanelShown: infoPanel,
  };

  return <UIContext.Provider value={{ ...state, showInfoPanel }}>{children}</UIContext.Provider>;
};

// Custom hook to access the context
const useUIContext = () => {
  return useContext(UIContext);
};

export { UIContextProvider, useUIContext };
