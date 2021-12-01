import { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(255, 0, 0, 0.5);
  border: 1px solid red;
  display: inline-block;
  margin: 5px;
`;

const DeleteButton = styled.span`
  cursor: pointer;
`;

interface Props {
  id: string;
  isPreview?: boolean;
  onDeleteItem?: (id: string) => void;
  title: string;
}

const Item = ({ id, isPreview = false, onDeleteItem, title }: Props) => {
  const handleDeleteButtonClick = () => {
    if (onDeleteItem) onDeleteItem(id);
  };

  return (
    <Wrapper>
      <div>
        <DeleteButton onClick={handleDeleteButtonClick}>[x]</DeleteButton>
      </div>
      {title}
    </Wrapper>
  );
};

export default memo(Item);
