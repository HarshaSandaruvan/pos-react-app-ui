import React from 'react';
import style from './searchBar.module.css';
import searchIcon from '../../../assets/searchImg.png'

const SearchBar =()=>{
	return(
       	<div className={style.outer}>
            <img className={style.image} src={searchIcon} alt=''/>
            <input className={style.input} type="search" placeholder={'Search'}/>
       	</div>
    );
}

export default SearchBar;