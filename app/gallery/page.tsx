"use client"

import Link from "next/link"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { X } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filters = [
    { id: "all", label: "All Events" },
    { id: "weddings", label: "Weddings" },
    { id: "birthdays", label: "Birthdays" },
    { id: "corporate", label: "Corporate" },
    { id: "engagements", label: "Engagements" },
    { id: "baby-showers", label: "Baby Showers" },
    { id: "anniversaries", label: "Anniversaries" },
  ]

  const galleryImages = [
    // Weddings (12 images)
    {
      id: 1,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Wedding+Ceremony+1",
      alt: "Elegant wedding ceremony",
    },
    {
      id: 2,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Wedding+Reception+1",
      alt: "Beautiful wedding reception",
    },
    {
      id: 3,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Bridal+Party+1",
      alt: "Bridal party photos",
    },
    {
      id: 4,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Wedding+Cake+1",
      alt: "Wedding cake cutting",
    },
    {
      id: 5,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Wedding+Flowers+1",
      alt: "Wedding floral arrangements",
    },
    {
      id: 6,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Wedding+Dance+1",
      alt: "First dance moment",
    },
    {
      id: 7,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Wedding+Venue+1",
      alt: "Wedding venue setup",
    },
    {
      id: 8,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Wedding+Decor+1",
      alt: "Wedding decoration details",
    },
    {
      id: 9,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Wedding+Ceremony+2",
      alt: "Outdoor wedding ceremony",
    },
    {
      id: 10,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Wedding+Reception+2",
      alt: "Wedding reception dinner",
    },
    {
      id: 11,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Wedding+Couple+1",
      alt: "Wedding couple portrait",
    },
    {
      id: 12,
      category: "weddings",
      src: "/placeholder.svg?height=400&width=600&text=Wedding+Guests+1",
      alt: "Wedding guests celebration",
    },

    // Birthdays (8 images)
    {
      id: 13,
      category: "birthdays",
      src: "/placeholder.svg?height=400&width=600&text=Birthday+Party+1",
      alt: "Colorful birthday celebration",
    },
    {
      id: 14,
      category: "birthdays",
      src: "/placeholder.svg?height=400&width=600&text=Birthday+Cake+1",
      alt: "Birthday cake with candles",
    },
    {
      id: 15,
      category: "birthdays",
      src: "/placeholder.svg?height=400&width=600&text=Birthday+Decor+1",
      alt: "Birthday party decorations",
    },
    {
      id: 16,
      category: "birthdays",
      src: "/placeholder.svg?height=400&width=600&text=Birthday+Kids+1",
      alt: "Kids birthday party",
    },
    {
      id: 17,
      category: "birthdays",
      src: "/placeholder.svg?height=400&width=600&text=Birthday+Adult+1",
      alt: "Adult birthday celebration",
    },
    {
      id: 18,
      category: "birthdays",
      src: "/placeholder.svg?height=400&width=600&text=Birthday+Surprise+1",
      alt: "Surprise birthday party",
    },
    {
      id: 19,
      category: "birthdays",
      src: "/placeholder.svg?height=400&width=600&text=Birthday+Theme+1",
      alt: "Themed birthday party",
    },
    {
      id: 20,
      category: "birthdays",
      src: "/placeholder.svg?height=400&width=600&text=Birthday+Games+1",
      alt: "Birthday party games",
    },

    // Corporate (6 images)
    {
      id: 21,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Gala+1",
      alt: "Professional corporate event",
    },
    {
      id: 22,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Conference+1",
      alt: "Corporate conference setup",
    },
    {
      id: 23,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Awards+1",
      alt: "Corporate awards ceremony",
    },
    {
      id: 24,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Networking+1",
      alt: "Corporate networking event",
    },
    {
      id: 25,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Launch+1",
      alt: "Product launch event",
    },
    {
      id: 26,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Team+1",
      alt: "Corporate team building",
    },

    // Engagements (4 images)
    {
      id: 27,
      category: "engagements",
      src: "/placeholder.svg?height=400&width=600&text=Engagement+Party+1",
      alt: "Romantic engagement party",
    },
    {
      id: 28,
      category: "engagements",
      src: "/placeholder.svg?height=400&width=600&text=Engagement+Dinner+1",
      alt: "Engagement dinner setup",
    },
    {
      id: 29,
      category: "engagements",
      src: "/placeholder.svg?height=400&width=600&text=Engagement+Proposal+1",
      alt: "Proposal moment capture",
    },
    {
      id: 30,
      category: "engagements",
      src: "/placeholder.svg?height=400&width=600&text=Engagement+Celebration+1",
      alt: "Engagement celebration",
    },

    // Baby Showers (3 images)
    {
      id: 31,
      category: "baby-showers",
      src: "/placeholder.svg?height=400&width=600&text=Baby+Shower+Setup+1",
      alt: "Sweet baby shower setup",
    },
    {
      id: 32,
      category: "baby-showers",
      src: "/placeholder.svg?height=400&width=600&text=Baby+Shower+Decor+1",
      alt: "Baby shower decorations",
    },
    {
      id: 33,
      category: "baby-showers",
      src: "/placeholder.svg?height=400&width=600&text=Baby+Shower+Games+1",
      alt: "Baby shower games",
    },

    // Anniversaries (3 images)
    {
      id: 34,
      category: "anniversaries",
      src: "/placeholder.svg?height=400&width=600&text=Anniversary+Dinner+1",
      alt: "Golden anniversary celebration",
    },
    {
      id: 35,
      category: "anniversaries",
      src: "/placeholder.svg?height=400&width=600&text=Anniversary+Party+1",
      alt: "Anniversary party setup",
    },
    {
      id: 36,
      category: "anniversaries",
      src: "/placeholder.svg?height=400&width=600&text=Anniversary+Couple+1",
      alt: "Anniversary couple celebration",
    },
  ]

  const filteredImages =
    selectedFilter === "all" ? galleryImages : galleryImages.filter((image) => image.category === selectedFilter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-serif text-gray-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our portfolio of beautiful events and celebrations. Each image tells a story of joy, love, and
            unforgettable moments.
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.id)}
                className={`rounded-full ${
                  selectedFilter === filter.id
                    ? "bg-rose-500 hover:bg-rose-600 text-white"
                    : "border-rose-300 text-rose-600 hover:bg-rose-50"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            key={selectedFilter} // Re-trigger animation when filter changes
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={fadeInUp}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setLightboxImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-white/90 text-gray-700 capitalize">{image.category.replace("-", " ")}</Badge>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={lightboxImage || "/placeholder.svg"}
              alt="Gallery image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-500 to-pink-500">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Create Your Own Story?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Let us help you create beautiful memories that will be cherished for years to come.
          </p>
          <Button
            size="lg"
            className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/contact">Start Planning Your Event</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
