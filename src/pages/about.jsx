"use client";
import { motion } from "framer-motion";
// import Image from "next/image";

export default function AboutSection() {
  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white my-45">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced About Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Text Content - Left Side */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif"
            >
              About <span className="text-blue-700">LITTLE SCHOLAR'S CENTRAL SCHOOL</span>
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="w-24 h-1 bg-blue-600 mb-8"
            ></motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              Little Scholars' Central School, South Hailakandi, was founded in the year 2016. 
              The school is situated at Aloicherra-IV, P.O. Karicherra Bazar, Hailakandi. 
              In the present academic year, it caters to students from Nursery to class-II.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              The School is proposed to be affiliated to the Central Board of Secondary Education. 
              With provision for classes Nursery and KG schooling to offer the 10+2 years of 
              schooling in Central Board of Secondary Education (CBSE).
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              The school has excellent environment, updated equipment, highly skilled & qualified 
              academicians and also a highly qualified and experienced Principal. We are committed 
              to provide quality education and follow the CBSE Curriculum.
            </motion.p>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="https://img.freepik.com/premium-photo/empty-classr%E2%80%A6om-school-without-student-teacher_969459-2627.jpg"
              alt="Little Scholar's Central School"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold">Our Campus</h3>
              <p className="text-sm">A nurturing environment for young minds</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Rest of the content remains the same */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center"
          >
            Our Mission
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-700 italic mb-4">
              "To empower students to achieve their fullest potential by providing 
              an exceptional education that fosters intellectual growth, 
              ethical values, and social responsibility."
            </p>
            <p className="text-gray-600">
              We achieve this through innovative teaching methods, a diverse curriculum, 
              and a supportive community that values each student's unique talents 
              and aspirations.
            </p>
          </motion.div>
        </motion.div>

        {/* Principles Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Students learning together"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Guiding Principles
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                </div>
                <p className="text-gray-600 flex-1">
                  <span className="font-semibold text-gray-800">Excellence:</span> We strive for the highest standards in all aspects of education.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                </div>
                <p className="text-gray-600 flex-1">
                  <span className="font-semibold text-gray-800">Integrity:</span> We uphold honesty, fairness, and ethical behavior.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                </div>
                <p className="text-gray-600 flex-1">
                  <span className="font-semibold text-gray-800">Community:</span> We foster a supportive, inclusive environment for all.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                </div>
                <p className="text-gray-600 flex-1">
                  <span className="font-semibold text-gray-800">Innovation:</span> We embrace creative approaches to teaching and learning.
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}