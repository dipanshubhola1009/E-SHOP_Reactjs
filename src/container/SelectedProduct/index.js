import React from 'react';
import './style.css'
import data from './../../Displaydata/profile.json'
import MiniDisplay from '../../components/MiniDisplay';
import MainDisplay from '../../components/MainDisplay';

/**
* @author
* @function SelectedProduct
**/

const SelectedProduct = (props) => {
    
    const ProductID = props.match.params.id;
    const Product = data.data.find(Product=> Product.id==ProductID);
   console.log(Product);
  return(
    <div className="Container">
            <div className="Catelog">
                HOME / MEN's Fashion / T-shirt / {Product.Name}
            </div>

           <div className="row">
               
                <div className="col-lg-1 col-sm-12"> 
                    <div className="SidepicContainer">
                        <div className="row">
                                <MiniDisplay>{Product.Pic}</MiniDisplay>
                                <MiniDisplay>{Product.Pic1}</MiniDisplay>
                                <MiniDisplay>{Product.Pic2}</MiniDisplay>
                                <MiniDisplay>{Product.Pic3}</MiniDisplay>  
                        </div>
                    </div>
                </div>   
                    
              <div className="col-lg-6 col-sm-12">
                    
                              <MainDisplay>{Product.Pic}</MainDisplay> 
                            
                </div>
  
               <div className="col-lg-5 col-sm-12">
                   <div className="DetailContainer">
                    <div className="row">
                        <div className="ProductName">
                            {Product.Name}
                        </div>
                    </div>

                    <div className="row">
                        <div className="PriceTag">
                        <span>&#8377;</span>{Product.Price}
                        </div>
                    </div>

                    <div className="OriginalPrice">
                        <strike><span>&#8377;</span>{parseInt(Product.Price)+100}</strike>
                    </div>

                    <div className="row">
                        <div className="ProductColor">
                            {Product.Color}
                        </div>
                    </div>


                    <div className="row">
                        <div className="ColorContainer">
                        <div className="row">  
                        <div className="col">
                            <a href="/1">
                                <div className="Box white" ></div>
                            </a> 
                        </div>   

                        <div className="col">   
                        <a href="/2">
                               <div className="Box  red" ></div>
                            </a>  
                        </div>   


                        <div className="col">
                        <a href="/3">
                               <div className="Box black" ></div>
                            </a>  
                        </div>   


                        <div className="col">     
                        <a href="/4">
                               <div className="Box blue"></div>
                        </a>  
                        </div>  

                        <div className="col">
                        <a href="/1">
                               <div className="Box orange"></div>
                            </a>  
                        </div>
                        </div>     
                        </div>
                    </div>
                 
                  <div className="row">
                      <div className="col">
                          <button className="AddCart btn btn-success" >
                              ADD TO CART
                          </button>
                      </div>
                  </div>

                  </div>
                </div>
 
            </div>
  
    </div>
   )

 }

export default SelectedProduct