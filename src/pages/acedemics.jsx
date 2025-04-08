import { motion } from "framer-motion";
import AcademicCard from "../components/ui/cards";
import {
   
    Button,
  } from "@material-tailwind/react";
  const SectionHeader = ({ title, subtitle }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-left"
    >
      <div className="relative pb-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600 rounded-full"></div>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
    </motion.div>
  );
  // Academic Page Component
  const AcademicsPage = () => {
    const gradeLevels = [
      {
        title: "Elementary School",
        description: "Foundational learning with focus on literacy, numeracy, and social development for grades K-5.",
        imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        buttonText: "Explore Elementary",
      },
      {
        title: "Middle School",
        description: "Transitional program with subject specialization and exploratory electives for grades 6-8.",
        imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        buttonText: "View Middle School",
      },
      {
        title: "High School",
        description: "College-preparatory curriculum with AP courses and career pathways for grades 9-12.",
        imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        buttonText: "Discover High School",
      }
    ];
  
    const curriculum = [
      {
        title: "STEM Program",
        description: "Innovative science, technology, engineering, and math curriculum with hands-on learning.",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        buttonText: "STEM Details",
      },
      {
        title: "Humanities",
        description: "Comprehensive literature, history, and arts program fostering critical thinking.",
        imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        buttonText: "Humanities Info",
      },
      {
        title: "World Languages",
        description: "Four language options with cultural immersion and exchange opportunities.",
        imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        buttonText: "Language Programs",
      }
    ];
  
    const facilities = [
      {
        title: "Science Complex",
        description: "State-of-the-art laboratories for physics, chemistry, and biology research.",
        imageUrl: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        buttonText: "Tour Labs",
      },
      {
        title: "Athletic Center",
        description: "Olympic-size pool, fitness center, and multiple sports courts and fields.",
        imageUrl: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        buttonText: "View Facilities",
      },
      {
        title: "Arts Wing",
        description: "Professional-grade studios for visual arts, music, and theater productions.",
        imageUrl: "https://images.unsplash.com/photo-1567942712661-82b9b407abbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        buttonText: "Explore Arts",
      }
    ];
  
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {/* Page Header */}
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-20"
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-4 mt-30">Academic Programs</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive educational offerings designed to inspire and challenge students at every level.
              </p>
            </motion.div>
    
            {/* Grade Levels Section */}
            <section className="mb-24 px-6">
              <div className="max-w-7xl mx-auto">
                <SectionHeader 
                  title="Grade Levels" 
                  subtitle="Tailored programs for each stage of academic development" 
                />
                <div className="flex flex-wrap -mx-4 mt-8">
                  {gradeLevels.map((item, index) => (
                    <AcademicCard
                      key={`grade-${index}`}
                      {...item}
                      delay={index * 0.1}
                      onButtonClick={() => console.log(`Clicked ${item.title}`)}
                    />
                  ))}
                </div>
              </div>
            </section>
    
            {/* Curriculum Section */}
            <section className="mb-24 bg-white py-12 px-6 rounded-xl shadow-sm">
              <div className="max-w-7xl mx-auto">
                <SectionHeader 
                  title="Curriculum Highlights" 
                  subtitle="Rigorous academic programs across all disciplines" 
                />
                <div className="flex flex-wrap -mx-4 mt-8">
                  {curriculum.map((item, index) => (
                    <AcademicCard
                      key={`curriculum-${index}`}
                      {...item}
                      delay={index * 0.1}
                      onButtonClick={() => console.log(`Clicked ${item.title}`)}
                    />
                  ))}
                </div>
              </div>
            </section>
    
            {/* Facilities Section */}
            <section className="mb-24 px-6">
              <div className="max-w-7xl mx-auto">
                <SectionHeader 
                  title="Student Facilities" 
                  subtitle="World-class resources to support learning and growth" 
                />
                <div className="flex flex-wrap -mx-4 mt-8">
                  {facilities.map((item, index) => (
                    <AcademicCard
                      key={`facilities-${index}`}
                      {...item}
                      delay={index * 0.1}
                      onButtonClick={() => console.log(`Clicked ${item.title}`)}
                    />
                  ))}
                </div>
              </div>
            </section>
    
            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-24 bg-white p-12 rounded-xl shadow-sm border border-gray-100"
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Ready to experience our academic community?
              </h2>
              <Button 
                size="lg" 
                color="blue"
                ripple={true}
                className="px-10 py-4 text-lg font-medium rounded-lg"
              >
                Schedule a Campus Tour
              </Button>
              <p className="mt-6 text-gray-500">
                Or contact our admissions team at admissions@yourschool.edu
              </p>
            </motion.div>
          </motion.div>
          <section className="mb-24 bg-white py-16 px-8 rounded-xl shadow-sm mt-10">
          <div className="max-w-5xl mx-auto mt-10">
            <SectionHeader 
              title="Why Choose Our Institution" 
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose-lg text-gray-700"
            >
              <p className="font-serif leading-relaxed">
                At our institution, we combine <span className="font-bold text-blue-700">cutting-edge pedagogy</span> with 
                <span className="font-bold text-blue-700"> time-honored educational values</span> to create an unparalleled 
                learning environment. Our <span className="italic">98% college acceptance rate</span> speaks to 
                our commitment to academic excellence, while our <span className="italic">12:1 student-faculty ratio</span> 
                ensures personalized attention for every learner.
              </p>
              <p className="font-serif mt-6 leading-relaxed">
                What truly sets us apart is our <span className="font-semibold underline decoration-blue-200">holistic approach</span> 
                to education—we nurture not just intellectual growth but also character development, 
                creativity, and social responsibility. Our graduates leave as <span className="font-semibold">confident, 
                well-rounded individuals</span> prepared to thrive in an increasingly complex world.
              </p>
            </motion.div>
          </div>
        </section>
        </div>
      );
  };
  
  export default AcademicsPage;