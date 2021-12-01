import { useCallback } from "react";
import { uuid } from "uuidv4";

import useLocalStorage from "./useLocalStorage";

export interface PositionType {
  left: number;
  top: number;
}

export interface ItemType {
  id: string;
  position: PositionType;
  title: string;
}

const useItems = () => {
  const [items, setItems] = useLocalStorage<ItemType[]>("items", []);

  const addItem = (title: string, position = { left: 0, top: 0 }) => {
    setItems((prevState) => [...prevState, { id: uuid(), position, title }]);
  };

  const deleteItem = useCallback(
    (itemId: string) => {
      setItems((prevState) =>
        [...prevState].filter((item) => item.id !== itemId)
      );
    },
    [setItems]
  );

  const getItems = () => {
    return items;
  };

  return { addItem, deleteItem, getItems, items, setItems };
};

export default useItems;
