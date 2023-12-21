import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import DndTest from "./Test/dndTest";
import DoubleDroppableTest from "./Test/doubleDroppableTest";
import GridBoxTest from "./Test/gridBoxTest";
import FlexBoxTest from "./Test/flexboxTest";

export const routes = [
  { path: '/', name: 'Home', element: <Home/> },
  { path: '/DndTest', name: 'DndTest', element: <DndTest/> },
  { path: '/DoubleDroppableTest', name: 'DoubleDroppableTest', element: <DoubleDroppableTest/> },
  { path: '/GridBoxTest', name: 'GridBoxTest', element: <GridBoxTest/> },
  { path: '/FlexBoxTest', name: 'FlexBoxTest', element: <FlexBoxTest/> },
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