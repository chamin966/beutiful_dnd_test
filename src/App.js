import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import {Fragment} from "react";

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
  }
]

function App() {
  return (
    <DragDropContext
      onDragEnd={() => {}}
      onDragStart={() => {}}
    >
      <aside>
        <Droppable
          droppableId="TOOLS"
          isDropDisabled={true}
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
                        <Fragment>
                          <StyledTool
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            isDragging={snapshot.isDragging}
                            style={provided.draggableProps.style}
                            onClick={(e) => {}}
                          >
                            <div>{tool.name}</div>
                            {/* change image for drag tool component > { snapshot.isDragging ? tempToolContent1 : tempToolContent2 }*/}
                          </StyledTool>
                          {snapshot.isDragging && (
                            <StyledToolClone>{tool.name}</StyledToolClone>
                          )}
                        </Fragment>
                      )}
                    </Draggable> );
                } ) }
              {provided.placeholder}
            </StyledToolContainer>
          ) }
        </Droppable>
      </aside>
    </DragDropContext>
  );
}

export default App;

export const StyledToolContainer = styled.div`
    display: flex;
    margin: 0.5rem;
    padding: 0.5rem;
    width: 400px;
    background-color: red;
    flex-wrap: wrap;
`;

export const StyledTool = styled.div`
    display: flex;
    width: 100px;
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px dashed;
    background-color: white;
    // change image for drag tool component
    // width: ${(props) => (props.isDragging ? "0px" : "90%")};
    // background-color: ${(props) => (props.isDragging ? "skyblue" : "white")};
    // border: ${(props) => (props.isDragging ? "1px dashed" : "1px solid")};
`;
export const StyledToolClone = styled(StyledTool)`
    ~ div {
        transform: none !important;
    }
`;