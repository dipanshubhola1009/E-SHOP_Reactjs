import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../../ProductProvider'
import './style.css';

/**
* @author
* @class 
**/

class Female extends Component {
 state = {}
 render() {
  return(
      <div className="row">
    <ProductConsumer> 
    {value => {
        return value.productData.filter(product=>product.sex=="female").map( product=>
                   <div className="col">
                   
                   
                   <div className="Card"> 

                   <Link to={'/'+ product.id}>
                   <img src={require('./../../components/Card/Displaypic/'+ product.Pic)} width='80%' height='250px'/>

                   <div className="CardName">
                   { product.Name}
                   </div> 


                   <div className="CardPrice">
                   <b>Rs:</b> { product.Price}
                   </div>
                   </Link>
                 
                   <button className={("btn addtocart ") + (product.Cart?("btn-primary"):("btn-success")) } 
                   onClick={ product.Cart?()=> value.removeFromCart(product.id):()=> value.addToCart(product.id)}
                   > 
                     { product.Cart?("Already in cart"):("Add to cart")}
                   </button>
                   
                   </div>
                 
                 

                 
               </div> 
               )}}
    </ProductConsumer>
   
  
</div>
    )
   }
 }



export default Female