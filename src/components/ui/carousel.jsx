import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function CarouselWithContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const items = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Join Our Learning Community",
      description:
        "Applications now open for the 2024-2025 academic year. Discover why we're the top choice for quality education in the region.",
      buttons: [
        {
          text: "Apply Now",
          path: "/admission",
          style: "bg-blue-600 hover:bg-blue-700 text-white",
        },
        {
          text: "Contact Us",
          path: "/contact",
          style: "border border-white text-white hover:bg-white/10",
        },
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Discover Our School",
      description:
        "Explore our state-of-the-art facilities, dedicated faculty, and vibrant student life that makes our institution special.",
      buttons: [
        {
          text: "About Us",
          path: "/about",
          style: "bg-white text-gray-900 hover:bg-gray-100",
        },
        {
          text: "View Gallery",
          path: "/gallary",
          style: "border border-white text-white hover:bg-white/10",
        },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [items.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-xl shadow-xl mt-10">
      {/* Slides */}
      <div className="relative h-full w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center px-4 md:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {item.title}
                </h1>
                <p className="text-xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto">
                  {item.description}
                </p>
                <div className="flex justify-center flex-wrap gap-4">
                  {item.buttons.map((button, btnIndex) => (
                    <button
                      key={btnIndex}
                      onClick={() => navigate(button.path)}
                      className={`px-6 py-3 font-medium rounded-lg transition ${button.style}`}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() =>
          setActiveIndex((prev) => (prev + 1) % items.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
