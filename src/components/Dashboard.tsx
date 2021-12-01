import { useCallback } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";

import Draggable from "./Draggable";

import { ItemType, PositionType } from "../hooks/useDashboard";

const Wrapper = styled.main`
  background-color: gray;
  color: white;
  height: 100vh;
  position: relative;
`;

interface Props {
  deleteItem: (itemId: string) => void;
  getItems: () => ItemType[];
  setItems: (value: ItemType[] | ((val: ItemType[]) => ItemType[])) => void;
}

const Dashboard = ({ deleteItem, getItems, setItems }: Props) => {
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
        <Draggable key={item.id} {...item} onDeleteItem={deleteItem} />
      ))}
    </Wrapper>
  );
};

export default Dashboard;
