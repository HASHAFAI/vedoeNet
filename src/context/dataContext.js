import Toast from "../component/Toast";
import data from "./../data/store-items.json";
import { createContext, useContext, useState } from "react";
const Data = createContext([]);
const DataCart = createContext([]);
const Tost = createContext([]);

export function DataProvider({ children }) {
  return <Data.Provider value={data}>{children}</Data.Provider>;
}

export function DataCartProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <DataCart.Provider value={{ cart, setCart }}>{children}</DataCart.Provider>
  );
}

export function TostProvider({ children }) {
  const [isTost, setIsTost] = useState(false);
  function fuTost() {
    setIsTost(true);
    setTimeout(() => {
      setIsTost(false);
    }, 1000);
  }
  return (
    <Tost.Provider value={{ isTost, fuTost }}>
      <>
        <Toast isTost={isTost} />
        {children}
      </>
    </Tost.Provider>
  );
}

export const useData = () => {
  return useContext(Data);
};
export const useDataCart = () => {
  return useContext(DataCart);
};
export const useTost = () => {
  return useContext(Tost);
};
