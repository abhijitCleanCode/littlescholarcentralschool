import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function SchoolWelcome() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20 my-20">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* School Image - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Little Scholars Central School"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* Welcome Text - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#1a365d] font-serif"
          >
         <span className="text-blue-700">LITTLE SCHOLAR'S</span> CENTRAL SCHOOL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-700"
          >
          Little Scholars' Central School with all its might welcome you. LSCS is a school with an innovative vision in the field of education and personal excellence. Remarkably, LSCS adhere to the very basic purpose of National & International standard of education. L.SCS is head-ing towards a deviation from the conventional system of education.

This however doesn't mean departure from the actual teaching and educating practices. The fundamental concept of the school is to reduce the generation gap in the entire field, by the time the students get mature and enter into the practical aspects of the life. LSCS is the new meaning to a new dimension of education pattern. LSCS is not just a school. It is a place where the children's learn more practically about body, mind, world and the scientific developments. All the basic concept of education is cocooned to capture the mantle of human philosophy and its existence. The school understands the importance of coeval maturity.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-700"
          >
            Founded in 2005, our school has been a beacon of quality education, 
            consistently producing outstanding results while maintaining our commitment 
            to each child's individual growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {/* <button
              onClick={() => navigate("/admission")}
              className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition"
            >
              Admission Enquiry
            </button> */}
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-medium rounded-lg transition"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}