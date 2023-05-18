import React, {useState} from "react";
import style from './foodTypeTile.module.css';




const FoodTypeTile =(props)=>{
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
            style={{backgroundColor:!mouseState ? "#B4fff6" : "#a29bfe" }}
            >
            <img className={style.image} src={props.img} alt=""></img>
            <div className={style.txtHolder}>
                <span className={style.mainTitle}>{props.heading}</span>
                <span className={style.subTitle}>{props.Item}</span>
            </div>
            
        </div>
    );
}
export default FoodTypeTile;

