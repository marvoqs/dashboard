import { memo } from "react";
import styled from "styled-components";

import Item from "./Item";

const Wrapper = styled.div`
  display: inline-block;
  transform: rotate(-7deg);
`;

export interface Props {
  id: string;
  title: string;
}

const DraggableItemPreview = ({ id, title }: Props) => {
  return (
    <Wrapper>
      <Item id={id} title={title} isPreview />
    </Wrapper>
  );
};

export default memo(DraggableItemPreview);
