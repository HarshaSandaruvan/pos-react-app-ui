import React from 'react';
import style from './upperNavBar.module.css';
import MainLogo from '../MainLogo/mainLogo';
import SearchBar from '../SearchBar/searchBar';


const UpperNavBar =()=>{
	return(
       	<div className={style.outer}>
            <MainLogo/>
            <SearchBar/>
       	</div>
    );
}

export default UpperNavBar;