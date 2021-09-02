import React, { useContext, useState } from "react";

export type GlobalContent = {
  isActive: boolean
}
type mifun = Function;
const DataContext = React.createContext<GlobalContent>({isActive: false});
const DataUpdateContext = React.createContext<mifun>(() => {});

export function useData() {
  return useContext(DataContext);
}

export function useDataUpdate() {
  return useContext(DataUpdateContext);
}

type Props = {
  children: JSX.Element,
};

export function DataProvider({ children }: Props) {
  const [data, setData] = useState<GlobalContent>({isActive: false});

  function updateData(e: string) {
    console.log(e);
    setData(oldState => {
      return {isActive: !oldState.isActive}
    });
  }

  return (
    <DataContext.Provider value={data}>
      <DataUpdateContext.Provider value={updateData}>
        {children}
      </DataUpdateContext.Provider>
    </DataContext.Provider>
  );
}
