"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
  autoFlip = true,
  flipInterval = 5000
}) => {
  const [cards, setCards] = useState(items);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  useEffect(() => {
    let interval;
    if (autoFlip) {
      interval = setInterval(() => {
        handleNext();
      }, flipInterval);
    }
    return () => clearInterval(interval);
  }, [autoFlip, flipInterval]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCards(prev => {
      const newArray = [...prev];
      newArray.unshift(newArray.pop());
      return newArray;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCards(prev => {
      const newArray = [...prev];
      newArray.push(newArray.shift());
      return newArray;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const cardVariants = {
    initial: (direction) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    }),
    animate: (index) => ({
      y: 0,
      opacity: 1,
      scale: 1 - index * scaleFactor,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: (direction) => ({
      y: direction > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96 mx-auto">
      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 
                  p-2 rounded-full bg-white dark:bg-black shadow-md hover:bg-gray-100 
                  dark:hover:bg-gray-800 transition"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 
                  p-2 rounded-full bg-white dark:bg-black shadow-md hover:bg-gray-100 
                  dark:hover:bg-gray-800 transition"
        disabled={isAnimating}
      >
        <ChevronRight className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
      </button>

      {/* Cards Stack */}
      <AnimatePresence custom={direction}>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute inset-0 dark:bg-black bg-white rounded-3xl p-4 
                      shadow-xl border border-neutral-200 dark:border-white/[0.1] 
                      shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
              zIndex: cards.length - index
            }}
            custom={direction}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover={index === 0 ? { scale: 1.02 } : {}}
            onHoverStart={() => autoFlip && clearInterval(interval)}
            onHoverEnd={() => autoFlip && startFlipping()}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};