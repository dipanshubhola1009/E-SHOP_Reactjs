import React,{useState,useEffect} from 'react'
import './style.css';
import Logo from './../../Displaydata/Logo.json';
/**
* @author
* @function SmallLogo
**/

const SmallLogo = (props) => {
  const logoid = props.id;
  const logo = Logo.Logo.find( logo => logo.id == logoid);
  return(
  <div className="Logo">
   <a href={''+logo.Link} target="_blank">
     <img src={require('./LogoPic/'+logo.Pic)} width='100%'></img>
   </a>
  </div>
   )

 }

export default SmallLogo