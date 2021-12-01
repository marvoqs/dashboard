import { memo, useEffect } from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import styled from "styled-components";

import Group from "./Group";

import { GroupType } from "../hooks/useGroups";
import { PositionType } from "../hooks/useItems";

const Wrapper = styled.div<{ isDragging: boolean; position: PositionType }>`
  cursor: grab;
  transform: ${({ position }) =>
    `translate3d(${position.left}px, ${position.top}px, 0)`};
  position: absolute;

  /* IE fallback: hide the real node using CSS when dragging, because IE will ignore our custom "empty image" drag preview. */
  height: ${({ isDragging }) => (isDragging ? 0 : "")};
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  /* End of IE fallback. */
`;

const DraggableGroup = ({ id, title, position }: GroupType) => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "box",
      item: { id, title, position },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, position, title]
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <Wrapper isDragging={isDragging} position={position} ref={drag}>
      <Group id={id} title={title} />
    </Wrapper>
  );
};

export default memo(DraggableGroup);
