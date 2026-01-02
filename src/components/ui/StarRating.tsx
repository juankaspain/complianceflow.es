'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  showNumber?: boolean;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

/**
 * StarRating - Display or interact with star ratings
 * 
 * @example
 * <StarRating rating={4.5} animated showNumber />
 * <StarRating rating={0} interactive onChange={(r) => console.log(r)} />
 */
export default function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  animated = false,
  showNumber = false,
  interactive = false,
  onChange,
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleClick = (index: number) => {
    if (interactive && onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {Array.from({ length: maxRating }).map((_, i) => {
          const isFilled = i < Math.floor(rating);
          const isPartial = i === Math.floor(rating) && rating % 1 !== 0;
          const fillPercentage = isPartial ? (rating % 1) * 100 : 0;

          const StarComponent = animated ? motion(Star) : Star;

          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              disabled={!interactive}
              className={`relative ${
                interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''
              }`}
              aria-label={`${i + 1} star${i !== 0 ? 's' : ''}`}
            >
              {/* Background star (empty) */}
              <StarComponent
                className={`${sizeClasses[size]} text-gray-600`}
                {...(animated
                  ? {
                      initial: { scale: 0, rotate: -180 },
                      animate: { scale: 1, rotate: 0 },
                      transition: { delay: i * 0.1, type: 'spring' },
                    }
                  : {})}
              />

              {/* Filled star */}
              {(isFilled || isPartial) && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    width: isPartial ? `${fillPercentage}%` : '100%',
                  }}
                >
                  <StarComponent
                    className={`${sizeClasses[size]} text-yellow-400 fill-yellow-400`}
                    {...(animated
                      ? {
                          initial: { scale: 0, rotate: -180 },
                          animate: { scale: 1, rotate: 0 },
                          transition: {
                            delay: i * 0.1 + 0.2,
                            type: 'spring',
                            stiffness: 200,
                          },
                        }
                      : {})}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {showNumber && (
        <span className="text-sm font-semibold text-gray-300">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
