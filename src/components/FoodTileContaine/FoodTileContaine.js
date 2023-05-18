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
           			<FoodTypeTile heading="Breakfast" Item="13 Items" img={BreakfastImg} defColour="#55efc4" onColour="#00b894"/>
                    <FoodTypeTile heading="Lunch" Item="5 Items" img={LunchImg} defColour="#81ecec" onColour="#00cec9" />
                    <FoodTypeTile heading="Dinner" Item="7 Items" img={DinnerImg} defColour="#ffeaa7" onColour="#fdcb6e"/>
                    <FoodTypeTile heading="Soup" Item="8 Items" img={SoupImg} defColour="#74b9ff" onColour="#0984e3"/>
                    <FoodTypeTile heading="Desert" Item="2 Items" img={DesertImg} defColour="#ff7675" onColour="#d63031"/>
                    <FoodTypeTile heading="Drinks" Item="10 Items" img={DrinksImg} defColour="#a29bfe" onColour="#6c5ce7"/>
          		</div>
    		);
	}
	export default FoodTileContaine;