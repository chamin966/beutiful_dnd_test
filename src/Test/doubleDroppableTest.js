import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import {Fragment} from "react";
import NavigationButton from "../components/navigationButton";
import {StyledTool, StyledToolClone, StyledToolContainer} from "../styles/common/dndStyles";

const ITEMS1 = [
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
  }
]

const ITEMS2 = [
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

function DoubleDroppableTest() {
  return (
    <>
      <NavigationButton path={'/'} naem={'Home'}/>
      <DragDropContext
        onDragEnd={() => {}}
        onDragStart={() => {}}
      >
        <DroppablesContainer>
          <div>
            <Droppable
              droppableId="TOOLS1"
              isDropDisabled={true}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                >
                  {
                    ITEMS1.map((tool, toolIndex) => {
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
                </div>
              ) }
            </Droppable>
          </div>
          <div>
            <Droppable
              droppableId="TOOLS2"
              isDropDisabled={true}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                >
                  {
                    ITEMS2.map((tool, toolIndex) => {
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
                                style={{backgroundColor: 'indianred', ...provided.draggableProps.style}}
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
                </div>
              ) }
            </Droppable>
          </div>
        </DroppablesContainer>
      </DragDropContext>
    </>
  );
}

export default DoubleDroppableTest;

const DroppablesContainer = styled(StyledToolContainer)`
  flex-direction: row;
  // 클론 생성 시 높이 커지는 문제 해결 가능
  //max-height: 137px;
`
