import { uuid } from "uuidv4";

import useLocalStorage from "./useLocalStorage";

export interface ItemType {
  id: string;
  value: string;
}

const useDashboard = () => {
  const [items, setItems] = useLocalStorage<ItemType[]>("items", []);

  const addItem = (newItem: string) => {
    setItems((prevState) => [...prevState, { id: uuid(), value: newItem }]);
  };

  const deleteItem = (itemId: string) => {
    setItems((prevState) =>
      [...prevState].filter((item) => item.id !== itemId)
    );
  };

  const getItems = () => {
    return items;
  };

  return { addItem, deleteItem, getItems, items };
};

export default useDashboard;
