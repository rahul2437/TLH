import { cn } from "@/lib/utils";
import logo from "/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex sticky top-0 z-50 items-center justify-between py-4 px-8 bg-lime-800 text-white">
      <div className=" flex gap-3 text-2xl font-bold">
        <img src={logo} className="size-8 rounded-full" />
        TLH.Foods
      </div>
      <ul className="flex space-x-8">
        <li>
          <a href="#home" className={cn("hover:text-gray-300")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={cn("hover:text-gray-300")}>
            About
          </a>
        </li>
        <li>
          <a href="#products" className={cn("hover:text-gray-300")}>
            Products
          </a>
        </li>
        <li>
          <a href="#contact" className={cn("hover:text-gray-300")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
