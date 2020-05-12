import React from 'react'
import './style.css';
import SmallLogo from './../../components/smalllogo';
import Heading from './../../components/Heading';
/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <div className="Footer">
      <div className="LogoSection">
      <SmallLogo id='1' />
      <SmallLogo id='2'/>
      <SmallLogo id='3'/>
      </div>
      
      <div className="footer-copyright text-center py-3">© 2020 Copyright:
      <a className="myA" href="https://www.instagram.com/maglus.pvt.ltd/"> Dipanshu</a>
      </div>
    </div>
   )

 }

export default Footer