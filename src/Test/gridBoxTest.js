import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
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

function GridBoxTest() {
  // 자신의 자리로 돌아가지 않고
  // <Droppable direction={'vertical'} /> 시 자신 앞 순서로,
  // <Droppable direction={'horizon'} /> 시 자신 뒤 순서의 요소로 드랍된다.
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
                                <StyledToolClone>{tool.name}Clone</StyledToolClone>
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

export default GridBoxTest;

export const StyledToolContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  // gridbox의 요소 내부 정렬는 justifu-contents가 아니라 justify-items로 주축 정렬을 한다.
  // align-items는 flexbox와 같다.
  // 수직 수평 동시 정렬은 place-items 속성을 사용한다.
  //justify-items: center;
  place-items: center;
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