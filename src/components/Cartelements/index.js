import React from 'react';
import './style.css';
import data from './../../Displaydata/profile.json';



/**
* @author
* @function CartElements
**/

const CartElements = (props) => {
  const id=props.id;
  const card = data.data.find( card => card.id==id);
  
  return(
    
    <div className="CartBox">
      <div className="row">
      <div className="col">
      <img src={require('./../Card/Displaypic/'+card.Pic)} height='150px'></img>
      </div>
      <div className="col-8">
          <div className="ElementName">{card.Name}</div>
          <div className="ElementPrice"><span>&#8377;</span>{card.Price}</div>
          <div className="ElementName">Size:L</div>
      </div>
      <div className="col">

      </div>
      </div>  
      
    </div> 
   )

 }

export default CartElements