import { motion } from "framer-motion";
import AcademicCard from "../components/ui/cards";
import { Button } from "@material-tailwind/react";

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
    {subtitle && <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>}
  </motion.div>
);

const AcademicsPage = () => {
  const gradeLevels = [
    {
      title: "Foundational Stage (5 Years course)",
      description: "This stage includes 3 years of Pre-Primary, which provides for Nursery, Lower Kindergarten and Upper Kindergarten. This stage also covers 2 years of primary schools, which contains classes 1 and 2, making the foundational stage of 5 years. Due to the initial years of education of children, this stage tries to provide play or game based learning and develop essential skills such as social interaction and local language.",
      imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      buttonText: "Explore Elementary",
    },
    {
      title: "Preparatory Stage (3 Years course)",
      description: "This stage consists of 3 years of education. It focuses on the age group of 8 to 11.The classes 3rd to 5th are included in this stage. At this stage, students are introduced to foundational subjects and activities, which include –Reading, writing, science, humanities and basic mathematics.",
      imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      buttonText: "View Middle School",
    },
    {
      title: "Middle Stage (3 Years course)",
      description: "This stage also includes 3 years of education It targets students in the age group of 11 to 14.It includes classes from 6th-8th.At this 3rd stage, the students start getting an in-depth understanding of subjects. This stage will begin building a solid foundation in subjects like science, mathematics and humanities",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      buttonText: "Discover High School",
    },
    {
      title: "Secondary Stage (4 Years course)",
      description: "This is the last stage of the new education model, covering classes from 9th to 12th grades. This stage includes students from the age group of 14 to 18 years. At this stage, students will get to choose subjects from a pool with a wide range of subjects.",
      imageUrl: "https://img.freepik.com/premium-photo/empty-classr%E2%80%A6om-school-without-student-teacher_969459-2627.jpg",
      buttonText: "Discover High School",
    }
  ];

  const curriculum = [
    {
      title: "Science",
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
      title: "Commerce Program",
      description: "Practical business education with accounting, economics, and entrepreneurship training. Includes stock market simulations and business case studies.",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      buttonText: "Commerce Details",
    }
  ];

  const facilities = [
    {
      title: "Modern Library",
      description: "10,000+ book collection with digital resources, quiet study zones, and research assistance.",
      imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      buttonText: "Explore Library",
    },
    {
      title: "Sports Complex",
      description: "Cricket pitch, football field, basketball courts, and indoor sports facilities for all-round development.",
      imageUrl: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      buttonText: "View Facilities",
    },
    {
      title: "Science Laboratories",
      description: "Fully equipped labs for physics, chemistry, and biology with modern equipment and safety standards.",
      imageUrl: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      buttonText: "Tour Labs",
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

        {/* Why Choose Us Section */}
        <section className="mb-24 bg-white py-16 px-8 rounded-xl shadow-sm">
          <div className="max-w-5xl mx-auto">
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
                We at LITTLE SCHOLARS' CENTRAL SCHOOL focus our dedication towards
                evoking a passion for learning and developing the requisite set of
                attitudes, skills and knowledge that enable our learners to maximize
                their potential towards becoming positive, responsible and well
                informed participants in our democratic and rapidly progressing
                global community.
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
            Or contact our admissions team at littlescholarscentralschool@gmail.com
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AcademicsPage;