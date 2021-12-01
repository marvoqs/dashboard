import { useCallback } from "react";
import { uuid } from "uuidv4";

import { ItemType } from "./useItems";
import useLocalStorage from "./useLocalStorage";

export interface PositionType {
  left: number;
  top: number;
}

export interface GroupType {
  id: string;
  position: PositionType;
  title: string;
  items: ItemType[];
}

const useGroups = () => {
  const [groups, setGroups] = useLocalStorage<GroupType[]>("groups", []);

  const addGroup = (
    title: string,
    position = { left: 0, top: 0 },
    items = []
  ) => {
    setGroups((prevState) => [
      ...prevState,
      { id: uuid(), position, title, items },
    ]);
  };

  const deleteGroup = useCallback(
    (groupId: string) => {
      setGroups((prevState) =>
        [...prevState].filter((group) => group.id !== groupId)
      );
    },
    [setGroups]
  );

  const getGroups = () => {
    return groups;
  };

  return { addGroup, deleteGroup, getGroups, groups, setGroups };
};

export default useGroups;
