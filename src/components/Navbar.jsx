import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "./ui/wecomeHeader";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Gallery", path: "/gallary" },
    { name: "Contact Us", path: "/contact" },
    { name: "Admission", path: "/admission" },
  ];

  const handleNavigation = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50 font-[Inter]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 h-auto py-4">
          {/* Logo + School Name */}
          <div
            className="flex items-center space-x-3 cursor-pointer flex-shrink-0"
            onClick={() => handleNavigation("/")}
          >
            <img
              src="./Logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-base md:text-lg font-semibold text-blue-900 whitespace-nowrap">
              LITTLE SCHOLARS’ CENTRAL SCHOOL
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center flex-wrap justify-end flex-grow gap-x-6 text-black font-medium tracking-wide text-[16px]">
            <div className="flex flex-wrap gap-x-6 mr-6">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavigation(item.path)}
                  className="relative group transition-all duration-300 hover:text-black whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </button>
              ))}
                
            </div>

            {/* Login Button */}
            <button
              onClick={() => handleNavigation("/login")}
              className="relative text-white font-semibold hover:text-black transition group bg-blue-900 rounded-2xl px-4 py-1.5"
            >
              Login
              <span className="absolute left-0 -bottom-1 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </button>
            
          </div>
          
         
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-black transition"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-3 bg-white shadow-md border-t border-gray-200">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(item.path)}
              className="block w-full text-left text-black py-2 px-3 rounded hover:bg-gray-100 font-medium transition"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => handleNavigation("/login")}
            className="block w-full text-left text-black py-2 px-3 rounded hover:bg-gray-100 font-medium transition"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
