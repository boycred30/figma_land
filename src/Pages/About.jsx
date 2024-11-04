import {useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import img from '../assets/about3.jpg'
import  Typewriter  from "typewriter-effect";

const About =() =>{

    useEffect(()=> {
        AOS.init({
            duration: 1000,
            mirror: false,
            once: true,
        });
    },[] );
    return(
        <div className="about overflow-hidden-[35px] p-[35px] mt-[150px]
         md:mt-[200px] w-full flex flex-col gap-10 md:gap-10 items-center justify-center">
            <h1 data-aos="fade-down" 
      data-aos-delay="200"
      data-aos-easing="linear"
      data-aos-duration='500'
      className='heroH text-center
       md:w-[709px] h-[186px] md:h-[196px] 
       lg:text-[80px] sm:text-[60px]  
       xs:text-[50px]
        text-[40px] leading-[62px] 
      md:leading-[88px]
       tracking-[0.2px] md:font-bold '>
                Know More About Figma Land
            </h1>
            
                
               <div className="heroS mt-[10px] text-center md:mt-3 text-[20px]
                sm:w-[382px] sm:h-[120px] flex items-center leading-[30px]
                tracking-[0.2px] md:w-[700px] md:h-[60px] p-[20px] md:pl-[60px]">
               <Typewriter
               options={{
                strings:[
                "To promote high standards in coding, we emphasize the importance of best practices in React development", 
              "We provide guidelines and tools for code reviews, testing, and optimization",
               "helping developers write clean, maintainable code that can scale effectively"
            ],
            autoStart:true,
            loop:true,
            deleteSpeed:20,
            typeSpeed:1,
            delay:50,
               }}
              />
                </div>
            
           <div 
            data-aos="fade-down" 
            data-aos-delay="1000"
            data-aos-easing="linear"
            data-aos-duration='500'
            className=" flex flex-wrap justify-around w-[320px]">
            <button className='w-[150px] h-[60px] rounded-[3px] border-[1px] mt-3'>Learn more</button>
          </div>
          <div className="w-screen">
                <img
                data-aos="zoom-in-down" 
                data-aos-delay="1200"
                data-aos-easing="linear"
                data-aos-duration='500'
                src={img} 
                alt="screenshots of app" 
                className="w-img"/>
                </div>

               
        </div>
    )
}
 export default About