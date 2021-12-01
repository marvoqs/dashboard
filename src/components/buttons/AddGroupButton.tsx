import styled from "styled-components";

const Wrapper = styled.button`
  border-radius: 3px;
`;

interface Props {
  addGroup: (newItem: string) => void;
}

const AddGroupButton = ({ addGroup }: Props) => {
  const handleClick = () => {
    const title = prompt("What is a name of the new group?");

    if (title === null || title.trim() === "") return;

    addGroup(title);
  };

  return <Wrapper onClick={handleClick}>Add Group</Wrapper>;
};

export default AddGroupButton;
