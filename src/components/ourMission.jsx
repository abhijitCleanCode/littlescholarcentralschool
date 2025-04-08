import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const MissionSection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 }
  };

  const contentVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0 }
  };

  const overlayVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.1 }
    }
  };

  const missions = [
    {
      title: "Academic Excellence",
      image:  "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      description: "We cultivate intellectual curiosity and academic rigor through innovative teaching methods and a challenging curriculum that prepares students for higher education and lifelong learning."
    },
    {
      title: "Character Development",
      image:  "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      description: "Our holistic approach fosters integrity, empathy, and resilience, helping students develop strong moral character and become responsible global citizens."
    },
    {
      title: "Community Engagement",
      image:  "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      description: "We believe in serving others and building meaningful connections. Our students engage in community service projects that make a real difference in society."
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Our Mission & Values
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At the heart of our institution lies a commitment to nurturing well-rounded individuals who excel academically, morally, and socially.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="relative h-96 rounded-xl overflow-hidden shadow-lg group"
            >
              {/* Card Image */}
              <motion.div 
                variants={cardVariants}
                className="absolute inset-0"
              >
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>

              {/* Front Content */}
              <motion.div 
                variants={contentVariants}
                className="relative h-full flex flex-col justify-end p-6 text-white"
              >
                <div className="absolute top-6 left-6 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-2">{mission.title}</h3>
              </motion.div>

              {/* Hover Overlay */}
              <motion.div 
                variants={overlayVariants}
                className="absolute inset-0 bg-blue-600/90 p-6 flex items-center text-white"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{mission.title}</h3>
                  <p className="mb-6">{mission.description}</p>
                  <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md" onClick={()=>navigate('/about')}>
            Discover Our Full Philosophy
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MissionSection;