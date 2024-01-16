import { useNavigate } from "react-router-dom"

export default function Service({service, description}){
    const navigate = useNavigate()
    return(
        <main className=" bg-secondary bg-opacity-10 py-8 px-6 w-[550px] rounded-2xl hover:scale-105 duration-300 border-2 border-secondary border-opacity-20">
            <div className="flex flex-col gap-2 justify-center items-center text-center    ">
                <h1 className=" font-bold text-2xl text-secondary">{service}</h1>
                <h3 className=" text-md text-secondary">{description}</h3>
                <button onClick={()=> navigate("/apply")} className="text-lg hover:text-secondary duration-300   text-secondary text-opacity-50 ">{"Apply Now >"}</button>
            </div>
        </main>
    )
}