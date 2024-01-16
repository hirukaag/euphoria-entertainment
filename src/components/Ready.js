import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"


export default function Ready(){
    const navigate = useNavigate()
    return(
        <main name = "Ready" className=" min-h-screen p-48 font-outfit bg-primary overflow-hidden">
            <motion.div 
            initial={{
                x: "100%",
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
            viewport={{ once: false }} className="flex flex-col gap-24 justify-center items-center">

                <h1 className="font-bold text-6xl text-secondary">Are you <span className="text-complementary">ready</span> for a better <span className="text-complementary">life?</span></h1>
                <button onClick={()=> navigate("/apply")} className="rounded-2xl font-bold text-primary hover:bg-secondary hover:scale-105 duration-500 text-2xl bg-complementary w-[500px] h-[75px]">Apply Now</button>
            </motion.div>
        </main>
    )
}