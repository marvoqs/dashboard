import { memo } from "react";
import styled from "styled-components";

import DashboardItemBox from "./DashboardItemBox";

const Wrapper = styled.div`
  display: inline-block;
  transform: rotate(-7deg);
`;

export interface Props {
  id: string;
  title: string;
}

export interface BoxDragPreviewState {
  tickTock: any;
}

const DraggablePreview = ({ id, title }: Props) => {
  return (
    <Wrapper>
      <DashboardItemBox id={id} title={title} isPreview />
    </Wrapper>
  );
};

export default memo(DraggablePreview);
