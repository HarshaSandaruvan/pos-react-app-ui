
import './App.css';
import Cart from './components/CartContainer/cart';
import FoodTileContaine from './components/FoodTileContaine/FoodTileContaine';
import ItemTitleContainer from './components/ItemTileContainer/itemTitleContainer';
import UpperNavBar from './components/NavBar/UpperNavBar/upperNavBar';
import OdersContainer from './components/OrdersContainer/ordersContainer';
import PaymentsCom from './components/PaymentsDetails/PaymentsCom';


function App() {
  return (
    <div className="App">
     <UpperNavBar/>
     <OdersContainer/>
     <div className="container">
          <FoodTileContaine/>
          <ItemTitleContainer/>
     </div>
      <div className="cartContainer">
          <Cart/>
      </div>
      <div className="paymentcontainer">
            <PaymentsCom/>
      </div>
      
        
    </div>
  );
}

export default App;
