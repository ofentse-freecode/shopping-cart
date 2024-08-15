import React from 'react';
import "./desserts.css"
import waffle from "../assets/images/image-waffle-desktop.jpg";
import image_1 from "../assets/images/image-creme-brulee-desktop.jpg";
import image_2 from "../assets/images/image-macaron-desktop.jpg";
import image_3 from "../assets/images/image-tiramisu-desktop.jpg";
import image_4 from "../assets/images/image-baklava-desktop.jpg";
import image_5 from "../assets/images/image-meringue-desktop.jpg";
import image_6 from "../assets/images/image-cake-desktop.jpg";
import image_7 from "../assets/images/image-brownie-desktop.jpg";
import image_8 from "../assets/images/image-panna-cotta-desktop.jpg";
import Dessert from "./dessert.jsx"

//rendering each dessert component
const desserts = () => {
  return (
    <div className='dessert'>
        <h1>Desserts</h1>
            
   
        <div className='row'>
            <Dessert 
            image={waffle}
            name="Waffle"
            description="Waffle with Berries"
            price="$6.50"
            />


              <Dessert 
                image={image_1}
                name="Creme Brulee"
                description="Vanilla Bean Creme Brulee"
                price="$7.00"
                      />


            <Dessert
               image={image_2}
               name="Macron"
               description="Macron Mix of Five"
               price="$8.00"
                    />

        
        </div>

        <div className='row'>

          <Dessert 
            image={image_3}
            name="Tiramisu"
            description="Classic Tiramisu"
            price="$5.50"
        />

            <Dessert 
              image={image_4}
              name="Baklava"
              description="Pistachio Baklava"
              price="$4.00"
                    />
            <Dessert 
             image={image_5}
             name="Pie"
             description="Lemon Meringue Pie"
             price="$5.00"
              /> 
        </div>

        <div className='row'>

        <Dessert 
        image={image_6}
        name="Cake"
        description="Red Velvet Cake"
        price="$4.50"
        />


            <Dessert 
              image={image_7}
              name="Brownie"
              description="Salted Caramel Brownie"
              price="$5.50"
                />


            <Dessert 
              image={image_8}
              name="Panna Cotta"
              description="Vannila Panna Cotta"
              price="$6.50"
                    />

            
        </div>

        

    </div>
  )
}

export default desserts