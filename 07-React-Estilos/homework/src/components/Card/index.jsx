import React from 'react';
import style from  './card.module.css'

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
  return <div className={style.cardContainer}>
      <div className={style.containerButton}>
          <button className={style.exitButtonClim}  onClick={onClose}>X</button>
      </div>  
    
    
    <h3>{name}</h3>
    <div className={style.itemsContainer}>
        <div className=''>
          <p > <b>Minimo</b></p>
          <p><b>{min}</b></p>
        </div>
        <div className=''>
          <p><b>Maximo</b></p>
          <p><b>{max}</b></p>
        </div>
        <img className={style.climaImg} src=  {`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
    </div>
    
  </div>
};