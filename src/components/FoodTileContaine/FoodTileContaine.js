import React from 'react';
import style from './FoodTileContaine.module.css';
import FoodTypeTile from '../FoodTypeTile/foodTypeTile';
import BreakfastImg from '../../assets/breakfast.png';
import LunchImg from '../../assets/lunch.png';
import DinnerImg from '../../assets/dinner.png';
import SoupImg from '../../assets/soups.png';
import DesertImg from '../../assets/desert.png';
import DrinksImg from '../../assets/drinks.png';


	

		const FoodTileContaine =()=>{
   			 return(
        		<div className={style.container}>
           			<FoodTypeTile heading="Breakfast" Item="13 Items" img={BreakfastImg}/>
                    <FoodTypeTile heading="Lunch" Item="5 Items" img={LunchImg}/>
                    <FoodTypeTile heading="Dinner" Item="7 Items" img={DinnerImg}/>
                    <FoodTypeTile heading="Soup" Item="8 Items" img={SoupImg}/>
                    <FoodTypeTile heading="Desert" Item="2 Items" img={DesertImg}/>
                    <FoodTypeTile heading="Drinks" Item="10 Items" img={DrinksImg}/>
        		</div>
    		);
	}
	export default FoodTileContaine;