import logo from "../assets/image-Photoroom.png"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={60} height={33} alt="Logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
            <a href="https://www.linkedin.com/in/juan-cruz-bordino/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white hover:text-4xl transition-all duration-500">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/JcBordino4" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white hover:text-4xl transition-all duration-500">
                <FaGithub/>
            </a>
            <a href="https://www.instagram.com/juancruz_bordino" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white hover:text-4xl transition-all duration-500">
                <FaInstagram/>
            </a>
        </div>
    </nav>
  );
};

export default Navbar;
