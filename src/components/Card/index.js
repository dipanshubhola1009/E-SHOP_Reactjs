import React , {useState,useEffect} from 'react';
import './style.css';
import data from './../../Displaydata/profile.json';
/**
* @author
* @function Card
**/

const Card = (props) => { 
const postid = props.id;
const card = data.data.find( card => card.id ==postid);

  

  return(
    <div className="col">
      <a href={'/'+card.id}>
        <div className="Card"> 

       
        <img src={require('./Displaypic/'+card.Pic)} width='80%' height='250px'/>
    
        <div className="CardName">
        {card.Name}
        </div> 

 
        <div className="CardPrice">
        <b>Rs:</b> {card.Price}
        </div>


        </div>
        </a>
    </div>

   )

 }

export default Card