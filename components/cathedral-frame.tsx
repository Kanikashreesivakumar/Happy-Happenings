import { motion } from "framer-motion"
import Image from "next/image"

interface CathedralFrameProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
  height?: string
}

export default function CathedralFrame({ 
  src, 
  alt, 
  priority = false, 
  className = "",
  height = "h-[400px]"
}: CathedralFrameProps) {
  return (
    <div className={`relative ${height} w-full`}>
      {/* SVG mask for cathedral arch shape */}
      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="cathedral-arch" clipPathUnits="objectBoundingBox">
            <path d="M0,0.5 C0,0.25 0.25,0 0.5,0 C0.75,0 1,0.25 1,0.5 L1,1 L0,1 L0,0.5" />
          </clipPath>
        </defs>
      </svg>

      {/* Image container */}
      <div 
        className="relative w-full h-full"
        style={{ clipPath: "url(#cathedral-arch)" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={`object-cover transition-transform duration-700 hover:scale-105 ${className}`}
          />
        </motion.div>
      </div>
    </div>
  )
}