import {useNavigate} from "react-router-dom";

function NavigationButton({path, name}){
  const navigate = useNavigate();
  
  const handleHomeButton = () => {
    navigate(path);
  }
  return(
    <button onClick={handleHomeButton}>{name} 화면으로 이동</button>
  )
}

export default NavigationButton;