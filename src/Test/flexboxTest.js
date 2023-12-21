import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import {Fragment} from "react";
import NavigationButton from "../components/navigationButton";

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
        <div style={{backgroundColor: 'blue', width: '300px', height: '100vh'}}>
          <div>
            <Droppable
              droppableId="TOOLS1"
              isDropDisabled={true}
              // direction={'horizon'}
            >
              {(provided) => (
                <StyledToolContainer
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
                                style={{backgroundColor: 'green', ...provided.draggableProps.style}}
                                onClick={(e) => {}}
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
                </StyledToolContainer>
              ) }
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </>
  
  );
}

export default FlexBoxTest;

export const StyledToolContainer = styled.div`
  display: flex;
  //flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledTool = styled.div`
  width: 100px;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: white;
  border: ${(props) => (props.isDragging && "3px dashed yellow")};
`;
export const StyledToolClone = styled(StyledTool)`
  ~ div {
      transform: none !important;
  }
`;