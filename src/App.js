
import './App.css';
import FoodTileContaine from './components/FoodTileContaine/FoodTileContaine';
import ItemTitleContainer from './components/ItemTileContainer/itemTitleContainer';
import UpperNavBar from './components/NavBar/UpperNavBar/upperNavBar';
import OdersContainer from './components/OrdersContainer/ordersContainer';


function App() {
  return (
    <div className="App">
     <UpperNavBar/>
     <OdersContainer/>
     <div className="container">
          <FoodTileContaine/>
          <ItemTitleContainer/>
     </div>
        
           
        
    </div>
  );
}

export default App;
