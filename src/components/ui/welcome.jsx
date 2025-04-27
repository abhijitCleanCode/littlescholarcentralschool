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
            <span className="text-blue-700">LITTLE SCHOLARS'</span> CENTRAL SCHOOL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-700"
          >
            We at LITTLE SCHOLARS' CENTRAL SCHOOL focus our dedication towards evoking a passion for learning and developing the requisite set of attitudes, skills and knowledge that enable our learners to maximize their potential towards becoming positive, responsible and well informed participants in our democratic and rapidly progressing global community.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-700"
          >
            It is with this ambition that we work towards developing an environment which fosters social accountability, national pride and a curiosity which triggers the mood for self-learning through self-initiation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg text-gray-700 space-y-2"
          >
            <p>It is through this mission that we wish to realize our VISION that of moulding our students into:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Academically competent persons</li>
              <li>Individuals with exemplary behavior</li>
              <li>Inquirers and investigators</li>
              <li>Logical and rational thinkers</li>
              <li>Responsible national and global citizens</li>
              <li>Exhibitors of social and environmental goodwill</li>
              <li>Individuals with empathy towards one and all</li>
              <li>Efficient in Life Skill education</li>
              <li>Prepared for technology-driven challenges of the 21st century</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
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