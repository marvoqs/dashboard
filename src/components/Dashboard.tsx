import { useCallback } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";

import DraggableGroup from "./DraggableGroup";
import DraggableItem from "./DraggableItem";

import { GroupType } from "../hooks/useGroups";
import { ItemType, PositionType } from "../hooks/useItems";

const Wrapper = styled.main`
  background-color: gray;
  color: white;
  height: 100vh;
  position: relative;
`;

interface Props {
  deleteItem: (itemId: string) => void;
  getGroups: () => GroupType[];
  getItems: () => ItemType[];
  setItems: (value: ItemType[] | ((val: ItemType[]) => ItemType[])) => void;
}

const Dashboard = ({ deleteItem, getGroups, getItems, setItems }: Props) => {
  const groups = getGroups();
  const items = getItems();

  const moveItem = useCallback(
    (id: string, position: PositionType) => {
      setItems((prevState) =>
        [...prevState].map((item) =>
          item.id === id ? { ...item, position } : item
        )
      );
    },
    [setItems]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item: ItemType, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };

        const left = Math.round(item.position.left + delta.x);
        const top = Math.round(item.position.top + delta.y);

        moveItem(item.id, { left, top });
        return undefined;
      },
    }),
    [moveItem]
  );

  return (
    <Wrapper ref={drop}>
      {items.map((item) => (
        <DraggableItem key={item.id} {...item} onDeleteItem={deleteItem} />
      ))}
      {groups.map((group) => (
        <DraggableGroup key={group.id} {...group} />
      ))}
    </Wrapper>
  );
};

export default Dashboard;
