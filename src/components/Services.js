import Service from "./Service";
import { motion } from "framer-motion";

export default function Services(){
    return(
        <main name = "Services" className=" min-h-screen p-28 font-outfit bg-primary ">
            <div className="flex flex-col gap-16">
                <h1 className="text-5xl text-secondary font-bold">Our <span className=" text-complementary">Services</span> </h1>
                <motion.div 
        initial={{
            scale: 0,
            hidden: "true"
        }}
        whileInView={{  
            scale: 1,
            opacity: 1
        }}
        transition={{
            duration: 2,
            type:"spring",
            damping: 10,
            stiffness: 20
        }}
        viewport={{ once: false }} className=" flex flex-wrap gap-8  items-center justify-center">
                    <Service service={"Full Management"} description={"While creating room for your creativity, we take care of everything else for you. We make sure, that your content delivers the highest possible impact and revenue."}></Service>
                    <Service service={"Account Growth"} description={"We help you to build and sustain a highly profitable Fan base by identifying the right tools & channels for you and continuously adapting the strategies to keep scaling your account."}></Service>
                    <Service service={"Content Creation"} description={"While it remains an open secret that content is king, you barely have more than two seconds to captivate someone’s attention in order to build up a connection with your audience."}></Service>
                    <Service service={"Regular Audits"} description={"While creating room for your creativity, we take care of everything else for you. We make sure, that your content delivers the highest possible impact and revenue."}></Service>
                </motion.div>
            </div>
        </main>
    )
}