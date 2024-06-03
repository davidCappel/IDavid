"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[80rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} offset={20} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-pink-400 text-pink-600 rounded-md dark:bg-purple-400 /[0.2] dark:text-purple-600 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Damian O'conor",
    designation: "Junior Front-End Developer LeapBrands.io",
    content: (
      <p>
        His work speeks for itself. His tallent and attention to detail are next to none and I cannot wait to work with him more.
      </p>
    ),
  },
  {
    id: 1,
    name: "Keisha Cappel",
    designation: "Graphic Designer and CEO of Cappel's Devine Designs",
    content: (
      <p>
        I have watched him grow over the years, develop and hone his craft, becoming more and more <Highlight> ready for success</Highlight> . 
      </p>
    ),
  },
  {
    id: 2,
    name: "Dwane Gardener",
    designation: "Program Manger at Zantech",
    content: (
      <p>
        There is no one with more dedication to his craft than this man. His work is always exceptional and he has helped me design websites for over 55 fortune 500 companies
      </p>
    ),
  },
];
