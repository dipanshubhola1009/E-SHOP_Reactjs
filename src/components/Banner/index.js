import React from 'react'
import './style.css';
/**
* @author
* @function Banner
**/

{/* I Was enable to create slideshow function */}

const Banner = (props) => {



  return(
  <div className="BannerContainer">

       <img className="BannerPic" src={require('./BannerPic/newbanner.jpg')} width="100%" height="500px"  />
    {/*   <img className="BannerPic" src={require('./BannerPic/newbanner1.jpg')} width="100%" height="500px"  />
       <img className="BannerPic" src={require('./BannerPic/newbanner2.jpg')} width="100%" height="500px"  /> 
  */}
     
    </div>

   )

 }

export default Banner