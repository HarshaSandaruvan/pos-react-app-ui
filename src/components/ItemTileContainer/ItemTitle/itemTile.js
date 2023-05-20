import React, {useState} from 'react';
import style from './itemTile.module.css';


const ItemTile =(props)=>{
    let noOfItem=1;
    const [mouseState,setMouseEnterd]=useState(false);

    const mouseEnterHandler =() => {
       setMouseEnterd(true);
    }
    const mouseLeaveHandler =() => {
        setMouseEnterd(false);
    }
	return(
       	<div className={style.outer}
           onMouseEnter={mouseEnterHandler}
           onMouseLeave={mouseLeaveHandler}
           style={{backgroundColor:!mouseState ? " #6a6b6bb5" : "#00b894" }}
        >
           <span className={style.procesingTime}>{props.time} Minute</span> 
           <span className={style.title}>{props.title}</span>
           <span className={style.price}>Rs: {props.price}.00</span>
           <div className={style.inner}>
                <button className={style.btn}>-</button>
                <span className={style.noOfItem}>{noOfItem}</span>
                <button className={style.btn}>+</button>
           </div>
           
       	</div>
    );
}

export default ItemTile;