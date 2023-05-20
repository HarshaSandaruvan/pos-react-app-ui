import React from 'react';
import style from './menu.module.css';
import MenuItem from './MenuItem/menuItem';


const MenuCom =()=>{
	return(
       	<div>
            <MenuItem menuTitle="Dashboard"/>
            <MenuItem menuTitle="Orders"/>
            <MenuItem menuTitle="Tables"/>
       	</div>
    );
}

export default MenuCom;
