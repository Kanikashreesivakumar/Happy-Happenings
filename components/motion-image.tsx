import { motion } from "framer-motion";
import Image from "next/image";

interface MotionImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export function MotionImage({ src, alt, fill, width, height, className }: MotionImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative ${fill ? "w-full h-full" : ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={className}
      />
    </motion.div>
  );
}