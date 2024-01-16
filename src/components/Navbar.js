// import { useNavigate } from "react-router-dom"
import { Link } from "react-scroll"
import { useNavigate } from "react-router-dom"

export default function Navbar(){
    
    const navigate = useNavigate()
    return(
        <nav className=" bg-primary px-6 py-4 flex justify-around items-center fixed w-[100%] font-outfit top-0 z-20">
            <img onClick={()=> navigate("/")} src="Logo.jpg" className="text-complementary text-5xl h-16 w-16 font-bold hover:cursor-pointer"></img>
            <div className="flex gap-12 justify-center items-center">
                <Link smooth = {true} duration = {500} to ="Home" className=" text-secondary text-md hover:border-b-2  hover:border-secondary hover:cursor-pointer">Home</Link>
                <Link smooth = {true} duration = {500} to ="About" className=" text-secondary text-md hover:border-b-2  hover:border-secondary hover:cursor-pointer">About</Link>
                <Link smooth = {true} duration = {500} to ="Services" className=" text-secondary text-md hover:border-b-2  hover:border-secondary hover:cursor-pointer">Services</Link>
                <Link smooth = {true} duration = {500} to = "Testimonials" className=" text-secondary text-md hover:border-b-2 hover:border-secondary hover:cursor-pointer">Testimonials</Link>
                <Link smooth = {true} duration = {500} to = "FAQ" className=" text-secondary text-md hover:border-b-2  hover:border-secondary hover:cursor-pointer">FAQ</Link>
                <button  onClick={()=> navigate("/apply")} className="flex text-xl justify-center items-center py-4 px-6 font-bold bg-complementary text-primary rounded-2xl hover:scale-105 hover:bg-secondary duration-300">
                Apply Now</button>
            </div>
        </nav>
    )
}

