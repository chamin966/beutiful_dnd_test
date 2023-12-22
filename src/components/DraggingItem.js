import {StyledTool} from "../styles/common/dndStyles";

function DraggingItem({provided, snapshot, item}) {
  return(
    <StyledTool
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      isDragging={snapshot.isDragging}
    >
      <div>{item.name}</div>
    </StyledTool>
  )
}

export default DraggingItem()