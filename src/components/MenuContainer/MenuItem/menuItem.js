import React, {useState} from 'react';
import style from './menuItem.module.css';


const MenuItem =(props)=>{
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
            style={{backgroundColor:!mouseState ? "#111315" : "#464646"}} >
            
            

            <span className={style.menuTitle}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                style={{color:!mouseState ? "#676369" : "#FFFFFF" }}
            >
                {props.menuTitle}</span>
       	</div>
    );
}

export default MenuItem;
