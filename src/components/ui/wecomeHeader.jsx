import { motion } from "framer-motion";

const welcomeVariants = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear"
      }
    }
  }
};

export default function Header() {
  return (
    <div className="relative overflow-hidden bg-blue-900">
      {/* Header Container */}
      <div className="relative z-10">
        {/* Contact Info Bar */}
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2 text-white text-sm">
          {/* Left Side - Contact Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>9954568020</span>
            </div>
            <div className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>littlescholarscentralschool@gmail.com</span>
            </div>
          </div>

          {/* Right Side - Quick Links */}
          {/* <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Admissions</a>
            <a href="#" className="hover:underline">Calendar</a>
            <a href="#" className="hover:underline">Parent Portal</a>
          </div> */}
        </div>
      </div>

      {/* Scrolling Welcome Text - Positioned absolutely so it doesn't affect layout */}
      <div className="relative h-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full whitespace-nowrap text-white text-lg font-medium py-2"
          variants={welcomeVariants}
          animate="animate"
          style={{ zIndex: 5 }}
        >
          {Array(1).fill("WELCOME TO LITTLE SCHOLARS' CENTRAL SCHOOL. WE ARE THE SYMBOL OF EXCELLENCE ").map((text, index) => (
            <span key={index} className="inline-block px-4">
              {text} ✏️ 🎓 📚
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}