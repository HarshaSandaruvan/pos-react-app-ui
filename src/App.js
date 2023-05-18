
import './App.css';
import FoodTileContaine from './components/FoodTileContaine/FoodTileContaine';
import MainLogo from './components/NavBar/MainLogo/mainLogo';
import UpperNavBar from './components/NavBar/UpperNavBar/upperNavBar';
import OdersContainer from './components/OrdersContainer/ordersContainer';


function App() {
  return (
    <div className="App">
     <UpperNavBar/>
     <OdersContainer/>
     <FoodTileContaine/>
      
    </div>
  );
}

export default App;
