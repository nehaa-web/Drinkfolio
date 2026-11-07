
import { Link } from "react-router-dom";
import logo from "../assets/juicelogo.png";

// --accent variable Products.jsx scroll par change karta hai.
// Agar set nahi hai to default lime (#c6fd00) use hoga.
const hoverAccent =
  "transition-colors duration-500 hover:bg-[var(--accent,#c6fd00)] hover:text-white hover:ring-2 hover:ring-white";

const Nav = () => {
  return (
    <div className="w-full h-40 fixed z-50 flex items-start justify-between text-3xl font-bold text-white pointer-events-none">
      {/* left nav */}
      <div className="lg:ml-20 ml-9 mt-7 pointer-events-auto">
        <img
          className="lg:w-35 w-42 cursor-pointer"
          src={logo}
          alt="Juice Logo"
        />
      </div>

      {/* center nav */}
      <div className="text-base flex lg:gap-5 gap-2 font-medium pt-6 lg:pt-25 lg:pl-55 md:pr-72 pr-2 lg:pr-0 pointer-events-auto">
        <button
          className={`bg-white cursor-pointer text-black px-6 py-2 rounded-full ${hoverAccent}`}
        >
          Products
        </button>
        <button
          className={`bg-white/40 backdrop-blur-md cursor-pointer text-black px-7 py-2 rounded-full ${hoverAccent}`}
        >
          Contact
        </button>
      </div>

      {/* right nav */}
      <div className="hidden lg:flex items-center text-base gap-7 mr-20 mt-8 font-medium pointer-events-auto">
        <Link
          className="cursor-pointer hover:underline underline-offset-4"
          to="/"
        >
          Home
        </Link>
        <Link
          className="cursor-pointer hover:underline underline-offset-4"
          to="/"
        >
          Products
        </Link>
        <a
          className="cursor-pointer hover:underline underline-offset-4"
          href="#contact"
        >
          Contact
        </a>

        <button
          className={`bg-white text-black px-3 py-2 rounded-full cursor-pointer ${hoverAccent}`}
        >
          Place order &gt;
        </button>
      </div>
    </div>
  );
};

export default Nav;