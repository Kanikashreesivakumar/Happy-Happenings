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
   
    {
      id: 1,
      category: "weddings",
      src: "/s1.jpg?height=400&width=600&text=Wedding+Ceremony+1",
      alt: "Elegant wedding ",
    },
    {
      id: 2,
      category: "weddings",
      src: "/s2.jpg?height=400&width=600&text=Wedding+Reception+1",
      alt: "Beautiful wedding ",
    },
    {
      id: 3,
      category: "weddings",
      src: "/s3.jpg?height=400&width=600&text=Bridal+Party+1",
      alt: "Bridal party ",
    },
    {
      id: 4,
      category: "weddings",
      src: "/s4.jpg?height=400&width=600&text=Wedding+Cake+1",
      alt: "Wedding cake ",
    },
    {
      id: 5,
      category: "weddings",
      src: "/s5.jpg?height=400&width=600&text=Wedding+Flowers+1",
      alt: "Wedding floral",
    },
    {
      id: 6,
      category: "weddings",
      src: "/s6.jpg?height=400&width=600&text=Wedding+Dance+1",
      alt: "First dance ",
    },
    {
      id: 7,
      category: "weddings",
      src: "/s7.jpg?height=400&width=600&text=Wedding+Venue+1",
      alt: "Wedding venue ",
    },
    {
      id: 8,
      category: "weddings",
      src: "/s8.jpg?height=400&width=600&text=Wedding+Decor+1",
      alt: "Wedding decoration ",
    },
    {
      id: 9,
      category: "weddings",
      src: "/s9.jpg?height=400&width=600&text=Wedding+Ceremony+2",
      alt: "Outdoor wedding",
    },
    {
      id: 10,
      category: "weddings",
      src: "/s10.jpg?height=400&width=600&text=Wedding+Reception+2",
      alt: "Wedding reception",
    },
    {
      id: 11,
      category: "weddings",
      src: "/s4.jpg?height=400&width=600&text=Wedding+Couple+1",
      alt: "Wedding couple ",
    },
    {
      id: 12,
      category: "weddings",
      src: "/s5.jpg?height=400&width=600&text=Wedding+Guests+1",
      alt: "Wedding guests",
    },

  
    {
      id: 13,
      category: "birthdays",
      src: "/b5.jpg?height=400&width=600&text=Birthday+Party+1",
      alt: "Colorful birthday ",
    },
    {
      id: 14,
      category: "birthdays",
      src: "/b1.jpg?height=400&width=600&text=Birthday+Cake+1",
      alt: "Birthday cake",
    },
    {
      id: 15,
      category: "birthdays",
      src: "/b2.jpg?height=400&width=600&text=Birthday+Decor+1",
      alt: "Birthday party ",
    },
    {
      id: 16,
      category: "birthdays",
      src: "/b3.jpg?height=400&width=600&text=Birthday+Kids+1",
      alt: "Kids birthday",
    },
    {
      id: 17,
      category: "birthdays",
      src: "/b4.jpg?height=400&width=600&text=Birthday+Adult+1",
      alt: "Adult birthday ",
    },
    {
      id: 18,
      category: "birthdays",
      src: "/b6.jpg?height=400&width=600&text=Birthday+Surprise+1",
      alt: "Surprise",
    },
    {
      id: 19,
      category: "birthdays",
      src: "/b7.jpg?height=400&width=600&text=Birthday+Theme+1",
      alt: "Themed ",
    },
    {
      id: 20,
      category: "birthdays",
      src: "/b8.jpg?height=400&width=600&text=Birthday+Games+1",
      alt: "Birthday ",
    },

    {
      id: 21,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Gala+1",
      alt: "Professional",
    },
    {
      id: 22,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Conference+1",
      alt: "Corporate ",
    },
    {
      id: 23,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Awards+1",
      alt: "Corporate",
    },
    {
      id: 24,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Networking+1",
      alt: "Corporate",
    },
    {
      id: 25,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Launch+1",
      alt: "Product",
    },
    {
      id: 26,
      category: "corporate",
      src: "/placeholder.svg?height=400&width=600&text=Corporate+Team+1",
      alt: "Corporate",
    },

    {
      id: 27,
      category: "engagements",
      src: "/placeholder.svg?height=400&width=600&text=Engagement+Party+1",
      alt: "Romantic",
    },
    {
      id: 28,
      category: "engagements",
      src: "/placeholder.svg?height=400&width=600&text=Engagement+Dinner+1",
      alt: "Engagement ",
    },
    {
      id: 29,
      category: "engagements",
      src: "/placeholder.svg?height=400&width=600&text=Engagement+Proposal+1",
      alt: "Proposal ",
    },
    {
      id: 30,
      category: "engagements",
      src: "/placeholder.svg?height=400&width=600&text=Engagement+Celebration+1",
      alt: "Engagement ",
    },

    {
      id: 31,
      category: "baby-showers",
      src: "/placeholder.svg?height=400&width=600&text=Baby+Shower+Setup+1",
      alt: "Sweet ",
    },
    {
      id: 32,
      category: "baby-showers",
      src: "/placeholder.svg?height=400&width=600&text=Baby+Shower+Decor+1",
      alt: "Baby",
    },
    {
      id: 33,
      category: "baby-showers",
      src: "/placeholder.svg?height=400&width=600&text=Baby+Shower+Games+1",
      alt: "Baby",
    },

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

      
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            key={selectedFilter} 
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


      <section className="py-20 px-4 bg-gradient-to-r from-rose-500 to-pink-500">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Create your own stroy?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Let us help you create beautiful years to come.
          </p>
          <Button
            size="lg"
            className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/contact">Start your celebration with us</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
