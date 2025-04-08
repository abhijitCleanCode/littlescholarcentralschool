import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const SchoolIntroduction = () => {
  const navigate= useNavigate()
  const [ref1, inView1] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [ref2, inView2] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariantsRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Centered Introduction */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Welcome to Our Prestigious Institution
          </h2>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Founded in 1985, our school has been a beacon of excellence in education, 
            nurturing young minds to become leaders of tomorrow. With state-of-the-art 
            facilities and a dedicated faculty, we provide an environment where students 
            can thrive academically, socially, and personally.
          </p>
        </motion.div>
      </motion.div>

      {/* Left Image with Right Text */}
      <div ref={ref1} className="max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={imageVariants}
            className="w-full md:w-1/2 relative rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
              alt="School Campus"
              className="w-full h-auto object-cover aspect-video"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={itemVariants}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our World-Class Campus
            </h3>
            <p className="text-gray-600 mb-6">
              Spread across 25 acres of lush greenery, our campus features modern 
              classrooms, advanced science labs, a fully-equipped library, and 
              extensive sports facilities. The perfect environment for holistic 
              development.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition" onClick={()=>navigate('/about')}>
              Explore Facilities
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right Image with Left Text */}
      <div ref={ref2} className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <motion.div
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={imageVariantsRight}
            className="w-full md:w-1/2 relative rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Students Learning"
              className="w-full h-auto object-cover aspect-video"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-transparent"></div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={itemVariants}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Innovative Learning Approach
            </h3>
            <p className="text-gray-600 mb-6">
              Our student-centered pedagogy combines traditional teaching methods 
              with cutting-edge technology. We emphasize critical thinking, 
              creativity, and collaboration to prepare students for the challenges 
              of the 21st century.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition" onClick={()=>navigate('/academics')}>
              Our Curriculum
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SchoolIntroduction;