import React from 'react';
import style from './cart.module.css';
import CartItem from './CartItem/cartItem';
import PaymentsCom from '../PaymentsDetails/PaymentsCom';


const Cart =(props)=>{
	return(
       	<div className={style.outer}>
                <div className={style.cartHeder}>
                    <label className={style.lable}>Table</label>
                    <span className={style.customerName}>Customer Name</span>
                    <span className={style.cashierId}> Cashier Id: #091738</span>
                </div>
                <div className={style.cartContainer}>
                    <CartItem item="01" title="Roast Chiken" price="750" />
                    <CartItem item="01" title="Roast Chiken" price="750" />
                    <CartItem item="01" title="Roast Chiken" price="750" />
                    <CartItem item="01" title="Roast Chiken" price="750" />
                    <CartItem item="01" title="Roast Chiken" price="750" />
                    <CartItem item="01" title="Roast Chiken" price="750" />
                    <CartItem item="01" title="Roast Chiken" price="750" />
                    
                </div>
                
       	</div>
    );
}

export default Cart;