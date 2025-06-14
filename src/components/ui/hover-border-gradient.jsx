"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (current) => {
    const directions = ["TOP", "RIGHT", "BOTTOM", "LEFT"];
    const i = directions.indexOf(current);
    const next = clockwise ? (i + 1) % 4 : (i + 3) % 4;
    return directions[next];
  };

  const movingMap = {
    TOP: "radial-gradient(40% 60% at 50% 0%, #3275F8 0%, rgba(50,117,248,0) 100%)",
    RIGHT: "radial-gradient(40% 60% at 100% 50%, #3275F8 0%, rgba(50,117,248,0) 100%)",
    BOTTOM: "radial-gradient(40% 60% at 50% 100%, #3275F8 0%, rgba(50,117,248,0) 100%)",
    LEFT: "radial-gradient(40% 60% at 0% 50%, #3275F8 0%, rgba(50,117,248,0) 100%)",
  };

  useEffect(() => {
    if (!hovered) return;
    const interval = setInterval(() => {
      setDirection((prev) => rotateDirection(prev));
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border border-transparent bg-transparent transition duration-500 overflow-visible p-px w-fit",
        containerClassName
      )}
      {...props}
    >
      <div className={cn("relative z-10 px-4 py-2 rounded-full", className)}>
        {children}
      </div>

      {/* Show gradient only on hover */}
      {hovered && (
        <motion.div
          className="absolute inset-0 rounded-full z-0"
          style={{ filter: "blur(5px)" }}
          animate={{ background: movingMap[direction] }}
          transition={{ duration, ease: "linear" }}
        />
      )}

      {/* Background Layer */}
      <div className="bg-black absolute inset-[2px] z-0 rounded-full" />
    </Tag>
  );
}
