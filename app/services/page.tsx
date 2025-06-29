"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  Gift,
  Sparkles,
  Users,
  Baby,
  Calendar,
  MapPin,
  Palette,
  Camera,
  Music,
  Utensils,
  Flower,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

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

export default function ServicesPage() {
  const eventTypes = [
    {
      id: "weddings",
      icon: Heart,
      title: "Weddings",
      description: "Your ",
      image: "/placeholder.svg?height=500&width=700&text=Elegant+Wedding+Ceremony",
      additionalImages: [
        "/placeholder.svg?height=300&width=400&text=Wedding+Reception",
        "/placeholder.svg?height=300&width=400&text=Bridal+Party",
        "/placeholder.svg?height=300&width=400&text=Wedding+Cake",
      ],
      features: [
        "Venue Selection",
        "Bridal Styling",
        "Catering Coordination",
        "Photography & Videography",
        "Floral Design",
        "Guest Management",
      ],
      color: "bg-rose-100",
    },
    {
      id: "birthdays",
      icon: Gift,
      title: "Birthday Celebrations",
      description: "Make every touches.",
      image: "/placeholder.svg?height=500&width=700&text=Fun+Birthday+Party",
      additionalImages: [
        "/placeholder.svg?height=300&width=400&text=Birthday+Decorations",
        "/placeholder.svg?height=300&width=400&text=Birthday+Games",
        "/placeholder.svg?height=300&width=400&text=Birthday+Cake",
      ],
      features: [
        "Theme Development",
        "Venue Decoration",
        "Entertainment Booking",
        "Custom Cakes",
        "Party Favors",
        "Photography",
      ],
      color: "bg-rose-100",
    },
    {
      id: "engagements",
      icon: Sparkles,
      title: "Engagement Parties",
      description: "Celebrate ement celebrations.",
      image: "/placeholder.svg?height=500&width=700&text=Romantic+Engagement+Party",
      additionalImages: [
        "/placeholder.svg?height=300&width=400&text=Engagement+Decorations",
        "/placeholder.svg?height=300&width=400&text=Engagement+Photos",
        "/placeholder.svg?height=300&width=400&text=Engagement+Gifts",
      ],
      features: [
        "Romantic Settings",
        "Intimate Dining",
        "Proposal Planning",
        "Guest Coordination",
        "Memory Keepsakes",
        "Photography",
      ],
      color: "bg-rose-100",
    },
    {
      id: "corporate",
      icon: Users,
      title: "Corporate Events",
      description: "Professional  employees.",
      image: "/placeholder.svg?height=500&width=700&text=Professional+Corporate+Event",
      additionalImages: [
        "/placeholder.svg?height=300&width=400&text=Corporate+Networking",
        "/placeholder.svg?height=300&width=400&text=Corporate+Presentation",
        "/placeholder.svg?height=300&width=400&text=Corporate+Team",
      ],
      features: [
        "Conference Planning",
        "Team Building",
        "Product Launches",
        "Award Ceremonies",
        "Networking Events",
        "Brand Integration",
      ],
      color: "bg-rose-100",
    },
    {
      id: "baby-showers",
      icon: Baby,
      title: "Baby Showers",
      description: "Welcome celebrations.",
      image: "/placeholder.svg?height=500&width=700&text=Cute+Baby+Shower",
      additionalImages: [
        "/placeholder.svg?height=300&width=400&text=Baby+Shower+Decorations",
        "/placeholder.svg?height=300&width=400&text=Baby+Shower+Games",
        "/placeholder.svg?height=300&width=400&text=Baby+Shower+Gifts",
      ],
      features: [
        "Gender Reveal",
        "Themed Decorations",
        "Game Coordination",
        "Gift Management",
        "Catering",
        "Photography",
      ],
      color: "bg-rose-100",
    },
    {
      id: "anniversaries",
      icon: Calendar,
      title: "Anniversaries",
      description: "Celebrate parties.",
      image: "/placeholder.svg?height=500&width=700&text=Elegant+Anniversary+Party",
      additionalImages: [
        "/placeholder.svg?height=300&width=400&text=Anniversary+Decorations",
        "/placeholder.svg?height=300&width=400&text=Anniversary+Memories",
        "/placeholder.svg?height=300&width=400&text=Anniversary+Cake",
      ],
      features: [
        "Milestone Celebrations",
        "Memory Displays",
        "Family Coordination",
        "Catering",
        "Entertainment",
        "Photography",
      ],
      color: "bg-rose-100",
    },
  ]

  const additionalServices = [
    {
      icon: MapPin,
      title: "Venue Selection",
      description: "Find the pision and budget",
    },
    {
      icon: Palette,
      title: "Decor & Design",
      description: "Custom life",
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Delicious  and dietary needs",
    },
    {
      icon: Camera,
      title: "Photography & Video",
      description: "Professional documentation of your special moments",
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "DJs, live uests engaged",
    },
    {
      icon: Flower,
      title: "Floral Arrangements",
      description: "Beautiful floral designs for centerpieces and decorations",
    },
  ]

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
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From intimate gatherings to grand celebrations, we provide comprehensive event planning services tailored to
            your unique vision and needs.
          </motion.p>
        </div>
      </section>

     
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="space-y-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.id}
                id={event.id}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className={`absolute inset-0 ${event.color} opacity-20`} />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center`}>
                      <event.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h2 className="text-4xl font-serif text-gray-800">{event.title}</h2>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{event.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {event.additionalImages?.map((img, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${event.title} example ${imgIndex + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {event.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-rose-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white rounded-full" asChild>
                    <Link href="/contact">
                      Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

 <section className="py-20 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete event solutions to handle every aspect of your celebration
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {additionalServices.map((service, index) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="h-full p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
    </div>
  )
}
