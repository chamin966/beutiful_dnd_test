import NavigationButton from "../components/navigationButton";
import {ToolsDnd} from "../components/dndContext";

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

function DndModuleTest() {
  return (
    <>
      <NavigationButton path={'/'} name={'Home'}/>
      <ToolsDnd>
        <ToolsDnd.DropContainer droppableId={'Tool1'} isDropDisabled={true}>
          <ToolsDnd.DragContainer data={ITEMS1}>
            <ToolsDnd.DraggingItem/>
          </ToolsDnd.DragContainer >
        </ToolsDnd.DropContainer>
        <ToolsDnd.DropContainer droppableId={'Tool2'} isDropDisabled={true}>
          <ToolsDnd.DragContainer data={ITEMS2}>
            <ToolsDnd.DraggingItem/>
          </ToolsDnd.DragContainer >
        </ToolsDnd.DropContainer>
      </ToolsDnd>
    </>
  );
}

export default DndModuleTest;