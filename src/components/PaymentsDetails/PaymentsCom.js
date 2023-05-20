import React from 'react';
import style from './PaymentsCom.module.css';
import PaymentComponent from './Paymentcomponent/paymentCom';


const PaymentsCom =()=>{
	return(
       	<div className={style.outer}>
            <PaymentComponent title="Sub Total" price="1890"/>
			<PaymentComponent title="Tax (10%)" price="189"/>
			<div className={style.subContainer}>
				<label className={style.lblTotal}>Total</label>
				<label className={style.lblTotalAmount}>Rs.2000.00</label>
			</div>
       	</div>
    );
}

export default PaymentsCom;