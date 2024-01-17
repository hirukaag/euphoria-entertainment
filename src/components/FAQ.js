import Question from "./Question";
import { motion } from "framer-motion";

export default function FAQ(){
    return(
        <main name = "FAQ" className="bg-primary p-32 min-h-screen max-md:px-4  ">
            <div className="flex flex-col gap-8">
                <h1 className="font-bold text-secondary text-5xl text-center max-md:text-4xl">Got any <span className="text-complementary">Questions</span></h1>
                <motion.div 
                initial={{
                    scale: 0,
                    hidden: "true",
                    opacity: 0
                }}
                whileInView={{  
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1,
                    type:"spring",
                    damping: 10,
                    stiffness: 20
                }}
                viewport={{ once: false }}
                className="flex flex-col gap-8 items-center justify-center">
                    <Question question={"How often will I be in contact with my account manager?"} answer={"Your account manager is available 24/7. You can choose to chat daily or have a check-in weekly/monthly. We have the team and tech to support daily communication while keeping personal interactions to a minimum."}></Question>
                    <Question question={"How do I start working with you?"} answer={"You can directly apply here or via messaging Euphoria on Instagram. We carefully review your provided information and reach out to you within the next 24 hours."}></Question>
                    <Question question={"I have no experience yet, will I even be considered?"} answer={"While our main goal is to significantly expand existing accounts, we also welcome new users. When evaluating applications for success, we consider various aspects."}></Question>
                </motion.div>
                
            </div>
        </main>
    )
}