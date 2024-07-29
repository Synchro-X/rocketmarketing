"use client";

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

interface globalContextType {
  isLoadingComplete: boolean;
  setLoadingComplete: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<globalContextType | undefined>(undefined);

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);


  return (
    <GlobalContext.Provider
      value={{ isLoadingComplete, setLoadingComplete }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
};
