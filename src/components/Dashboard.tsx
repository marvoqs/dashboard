import styled from "styled-components";

import DashboardItem from "./DashboardItem";

import { ItemType } from "../hooks/useDashboard";

const Wrapper = styled.main`
  background-color: gray;
  color: white;
  height: 100vh;
`;

interface Props {
  deleteItem: (itemId: string) => void;
  getItems: () => ItemType[];
}

const Dashboard = ({ deleteItem, getItems }: Props) => {
  const items = getItems();
  return (
    <Wrapper>
      {items.map((item) => (
        <DashboardItem key={item.id} {...item} deleteItem={deleteItem} />
      ))}
    </Wrapper>
  );
};

export default Dashboard;
