'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Part from './Part';

type PieceData = {
  img: string;
  alt: string;
  title: string;
  items: Array<{
    text: string;
    highlights?: string[];
  }>;
};

type PiecesCarouselProps = {
  pieces: PieceData[];
};

export default function PiecesCarousel({ pieces }: PiecesCarouselProps) {
  const [current, setCurrent] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + pieces.length) % pieces.length);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      paginate(-1);
    } else if (info.offset.x < -swipeThreshold) {
      paginate(1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="relative w-full flex justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <div className="flex justify-center">
              <Part
                img={pieces[current].img}
                alt={pieces[current].alt}
                title={pieces[current].title}
                items={pieces[current].items}
                className="mx-auto"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex gap-2">
        {pieces.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-2 h-2 rounded-full transition ${
              index === current ? 'bg-[var(--c1)]' : 'bg-[var(--c2)]'
            }`}
            aria-label={`Go to piece ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
