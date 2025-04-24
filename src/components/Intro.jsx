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
            Welcome to  <span className="text-blue-700">LITTLE SCHOLAR'S</span> CENTRAL SCHOOL
          </h2>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Little Scholars' Central School with all its might welcome you. LSCS is a school with an innovative vision in the field of education and personal excellence. Remarkably, LSCS adhere to the very basic purpose of National & International standard of education. L.SCS is head-ing towards a deviation from the conventional system of education.

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
            {/* <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our World-Class Campus
            </h3> */}
            <p className="text-gray-600 mb-6">
            This however doesn't mean departure from the actual teaching and educating practices. The fundamental concept of the school is to reduce the generation gap in the entire field, by the time the students get mature and enter into the practical aspects of the life. LSCS is the new meaning to a new dimension of education pattern
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition" onClick={()=>navigate('/academics')}>
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
            {/* <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Innovative Learning Approach
            </h3> */}
            <p className="text-gray-600 mb-6">
            LSCS is not just a school. It is a place where the children's learn more practically about body, mind, world and the scientific developments. All the basic concept of education is cocooned to capture the mantle of human philosophy and its existence. The school understands the importance of coeval maturity.
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