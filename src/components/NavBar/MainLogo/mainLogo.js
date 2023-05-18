import React from 'react';
import style from './mainLogo.module.css';
import img from '../../../assets/main_logo.png'

const MainLogo =()=>{
    return(
    <div className={style.outer}>
            <img className={style.image} src={img} alt='' />
    </div>
);
}
export default MainLogo;