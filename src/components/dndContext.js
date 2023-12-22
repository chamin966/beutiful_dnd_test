import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {createContext, useContext} from "react";
import {
  StyledDoubleContextContainer, StyledDropContainer, StyledDropRowsContainer,
  StyledTool,
  StyledToolClone,
  StyledToolContainer
} from "../styles/common/dndStyles";

const DraggableContext = createContext(undefined);

function DndRoot({children}) {
  return(
    <DragDropContext
      onDragEnd={() => {}}
      onDragStart={() => {}}
    >
      <StyledDropRowsContainer>
        {children}
      </StyledDropRowsContainer>
    </DragDropContext>
  )
}

function DropContainer({children, droppableId, isDropDisabled}){
  return(
    <Droppable
      droppableId={droppableId}
      isDropDisabled={isDropDisabled}
    >
      {
        (provided, snapshot) => (
          <StyledDropContainer ref={provided.innerRef}>
            {children}
          </StyledDropContainer>
        )
      }
    </Droppable>
  )
}

function DragContainer({children, data}){
  return(
    data.map((tool, toolIndex) =>
      <Draggable
        key={tool.id}
        draggableId={tool.id}
        index={toolIndex}
      >
        {(provided, snapshot) => (
          <>
            <StyledTool
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <DraggableContext.Provider value={{tool}}>
                {children}
              </DraggableContext.Provider>
            </StyledTool>
            {snapshot.isDragging && (
              <StyledToolClone>{tool.name}Clone</StyledToolClone>
            )}
          </>
        )}
      </Draggable>
    )
  )
}

function DraggingItem() {
  const {tool} =useContext(DraggableContext);

  return(
    <div>{tool.name}</div>
  )
}

function DraggingItem2() {
  const {tool} =useContext(DraggableContext);
  
  return(
    <div>{tool.name} 갈아낌</div>
  )
}

export const ToolsDnd = Object.assign(DndRoot, {
  DragContainer: DragContainer,
  DropContainer: DropContainer,
  DraggingItem: DraggingItem,
  DraggingItem2: DraggingItem2
});