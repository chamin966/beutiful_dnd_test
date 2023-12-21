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
        <Droppable
          droppableId="TOOLS1"
          isDropDisabled={true}
          // direction={'horizon'}
        >
          {(provided) => (
            <StyledGridToolContainer
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
                            style={{backgroundColor: 'indianred', ...provided.draggableProps.style}}
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
            </StyledGridToolContainer>
          ) }
        </Droppable>
      </DragDropContext>
    </>
  
  );
}

export default GridBoxTest;

const StyledGridToolContainer = styled(StyledToolContainer)`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  // gridbox의 요소 내부 정렬는 justifu-contents가 아니라 justify-items로 주축 정렬을 한다.
  // align-items는 flexbox와 같다.
  // 수직 수평 동시 정렬은 place-items 속성을 사용한다.
  //justify-items: center;
  place-items: center;
`;
