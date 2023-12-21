import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import NavigationButton from "../components/navigationButton";

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

function DndTest() {
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
                ITEMS1.map((tool, toolIndex) => {
                  return (
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
                            isDragging={snapshot.isDragging}
                          >
                            <div>{tool.name}</div>
                          </StyledTool>
                          {snapshot.isDragging && (
                            <StyledToolClone>{tool.name + 'Clone'}</StyledToolClone>
                          )}
                        </>
                      )}
                    </Draggable>);
                } ) }
              {provided.placeholder}
            </StyledToolContainer>
          ) }
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default DndTest;

export const StyledToolContainer = styled.div`
    display: flex;
    flex-direction: column;
<!--<Droppable>의 direction 속성을 vertical(default), horizon 으로 엘리먼트 흐름의 방향을 조절하면 자연스럽게 움직임-->
`;

export const StyledTool = styled.div`
    width: 120px;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: red;
`;
export const StyledToolClone = styled(StyledTool)`
  background-color: cornflowerblue;
  ~ div {
      //드래그한 엘리먼트의 빈자리를 채우지 않도록 드래그한 엘리먼트 아래를 움직이지 않게 해야함
      // => 원래 beautiful dnd에서 밀리거나 움직이는 작용을 없앰
      transform: none !important;
    }
`;