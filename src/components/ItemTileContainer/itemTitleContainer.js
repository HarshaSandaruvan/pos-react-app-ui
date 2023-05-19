import React from 'react';
import style from './itemTitleContainer.module.css';
import ItemTile from './ItemTitle/itemTile';



const ItemTitleContainer =()=>{
	return(
       	<div className={style.outer}>
            <ItemTile time="15" title="Roast Chicken" price="750"/>
            <ItemTile time="10" title="Rice & Curry" price="450"/>
            <ItemTile time="10" title="Chicken Rice" price="650"/>
            <ItemTile time="15" title="Chicken Kottu" price="800"/>
            <ItemTile time="15" title="Egg Rice" price="500"/>
            <ItemTile time="10" title="Egg Kottu" price="650"/> 
       	</div>
    );
}

export default ItemTitleContainer;