import { useState } from "react"

export default function Question({question, answer}){

    const [isOpen, toggleDropdown] = useState(false)
    return(
        <div className=" w-[70%] font-outfit p-8 bg-secondary bg-opacity-10 rounded-xl border-2 border-secondary border-opacity-20">
            <div onClick={()=>toggleDropdown(!isOpen)} className=" cursor-pointer justify-center items-center text-secondary  rounded-md text-2xl font-bold ">
            {question}
            </div>

            {isOpen && (
                <div className="-p-4 rounded-xl">
                    <h3 className="text-secondary text-lg text-opacity-50">{answer}</h3>
                    
                </div>
            )}
        </div>
    )
}