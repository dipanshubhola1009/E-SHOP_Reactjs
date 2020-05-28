import React, { Component } from 'react'
import { ProductProvider, ProductConsumer } from '../../ProductProvider'
import CartElements from '../../components/Cartelements'


/**
* @author
* @class 
**/

class CartItem  extends Component {

 render() {
    
    return(
      <React.Fragment>
      <div className="row">
      
        <div className="col">
        <ProductConsumer>
            {value => value.cart.map(cart => <CartElements key={cart.id} id={cart.id} func={ value.removeFromCart } ></CartElements> ) }
        </ProductConsumer>
        </div>
        
        
       
        <div className="col">
            <div className="totalBox">
                <h1 align="centre">Cart Summary</h1>
                
            <ProductConsumer>
   
                { value => value.cart.map(cart =>
                <React.Fragment>
                        <div className="ProductName">{cart.Name}</div>
                        <div className="PriceTag">{cart.Price}</div>
                </React.Fragment>) 
                 }
            </ProductConsumer>
            
            <ProductConsumer>
            
            {value=>{    return(    
                <React.Fragment>
                   <div className="SubTotal"> Total : {value.CartTotal} &#x20b9; </div> 
                   <div className="Tax">Tax @ 10%: {parseInt(value.CartTotal)/10} &#x20b9;</div>
                   <div className="GrandTotal">GrandTotal:{parseInt(value.CartTotal)+(parseInt(value.CartTotal)/10)}&#x20b9;</div>
               </React.Fragment>
                )}}
            </ProductConsumer>
                
            </div>
        </div>
        
      </div>
      </React.Fragment>

  )
    
   }
}


export default CartItem