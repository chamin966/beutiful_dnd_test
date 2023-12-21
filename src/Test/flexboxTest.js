import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import NavigationButton from "../components/navigationButton";
import {StyledTool, StyledToolClone, StyledToolContainer} from "../styles/common/dndStyles";

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

function FlexBoxTest() {
  return (
    <>
      <NavigationButton path={'/'} naem={'Home'}/>
      <DragDropContext
        onDragEnd={() => {}}
        onDragStart={() => {}}
      >
        <Droppable
          droppableId="TOOLS1"
          isDropDisabled={true}
          // direction={'horizon'}
        >
          {(provided) => (
            <StyledFlexToolContainer
              ref={provided.innerRef}
            >
              {
                ITEMS.map((tool, toolIndex) => {
                  return (
                    <Draggable
                      key={tool.id}
                      index={toolIndex}
                      draggableId={tool.id}
                    >
                      {(provided, snapshot) => (
                        <>
                          <StyledTool
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            isDragging={snapshot.isDragging}
                            style={{backgroundColor: 'darkseagreen', ...provided.draggableProps.style}}
                          >
                            <div>{tool.name}</div>
                            {/* change image for drag tool component > { snapshot.isDragging ? tempToolContent1 : tempToolContent2 }*/}
                          </StyledTool>
                          {snapshot.isDragging && (
                            <StyledToolClone>{tool.name}</StyledToolClone>
                          )}
                        </>
                      )}
                    </Draggable>);
                } ) }
              {provided.placeholder}
            </StyledFlexToolContainer>
          ) }
        </Droppable>
      </DragDropContext>
    </>
  
  );
}

export default FlexBoxTest;

const StyledFlexToolContainer = styled(StyledToolContainer)`
  flex-direction: row;
  flex-wrap: wrap;
`;
