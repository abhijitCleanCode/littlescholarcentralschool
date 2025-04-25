"use client";
import { CardStack } from "./ui/cardStack";
import { cn } from "../lib/utils";

export function CardStackDemo() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Compact Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            What Our Community Says
          </h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Hear from parents, students, and alumni about their experiences.
          </p>
        </div>

        {/* Card Stack Container */}
        <div className="h-[30rem] flex items-center justify-center w-full">
          <CardStack items={CARDS} />
        </div>
      </div>
    </div>
  );
}

export const Highlight = ({
  children,
  className
}) => {
  return (
    <span
      className={cn(
        "font-medium bg-emerald-100 text-emerald-700 px-0.5 py-0.5 rounded-sm",
        className
      )}>
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Anita Sharma",
    designation: "Parent of Class 6 Student",
    content: (
      <p>
        The teachers here are truly <Highlight>dedicated and caring</Highlight>. My son has become more confident and active in class since joining.
      </p>
    ),
  },
  {
    id: 1,
    name: "Rahul Mehta",
    designation: "Alumnus, Batch of 2016",
    content: (
      <p>
        This school gave me a strong academic base and <Highlight>helped shape my future</Highlight>. The guidance from teachers was invaluable during board exams.
      </p>
    ),
  },
  {
    id: 2,
    name: "Dr. Kavita Iyer",
    designation: "Parent & School Advisory Board Member",
    content: (
      <p>
        I admire the school's <Highlight>holistic approach to education</Highlight>. They balance academics with co-curriculars beautifully.
      </p>
    ),
  },
];
