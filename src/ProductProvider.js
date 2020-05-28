import React, { Component } from 'react'
import { data } from './Displaydata/profilejs';


/**
* @author
* @class Product

**/
const ProductContent = React.createContext();

class ProductProvider extends Component {
    state={
        productData : data,
        cart: [],
        CartTotal : 0
    }
    removeFromCart = (id) => {
        var cost =0;
        const Tempproduct = data.find(product => product.id === id );
        Tempproduct.Cart = false;
        cost = parseInt(this.state.CartTotal) - parseInt(Tempproduct.Price);
        const TempCart = this.state.cart.filter(product => product.id !=id);
        this.setState( ()=> {return {data:Tempproduct, cart: TempCart, CartTotal: cost}}, ()=> {console.log(TempCart); console.log(this.state.CartTotal); })
    }


    addToCart = (id) => {
        var cost =0;
        const Tempproduct = data.find(product => product.id ===id);
        cost = parseInt(this.state.CartTotal) + parseInt(Tempproduct.Price);
        Tempproduct.Cart= true;
        this.setState(
            ()=> { return {data:Tempproduct , cart: [...this.state.cart,Tempproduct], CartTotal :cost } ;},
            ()=> console.log(this.state.CartTotal)
            )
            
    }


 render() {
     
  return( 
      <ProductContent.Provider value={{...this.state,
        addToCart: this.addToCart,
        removeFromCart : this.removeFromCart
        }}>
          {this.props.children}
      </ProductContent.Provider>
  )
   }
} 

const ProductConsumer = ProductContent.Consumer;

export {ProductProvider,ProductConsumer};