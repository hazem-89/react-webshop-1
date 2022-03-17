import { createContext, FC, useContext, useState } from "react";
import { OrderKey } from "../data";
import { fakeFetch } from "../FakeFetch";

interface ContextValue {
  isConfirmed: boolean;
  key?: OrderKey;
  confirm: () => void;
}

export const KeyContext = createContext<ContextValue>({
    isConfirmed: false,
    key: {key: 0},
    confirm: () => {},
});

const KeyProvider: FC = (props) => {
  const [key, setKey] = useState<OrderKey>();
  const [isConfirmed, setIsConfirmed] = useState(false);

  const confirm = async () => {
    setIsConfirmed(true);
    const key = await fakeFetch("api/confirm");
    setKey(key);
    setIsConfirmed(false);
  };

  return (
    <KeyContext.Provider value={{ key, isConfirmed, confirm }}>
      {props.children}
    </KeyContext.Provider>
  );
};

export default KeyProvider;

export const useKey = () => useContext(KeyContext);