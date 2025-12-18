"use client";
import { useEffect } from "react";
import type { CSSProperties } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 2,
  style,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  style?: CSSProperties;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.5),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
                fontFamily: style?.fontFamily,
                fontStyle: style?.fontStyle,
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn( className)} style={style}>
      <div className="mt-4">
        <div className="text-white text-6xl leading-snug tracking-wide" style={style}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
