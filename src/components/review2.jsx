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
    name: "Sarah Johnson",
    designation: "Parent of Grade 5 Student",
    content: (
      <p>
        The teachers at this school are <Highlight>exceptional</Highlight>. My daughter has flourished both academically and socially since joining.
      </p>
    ),
  },
  {
    id: 1,
    name: "Michael Chen",
    designation: "Alumni, Class of 2018",
    content: (
      <p>
        The foundation I received here <Highlight>prepared me perfectly</Highlight> for university. The college counseling was outstanding.
      </p>
    ),
  },
  {
    id: 2,
    name: "Dr. Emma Rodriguez",
    designation: "Board Member",
    content: (
      <p>
        I'm continually impressed by the <Highlight>innovative curriculum</Highlight> and commitment to student wellbeing at this school.
      </p>
    ),
  },
];