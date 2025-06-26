import { motion } from "framer-motion"
import Image from "next/image"

interface CathedralFrameProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
}

export default function CathedralFrame({ src, alt, priority = false, className = "" }: CathedralFrameProps) {
  return (
    <div className="relative w-full h-full">
      {/* SVG mask for cathedral arch shape */}
      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="cathedral-arch" clipPathUnits="objectBoundingBox">
            <path d="M0,0.5 C0,0.25 0.25,0 0.5,0 C0.75,0 1,0.25 1,0.5 L1,1 L0,1 L0,0.5" />
          </clipPath>
        </defs>
      </svg>

      {/* Frame container with decorative elements */}
      <div className="relative w-full h-full">
        {/* Outer frame shadow and border */}
        <div className="absolute -inset-4 bg-gradient-to-br from-stone-200 via-cream-100 to-rose-100/50 rounded-t-full rounded-b-lg shadow-2xl" />
        
        {/* Inner frame with blur effect */}
        <div className="absolute -inset-2 bg-[#FDF5E6]/80 backdrop-blur-sm rounded-t-full rounded-b-lg shadow-inner" />
        
        {/* Image container with arch shape */}
        <div 
          className="relative overflow-hidden [clip-path:url(#cathedral-arch)]"
          style={{
            aspectRatio: "3/4",
            border: "1px solid #8B4513",
            background: "#FDF5E6"
          }}
        >
          {/* Main image */}
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

          {/* Vintage overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513]/5 to-[#D2B48C]/5 mix-blend-overlay" />
          
          {/* Inner decorative border */}
          <div className="absolute inset-4 border border-[#8B4513]/30 rounded-t-full rounded-b-lg pointer-events-none" />
        </div>

        {/* Subtle shadow effect */}
        <div className="absolute inset-0 shadow-lg pointer-events-none rounded-t-full rounded-b-lg" />
      </div>
    </div>
  )
}