import { motion } from "framer-motion";

const welcomeVariants = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,  // Increased from 20 to make it slower
        ease: "linear"
      }
    }
  }
};

export default function Header() {
  return (
    <div className="relative overflow-hidden">
      {/* Scrolling Welcome Text */}
      <div className="bg-blue-900 py-2 overflow-hidden">
        <motion.div
          className="whitespace-nowrap text-white text-lg font-medium"
          variants={welcomeVariants}
          animate="animate"
        >
          {Array(1).fill("WELCOME TO LITTLE SCHOLARS’ CENTRAL SCHOOL. WE ARE THE SYMBOL OF EXCELENCE ").map((text, index) => (
            <span key={index} className="inline-block px-4">
              {text} ✏️ 🎓 📚
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}