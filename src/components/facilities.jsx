import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FacilitiesSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const facilityImages = [
    'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  ];

  const facilityDescriptions = [
    "Our state-of-the-art laboratory is equipped with cutting-edge technology and tools, offering students a hands-on learning experience that bridges the gap between theory and practice.",
    "The spacious and serene library is a hub of knowledge, stocked with an extensive range of books, research journals, and digital resources to support every academic endeavor.",
    "Our comfortable student lounge areas provide the perfect space to relax, connect, and collaborate — fostering creativity and a strong sense of community on campus."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === facilityImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [facilityImages.length]);

  const handleLearnMore = () => {
    navigate('/academics');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-left mb-10 text-gray-800 relative inline-block">
          <span className="border-b-4 border-blue-600 pb-1">Our Facilities</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Image Carousel */}
          <div className="w-full md:w-1/2 h-72 md:h-[26rem] relative overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={facilityImages[currentImageIndex]}
                alt="Facility"
                className="w-full h-full object-cover absolute rounded-3xl"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {facilityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              {facilityDescriptions[currentImageIndex]}
            </p>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              At our institution, we believe that the learning environment plays a crucial role in academic success. 
              That's why we continually invest in advanced infrastructure, creating an ecosystem where students can thrive. 
              Whether you're conducting experiments, researching in the library, or relaxing in a collaborative zone — our facilities 
              are designed to elevate your educational experience in every way possible.
            </p>

            <motion.button
              onClick={handleLearnMore}
              className="px-7 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
