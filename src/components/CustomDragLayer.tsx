import { XYCoord, useDragLayer } from "react-dnd";
import styled from "styled-components";
import DraggablePreview from "./DraggablePreview";

const LayerWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const ItemWrapper = styled.div<{
  initialOffset: XYCoord | null;
  currentOffset: XYCoord | null;
}>`
  display: ${({ initialOffset, currentOffset }) =>
    !initialOffset || !currentOffset ? "none" : "inherit"};
  transform: ${({ currentOffset }) =>
    currentOffset
      ? `translate(${currentOffset.x}px, ${currentOffset.y}px)`
      : "none"};
`;

const CustomDragLayer = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      currentOffset: monitor.getSourceClientOffset(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      isDragging: monitor.isDragging(),
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
    }));

  function renderItem() {
    switch (itemType) {
      case "box":
        return <DraggablePreview id={item.id} title={item.title} />;
      default:
        return null;
    }
  }

  if (!isDragging) {
    return null;
  }

  return (
    <LayerWrapper>
      <ItemWrapper initialOffset={initialOffset} currentOffset={currentOffset}>
        {renderItem()}
      </ItemWrapper>
    </LayerWrapper>
  );
};

export default CustomDragLayer;
