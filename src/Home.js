import {routes} from "./router";
import NavigationButton from "./components/navigationButton";

function Home() {
  return(
    <div>
      <ul>
        {routes.slice(1).map(route =>
            <li>
              <NavigationButton path={route.path} name={route.name}>{route.name}</NavigationButton>
            </li>
          )}
      </ul>
    </div>
  )
}

export default Home;