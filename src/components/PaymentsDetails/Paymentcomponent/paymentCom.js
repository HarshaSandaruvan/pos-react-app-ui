import React from 'react';
import style from './paymentCom.module.css';


const PaymentComponent =(props)=>{
	return(
       	<div className={style.outer} >
            <div className={style.titleDiv}>
            	<span className={style.txt}>{props.title}</span>
                </div>
            <div className={style.priceDiv}>
                    <span className={style.txtPrice}>Rs:{props.price}.00</span>
            </div> 
       	</div>
    );
}

export default PaymentComponent;