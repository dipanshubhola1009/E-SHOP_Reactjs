import React from 'react';
import './style.css'
import data from './../../Displaydata/profile.json';
/**
* @author
* @function 
**/

class Cart extends React.Component{
   state={
       value:10,
       id:[1,2,3,4]
   }
   constructor(){
       super();
       this.Remove = this.Remove.bind(this);
       this.CartElem=this.CartElem.bind(this);
       this.rendertag=this.rendertag.bind(this);
   }
   rendertag(){
   //return <div className="row">{this.state.id.map(id=><CartElements key={id} id={id}></CartElements>)}</div>
   return <div className="row">{this.state.id.map(id=>this.CartElem(id))}</div>

   }
   Remove(props){
       console.log(this.state.id[props-1]);
       this.setState({id: this.state.id});
   }

    CartElem(props) {
    const id=props;
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
            <button onClick={()=>this.Remove(id)}>Remove</button>
        </div>
        <div className="col">
  
        </div>
        </div>  
        
      </div> 
     )
  
   }
   render(){
       return <React.Fragment>
           {this.rendertag()}
           </React.Fragment>
       
   }
}
export default Cart