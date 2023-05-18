import React from 'react';
import style from './odersContainer.module.css';
import Order from './OrderDeatils/orderDeatil';




const OdersContainer =()=>{
	return(
       	<div className={style.outer} >
            <span className={style.title} >TODAY ORDERS</span>
            <Order orderType="IN-PROGRESS" labalColor="#0984e3" orderNo="1024"/>
            <Order orderType="CANCELED" labalColor="#e74c3c" orderNo="1025"/>
            <Order orderType="DONE" labalColor="#16a085" orderNo="1026"/>
            <Order orderType="DONE" labalColor="#16a085" orderNo="1027"/>
            <Order orderType="IN-PROGRESS" labalColor="#0984e3" orderNo="1028"/>
            <Order orderType="IN-PROGRESS" labalColor="#0984e3" orderNo="1029"/>

            
       	</div>
    );
}

export default OdersContainer;