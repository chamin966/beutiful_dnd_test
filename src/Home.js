import {useNavigate} from 'react-router-dom'
import {routes} from "./Router";

function Home() {
  const navigate = useNavigate();
  
  const handleNavigateButton = (path) => {
    navigate(path);
  }
  return(
    <div>
      <ul>
        {routes.slice(1).map(route =>
            <li>
              <button onClick={() => handleNavigateButton(route.path)}>{route.name}</button>
            </li>
          )}
      </ul>
    </div>
  )
}

export default Home;