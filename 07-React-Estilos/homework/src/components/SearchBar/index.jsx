import React from 'react';
import style from './searchBar.module.css'
export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div className={style.searchContainer}>
  <form >
    <input type="text" placeholder="Search.." name="search"/>
    <button onClick={onSearch} type="submit"><i className="fa fa-search">Agregar</i></button>
  </form>
</div>
};