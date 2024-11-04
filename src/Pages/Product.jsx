import React from "react";
import img from '../assets/benefit-3.svg'
import './product.css'
import  Typewriter  from "typewriter-effect";

 
  function Product() {
  return (
    // parent div
    <main className="container mt-[70px] md:flex flex-row-reverse justify-between items-center">
      <div className="md:max-w-[50%]">
        <img 
        data-aos="fade-down" 
        data-aos-delay="200"
        data-aos-easing="linear"
        data-aos-duration='500'
        src={img} alt="product" />
      </div>

       {/* text section */}
      <div 
      data-aos="fade-down" 
      data-aos-delay="200"
      data-aos-easing="linear"
      data-aos-duration='500'
      className="text-center sm:text-left md:max-w-[50%]">
        <h1 className="font-bold text-4xl leading-[60px]">
          welcome to our product page
        </h1>
      
        <div className="mt-4 text-[18px] leading-[28px] font-normal">
          <Typewriter 
          options={{
            strings:[
              "Tools, tutorials, design and innovation experts, all in one place",
               "The most intuitive way to imagine your next user experience"
            ],
            autoStart: true,
            loop:true,
            deleteSpeed:20,
            typeSpeed:1,
            delay:50,
          }}
          />
           </div>
         
        
        <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8">
          <button className="primary-button">Get Started</button>
          <p className="font-semibold text-primary whitespace-nowrap flex items-center underline hover:scale-110 active:scale-95 duration-200 cursor-pointer"></p>
        </div>
      </div>
    </main>
  );
}

export default Product;