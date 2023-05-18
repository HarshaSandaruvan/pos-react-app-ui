import React from 'react';
import style from './orderDeatils.module.css';


const Order =(props)=>{
    
	return(
       	<div className={style.outer}>
            <div className={style.inner} >
                <span className={style.span} >#O-</span>
                <span className={style.span}>{props.orderNo}</span>
                <label style={{backgroundColor:props.labalColor}} className={style.lable} >{props.orderType}</label>
            </div>
            <hr/>
       	</div>
    );
}

export default Order;