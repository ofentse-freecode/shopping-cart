import React from 'react'
import "./cart.css"
import carbon from "../assets/images/icon-carbon-neutral.svg"

//update cart and btn info
const cart = () => {
  return (
    <div className='cart'>
      <h1>Your Cart (0)</h1>

      <div className="order">
      <h6>add image</h6>
      </div>
      <p>
      <img src={carbon} alt="carbon neutral delivery"></img>
      This is a carbon neutral delivery.
      </p>
      <button className='btns' type="button">Confirm Order</button>
        
    </div>
  )
}

export default cart