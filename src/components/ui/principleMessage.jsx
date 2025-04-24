import { motion } from "framer-motion";

const PrincipalMessage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 0.77, 0.47, 0.97] 
      }
    }
  };

  const imageVariants = {
    hidden: { x: 80, opacity: 0, rotate: -3 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: { 
        duration: 1, 
        ease: [0.16, 0.77, 0.47, 0.97],
        delay: 0.4
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-16"
      >
        {/* Text Section */}
        <motion.div
          variants={textVariants}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            From the Principal's Desk
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8 mx-auto md:mx-0"></div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Choosing where to continue your child's education is a major decision and I believe that 
            Little Scholars' Central School will be a choice you will not regret, especially if you 
            are ambitious and determined to succeed. The quality of education determines the destiny 
            of a nation.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            I am honored to be the Principal of Little Scholars' Central School because we offer an 
            education that you will find nowhere else in South Hallasandi. The first thing I'd like 
            you to know is that we give our students permission to dream big.
          </p>
          <div className="flex flex-col">
            <span className="text-blue-700 font-semibold text-lg">— Shipra Singha</span>
            <span className="text-gray-500">M.Com, B.Ed</span>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          variants={imageVariants}
          className="md:w-1/2 w-full relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-[3rem] rotate-2 -z-10"></div>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
            <img
              src="princ.jpg"
              alt="Principal Shipra Singha"
              className="w-full h-auto object-cover aspect-[4/4]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply opacity-70"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply opacity-50"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PrincipalMessage;