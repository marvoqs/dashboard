import styled from "styled-components";

import { ItemType } from "../hooks/useDashboard";

const Wrapper = styled.div`
  background-color: rgba(255, 0, 0, 0.5);
  border: 1px solid red;
  display: inline-block;
  margin: 5px;
`;

interface Props extends ItemType {
  deleteItem: (itemId: string) => void;
}

const DashboardItem = ({ id, value, deleteItem }: Props) => {
  const handleDelete = () => {
    deleteItem(id);
  };

  return (
    <Wrapper>
      <div onClick={handleDelete}>[x]</div>
      {value}
    </Wrapper>
  );
};

export default DashboardItem;
