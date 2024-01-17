import Creator from "./Creator";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";


const creators = [
  {
    image:"IMG_9341.jpg", 
    name:"Vanessa Taylor",
    profession:"Influencer", 
    quote: '"Thank you Euphoria"', 
    description:"Working with Euphoria has been a fantastic experience. Their guidance in marketing and content creation has taken my OnlyFans to new heights. They truly care about their models and their success."
  },
  {
    image:"IMG_9343.jpg", 
    name:"Eva Gray",
    profession:"Influencer", 
    quote: '"Made my first million in less than 6 months"', 
    description:"I'm thankful to be part of the Euphoria family. They've helped me earn more in a supportive and respectful environment, surpassing my expectations."
  },
  {
    image:"IMG_9344.jpg", 
    name:"Jacklyn Evelyn",
    profession:"Influencer", 
    quote: '"Excellent Technical Team"', 
    description:"I can't thank Euphoria enough for helping me build my OnlyFans brand. They know the industry inside and out and have shown me how to stand out from the crowd. I've seen incredible growth in my subscriber base and income."
  },
  {
    image:"IMG_9345.jpg", 
    name:"Isabella Harper",
    profession:"Influencer", 
    quote: '"Happy to be a part of Euphoria"', 
    description:"Collaborating with Euphoria has been an incredible journey. Their support in marketing and content creation has elevated my OnlyFans to greater levels. They genuinely prioritize the well-being and success of their models."
  },
  {
    image:"IMG_9346.jpg", 
    name:"Lily Rodriguez",
    profession:"Influencer", 
    quote: '"Joined with no experience"', 
    description:"The management team at Euphoria excels in strategy and innovation. Their assistance has enabled me to expand my income sources and enhance my personal brand. The possibilities are endless with their guidance."
  }
]


export default function Testimonials(){
    const controls = useAnimation();
    const [currentIndex, setIndex] = useState(0)

    // const autoChange = ()=>{
    //   setIndex( (currentIndex+1) % creators.length )
    // }
    // useEffect(()=>{
    //   const intervalId = setInterval(()=>autoChange(),10000)
    //   return () => clearInterval(intervalId);
    // },[])

    const switchIndex = (dir)=>{
      if(dir == -1 && currentIndex == 0){
        return setIndex(creators.length-1)
      }
      setIndex( (currentIndex+dir) % creators.length )
    }
    
    return(
        <main name = "Testimonials" className=" min-h-screen p-28 max-md:px-12 font-outfit bg-primary ">
            <div className="flex flex-col gap-12">
                <h1 className="max-md:text-4xl text-5xl text-center text-secondary font-bold">What our <span className=" text-complementary">testimonials say</span> </h1>
                
                <div className="flex justify-center relative items-center max-h-fit overflow-clip">
                  <AnimatePresence mode="wait" initial={false} custom={currentIndex}>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: '0%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: .5,
                      ease: 'easeInOut'
                    }} 
                    className="flex items-center justify-center w-[100%] h-[100%]">
                    <Creator image={creators[currentIndex].image} name = {creators[currentIndex].name} profession={creators[currentIndex].profession} quote = {creators[currentIndex].quote} description={creators[currentIndex].description} ></Creator>

                  </motion.div>
                </AnimatePresence>
                  
                  <button onClick={()=>switchIndex(1)} className="p-4 bg-secondary rounded-full bg-opacity-15 m-auto h-24 hover:scale-105 duration-200 flex justify-center items-center absolute top-0 bottom-0 right-6 text-secondary text-4xl">{">"}</button>
                  <button onClick={()=>switchIndex(-1)} className="p-4 bg-secondary rounded-full bg-opacity-15 m-auto h-24 hover:scale-105 duration-200 flex justify-center items-center absolute top-0 bottom-0 left-6 text-secondary text-4xl">{"<"}</button>
                </div>
                
                        
                
            </div>
        </main>
    )
}