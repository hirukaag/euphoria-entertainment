import { Link } from "react-scroll"

export default function Footer(){
    return(
        <main className="bg-primary font-outfit">
            <div className="flex gap-8 justify-around px-32 py-16 border-t-2 border-secondary border-opacity-20">
                <div className=" flex flex-col gap-6">
                    <h1 className="text-2xl text-secondary">Explore</h1>
                    <Link to = "Home" smooth = {true} duration = {500} className="text-lg text-secondary text-opacity-50 hover:cursor-pointer hover:text-secondary duration-100">Home</Link>
                    <Link to = "About" smooth = {true} duration = {500} className="text-lg text-secondary text-opacity-50 hover:cursor-pointer hover:text-secondary duration-100">About</Link>
                    <Link to="Services" smooth = {true} duration = {500} className="text-lg text-secondary text-opacity-50 hover:cursor-pointer hover:text-secondary duration-100">Services</Link>
                    <Link to = "Testimonials" smooth = {true} duration = {500} className="text-lg text-secondary text-opacity-50 hover:cursor-pointer hover:text-secondary duration-100">Testimonials</Link>
                </div>
                <div className=" flex flex-col gap-6">
                    <h1 className="text-2xl text-secondary">Socials</h1>
                    <a href="https://www.instagram.com/euphoriaentllc/" className="text-lg text-secondary text-opacity-50 hover:underline hover:text-complementary">Instagram</a>
                    <a href="#" className="text-lg text-secondary text-opacity-50 hover:underline hover:text-complementary">Twitter</a>
                </div>
                <div className=" flex flex-col gap-6">
                    <h1 className="text-2xl text-secondary">Support</h1>
                    <Link to="FAQ" smooth = {true} duration = {500} className="text-lg text-secondary text-opacity-50 hover:cursor-pointer hover:text-secondary duration-100">FAQ</Link>
                </div>
                <div className=" flex flex-col gap-8">
                    <img src="LogoText.png" className=" h-40 -mt-12 text-complementary font-bold"></img>
                    <h3 className="text-lg text-secondary text-opacity-50">© 2024 Euphoria Entertainment. All Rights Reserved</h3>
                    <h3 className="text-lg text-secondary text-opacity-50">Designed by <a href="https://github.com/kaane5662" className="underline hover:text-complementary text-secondary">Kaan</a></h3>
                </div>
            </div>
        </main>
    )
}