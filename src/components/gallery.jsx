import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const GalleryPages = () => {
  // Gallery images data
  const navigate= useNavigate()
  const galleryImages = [
    {
      id: 1,
      src: "img1.jpg",
      alt: "Students in classroom",
     
    },
    {
      id: 2,
      src: "img2.jpg",
      alt: "Science lab experiment",
   
    },
    {
      id: 3,
      src: "md.jpg",
      alt: "Teacher with students",
     
    },
    {
      id: 4,
      src: "princ.jpg",
      alt: "Sports activities",
     
    },
    // {
    //   id: 5,
    //   src: "https://images.unsplash.com/photo-1567942712661-82b9b407abbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //   alt: "Art exhibition",
    //   category: "Arts"
    // },
    // {
    //   id: 6,
    //   src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //   alt: "Library resources",
    //   category: "Resources"
    // },
    // {
    //   id: 7,
    //   src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //   alt: "Campus building",
    //   category: "Campus"
    // },
    // {
    //   id: 8,
    //   src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //   alt: "Student collaboration",
    //   category: "Community"
    // }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r bg-white text-black"
      >
        <div className="max-w-7xl mx-auto text-center mt-20 ">
        <motion.h1 
  initial={{ y: -30 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-800 mb-8 relative flex items-center justify-center gap-3"
>
  <span className="relative inline-block">
    Our Institution Gallery
    <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
  </span>
  <motion.span 
    onClick={() => navigate('/gallary')}
    whileHover={{ scale: 1.2, rotate: 10 }}
    className="text-gray-700 hover:text-blue-600 cursor-pointer"
    title="Go to Gallery"
  >
    <FaEye size={24} />
  </motion.span>
</motion.h1>


          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Explore moments that capture the essence of learning, growth, and community
          </motion.p> */}
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <p className="text-white font-medium text-lg">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Institution</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of a community that nurtures excellence, creativity, and lifelong learning.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              color="white"
              className="text-blue-700 font-bold px-8 py-3 rounded-lg"
               onClick={()=>navigate('/admission')}
            >
              Apply for Admission
            </Button>
          </motion.div>
          <p className="mt-6 text-blue-100">
            Applications for the 2023-2024 academic year are now open
          </p>
        </div>
      </motion.section> */}
    </div>
  );
};

export default GalleryPages;