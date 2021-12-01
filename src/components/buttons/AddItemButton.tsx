import styled from "styled-components";

const Wrapper = styled.button`
  border-radius: 3px;
`;

interface Props {
  addItem: (newItem: string) => void;
}

const AddItemButton = ({ addItem }: Props) => {
  const handleClick = () => {
    const newItem = prompt("What is a new item?");

    if (newItem === null || newItem.trim() === "") return;

    addItem(newItem);
  };

  return <Wrapper onClick={handleClick}>Add Item</Wrapper>;
};

export default AddItemButton;
