import React from 'react';
import './style.css';

/**
* @author
* @function MainDisplay
**/

const MainDisplay = (props) => {
  return(
   <div className="MainDisplayPic">
   <img src={require('./../../container/SelectedProduct/AdditionPics/'+props.children)} width="100%" height='100%'></img>
   </div>
  )
 }

export default MainDisplay