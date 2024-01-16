import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"


export default function About(){
    const navigate = useNavigate()
    return(
        <main name = "About" className="min-h-screen p-32 font-outfit bg-primary  ">
            <motion.div
            initial={{
                x: "-100%",
                hidden: "true",
                opacity: 0
            }}
            whileInView={{  
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 2,
                type:"spring",
                damping: 10,
                stiffness: 20
            }}
            viewport={{ once: false }}
            className="flex justify-center items-center gap-16">
                <div className="flex flex-col gap-12">
                    <h1 className=" font-bold text-6xl text-secondary"> <span className="text-complementary">How</span> it works</h1>
                    <h3 className="text-3xl text-secondary">We help you succeed on OnlyFans by providing expert management and tools. Whether you're starting fresh or taking your current career to new heights, we've got you covered.</h3>
                    <button onClick={()=>navigate("/apply")} className="text-2xl text-primary font-bold rounded-2xl hover:bg-secondary hover:scale-105 duration-300 items-center bg-complementary w-[250px] h-[75px]">Apply Now</button>   
                </div>
                <img src="IMG_9337.jpg" className=" object-cover rounded-2xl min-w-[300px] h-[500px] bg-secondary"></img>   
            </motion.div>
            
        </main>
    )
}