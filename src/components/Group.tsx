import { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(0, 0, 255, 0.5);
  border: 2px dashed blue;
  display: inline-block;
  margin: 5px;
`;

interface Props {
  id: string;
  isPreview?: boolean;
  onDeleteItem?: (id: string) => void;
  title: string;
}

const Group = ({ id, isPreview = false, onDeleteItem, title }: Props) => {
  return <Wrapper>{title}</Wrapper>;
};

export default memo(Group);
