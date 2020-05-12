import React from 'react'
import './style.css';
/**
* @author
* @function MiniDisplay
**/

const MiniDisplay = (props) => {
  return(
    <div className="col">
    <div className="MiniDisplay">
        <img src={require('./../../container/SelectedProduct/AdditionPics/'+props.children)} width="100%" height="100%" ></img>
    </div>
    </div>
   )

 }

export default MiniDisplay