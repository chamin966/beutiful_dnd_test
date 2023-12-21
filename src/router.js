import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import BasicDndTest from "./Test/BasicDndTest";
import DoubleDroppableTest from "./Test/doubleDroppableTest";
import GridBoxTest from "./Test/gridBoxTest";
import FlexBoxTest from "./Test/flexboxTest";
import CombinatorTest from "./Test/combinatorTest";

export const routes = [
  { path: '/', name: 'Home', element: <Home/> },
  { path: '/BasicDndTest', name: 'BasicDndTest', element: <BasicDndTest/> },
  { path: '/DoubleDroppableTest', name: 'DoubleDroppableTest', element: <DoubleDroppableTest/> },
  { path: '/GridBoxTest', name: 'GridBoxTest', element: <GridBoxTest/> },
  { path: '/FlexBoxTest', name: 'FlexBoxTest', element: <FlexBoxTest/> },
  { path: '/CombinatorTest', name: 'CombinatorTest', element: <CombinatorTest/> },
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