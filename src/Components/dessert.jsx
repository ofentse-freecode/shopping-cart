/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import "./desserts.css";
import cart from "../assets/images/icon-add-to-cart.svg";
import add from "../assets/images/icon-increment-quantity.svg";
import minus from "../assets/images/icon-decrement-quantity.svg";



//single dessert components
const dessert = (props) => {
  const [showBtn, setShowbtn] = useState(false);

 // function handleclick() {
  //  setIndex(index + 1);
  //}
  return (
    <div className='dest'>
        <section><img className='image' src={props.image} alt={props.description}></img>

        <button type="button" className='btn' onClick={()=> setShowbtn(!showBtn)}><img  src={cart}alt="shopping cart icon"></img>Add to Cart</button>

        
        <button type='button'className='btn-2'><img className='minus' src={minus} alt="minus sign"></img>
        <p>1</p><img className='add' src={add} alt="aa sign"></img></button>
      </section>

      <div className="info">
      <h6 className='name'>{props.name}</h6>
      <h5 className="description">{props.description}</h5>

      <h5 className='price'>{props.price}</h5>
      </div>
     

    </div>
  )
}

export default dessert