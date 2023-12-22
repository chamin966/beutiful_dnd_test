import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import BasicDndTest from "./Test/basicDndTest";
import DoubleDroppableTest from "./Test/doubleDroppableTest";
import GridBoxTest from "./Test/gridBoxTest";
import FlexBoxTest from "./Test/flexboxTest";
import CombinatorTest from "./Test/combinatorTest";
import DndModuleTest from "./Test/dndModuleTest";

export const routes = [
  { path: '/', name: 'Home', element: <Home/> },
  { path: '/CombinatorTest', name: 'CombinatorTest', element: <CombinatorTest/> },
  { path: '/BasicDndTest', name: 'BasicDndTest', element: <BasicDndTest/> },
  { path: '/GridBoxTest', name: 'GridBoxTest', element: <GridBoxTest/> },
  { path: '/FlexBoxTest', name: 'FlexBoxTest', element: <FlexBoxTest/> },
  { path: '/DoubleDroppableTest', name: 'DoubleDroppableTest', element: <DoubleDroppableTest/> },
  { path: '/DndModuleTest', name: 'DndModuleTest', element: <DndModuleTest/> },
];

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => <Route key={route.path} path={route.path} element={route.element}/>)}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;