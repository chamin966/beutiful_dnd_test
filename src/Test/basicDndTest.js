import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import NavigationButton from "../components/navigationButton";
import {StyledTool, StyledToolContainer} from "../styles/common/dndStyles";

const ITEMS = [
  {
    id: 'a',
    name: 'armin1111'
  },
  {
    id: 'b',
    name: 'armin222'
  },
  {
    id: 'c',
    name: 'armin333'
  },
  {
    id: 'd',
    name: 'armin444'
  },
  {
    id: 'e',
    name: 'armin555'
  },
  {
    id: 'f',
    name: 'armin666'
  }
]

function BasicDndTest() {
  return (
    <>
      <NavigationButton path={'/'} name={'Home'}/>
      <DragDropContext
        onDragEnd={() => {}}
        onDragStart={() => {}}
      >
        <Droppable
          droppableId="TOOLS1"
          isDropDisabled={true}
        >
          {(provided) => (
            <StyledToolContainer
              ref={provided.innerRef}
            >
              {
                ITEMS.map((tool, toolIndex) =>
                  <Draggable
                    key={tool.id}
                    draggableId={tool.id}
                    index={toolIndex}
                  >
                    {(provided, snapshot) => (
                      <StyledTool
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                      >
                        <div>{tool.name}</div>
                      </StyledTool>
                    )}
                  </Draggable>
                )}
              {provided.placeholder}
            </StyledToolContainer>
          ) }
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default BasicDndTest;