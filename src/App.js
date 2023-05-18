
import './App.css';
import FoodTileContaine from './components/FoodTileContaine/FoodTileContaine';
import MainLogo from './components/NavBar/MainLogo/mainLogo';
import UpperNavBar from './components/NavBar/UpperNavBar/upperNavBar';


function App() {
  return (
    <div className="App">
     <UpperNavBar/>
     <FoodTileContaine/>
      
    </div>
  );
}

export default App;
