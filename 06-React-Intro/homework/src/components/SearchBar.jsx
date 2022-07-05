import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div className="search-container">
  <form >
    <input type="text" placeholder="Search.." name="search"/>
    <button onClick={onSearch} type="submit"><i className="fa fa-search">Agregar</i></button>
  </form>
</div>
};