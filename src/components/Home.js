import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom"

import emailjs from "emailjs-com"

export default function Home(){
    const navigate = useNavigate()
    
    
    return(
        <main name = "Home" className=" min-h-screen bg-primary p-40 font-outfit">
            <motion.div 
        initial={{
            opacity: 0,
            hidden: "true"
        }}
        whileInView={{
            x: 0,
            y: 0,   
            rotate: 0,
            opacity: 1
        }}
        transition={{
            duration: 2,
            type:"spring",
            damping: 10,
            stiffness: 20
        }}
        viewport={{ once: false }} className="flex items-center gap-24 justify-center ">
                <div className=" flex flex-col gap-8 w-[50%]">
                    <h1 className= " text-6xl font-bold text-secondary">Providing <span className=" text-complementary">Euphoria</span> to Creators on OnlyFans</h1>
                    <h1 className= " text-xl  text-secondary">The premier agency for elevating your OnlyFans, where creators just focus on content, while we handle the rest for you with full-scale marketing and management.</h1>
                    <button onClick={()=>navigate("/apply")} className=" bg-complementary rounded-xl justify-center items-center px-8 py-4 text-2xl font-bold hover:bg-secondary hover:scale-110 duration-300"> {"Apply"} </button>

                </div>

                <div className="flex flex-wrap w-[50%] rounded-2xl grid-cols-2  overflow-hidden ">
                    <img className="object-cover w-[250px] h-[250px] col-span-1"  src="IMG_9334.jpg"></img>
                    <img className="object-cover w-[250px] h-[250px] col-span-1"  src="IMG_9335.jpg"></img>
                    <img className="object-cover w-[250px] h-[250px] col-span-1"  src="IMG_9336.jpg"></img>
                    <img className="object-cover w-[250px] h-[250px] col-span-1"  src="IMG_9338.jpg"></img>
                </div>
            </motion.div>
        </main>
    )
}