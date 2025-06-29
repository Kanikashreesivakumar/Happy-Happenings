"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Globe, Star, ArrowRight, Sparkles, Target, Eye } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const slideInFromLeft = {
  initial: { opacity: 0, x: -60, scale: 0.95 },
  animate: { opacity: 1, x: 0, scale: 1 },
  transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
}

const slideInFromRight = {
  initial: { opacity: 0, x: 60, scale: 0.95 },
  animate: { opacity: 1, x: 0, scale: 1 },
  transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
}

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function AboutPage() {
  const religions = [
    {
      name: "Christian Celebrations",
      description: "Sacred ceremonies and joyful celebrations honoring Christian traditions",
      image: "/placeholder.svg?height=400&width=600&text=Christian+Wedding+Ceremony",
      rituals: [
        {
          name: "Wedding Ceremonies",
          image: "/placeholder.svg?height=300&width=400&text=Christian+Wedding",
          description: "Sacred union ceremonies in beautiful church settings",
        },
        {
          name: "Baptism Celebrations",
          image: "/placeholder.svg?height=300&width=400&text=Baptism+Ceremony",
          description: "Meaningful baptism ceremonies with family gatherings",
        },
        {
          name: "Confirmation Events",
          image: "/placeholder.svg?height=300&width=400&text=Confirmation+Ceremony",
          description: "Special confirmation celebrations and receptions",
        },
      ],
      accent: "bg-blue-100/80",
      gradient: "from-blue-200 to-indigo-100",
      iconColor: "text-blue-600",
    },
    {
      name: "Islamic Traditions",
      description: "Elegant celebrations respecting Islamic customs and traditions",
      image: "/placeholder.svg?height=400&width=600&text=Islamic+Wedding+Nikah",
      rituals: [
        {
          name: "Nikah Ceremonies",
          image: "/placeholder.svg?height=300&width=400&text=Nikah+Ceremony",
          description: "Beautiful Islamic wedding ceremonies with traditional elements",
        },
        {
          name: "Eid Celebrations",
          image: "/placeholder.svg?height=300&width=400&text=Eid+Celebration",
          description: "Joyful Eid festivities with family and community",
        },
        {
          name: "Aqiqah Events",
          image: "/placeholder.svg?height=300&width=400&text=Aqiqah+Ceremony",
          description: "Traditional naming ceremonies for newborns",
        },
      ],
      accent: "bg-emerald-100/80",
      gradient: "from-emerald-200 to-teal-100",
      iconColor: "text-emerald-600",
    },
    {
      name: "Hindu Festivities",
      description: "Vibrant celebrations honoring Hindu customs and sacred rituals",
      image: "/placeholder.svg?height=400&width=600&text=Hindu+Wedding+Mandap",
      rituals: [
        {
          name: "Wedding Ceremonies",
          image: "/placeholder.svg?height=300&width=400&text=Hindu+Wedding",
          description: "Traditional Hindu weddings with sacred fire ceremonies",
        },
        {
          name: "Diwali Celebrations",
          image: "/placeholder.svg?height=300&width=400&text=Diwali+Festival",
          description: "Festival of lights celebrations with traditional decorations",
        },
        {
          name: "Puja Ceremonies",
          image: "/placeholder.svg?height=300&width=400&text=Puja+Ceremony",
          description: "Sacred worship ceremonies and spiritual gatherings",
        },
      ],
      accent: "bg-orange-100/80",
      gradient: "from-orange-200 to-amber-100",
      iconColor: "text-orange-600",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Respect & Inclusion",
      description: "We honor all cultures and traditions with deep respect and understanding",
    },
    {
      icon: Globe,
      title: "Cultural Sensitivity",
      description: "Our team is trained in diverse cultural practices and customs",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building bridges between communities through beautiful celebrations",
    },
    {
      icon: Sparkles,
      title: "Authentic Experiences",
      description: "Creating genuine celebrations that honor your heritage",
    },
  ]

  const stats = [
    { number: "50+", label: "Cultural Events", icon: Globe },
    { number: "15+", label: "Religious Traditions", icon: Heart },
    { number: "200+", label: "Interfaith Celebrations", icon: Users },
    { number: "98%", label: "Cultural Accuracy", icon: Star },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Cultural Events Director",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
      specialties: ["Christian Ceremonies", "Western Traditions", "Interfaith Events"],
    },
    {
      name: "Amira Hassan",
      role: "Islamic Traditions Specialist",
      image: "/placeholder.svg?height=300&width=300&text=Amira+Hassan",
      specialties: ["Islamic Weddings", "Halal Catering", "Cultural Customs"],
    },
    {
      name: "Priya Sharma",
      role: "Hindu Ceremonies Expert",
      image: "/placeholder.svg?height=300&width=300&text=Priya+Sharma",
      specialties: ["Hindu Weddings", "Festival Planning", "Traditional Rituals"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-16">
     
      <section className="py-20 px-4 bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-rose-200 via-pink-200 to-rose-200 rounded-3xl shadow-2xl"></div>
            <div className="absolute -inset-4 bg-white/80 backdrop-blur-sm rounded-3xl shadow-inner"></div>

            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-inner border border-white/60">
              <Badge className="mb-4 bg-stone-100/80 text-stone-700 px-6 py-2 rounded-full shadow-sm border border-stone-200/50 font-sans">
                Our Story
              </Badge>
              <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-6">
                Celebrating
                <br />
                <span className="text-blue-600/80 font-sans font-light italic">All Traditions</span>
              </h1>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto font-sans">
                We believe every culture has beautiful traditions worth celebrating. Our diverse team specializes in
                creating authentic, respectful events that honor your heritage and bring communities together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

     
      {/* Religious Traditions Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <motion.div
              className="relative max-w-4xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-stone-200 via-blue-100/50 to-rose-100/50 rounded-3xl shadow-xl"></div>
              <div className="absolute -inset-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-inner"></div>

              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-inner border border-white/60">
                <Badge className="mb-4 bg-blue-100/80 text-blue-700 px-6 py-2 rounded-full shadow-sm border border-blue-200/50 font-sans">
                  Cultural Diversity
                </Badge>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                  Honoring Sacred
                  <br />
                  <span className="text-blue-600/80 font-sans font-light italic">Traditions</span>
                </h2>
                <p className="text-xl text-stone-600 font-sans">
                  We specialize in creating authentic celebrations that respect and honor the beautiful traditions of
                  different faiths and cultures
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Religious Traditions */}
          <motion.div
            className="space-y-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {religions.map((religion, index) => (
              <motion.div
                key={religion.name}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Main Image */}
                <motion.div
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <div
                      className={`absolute -inset-4 bg-gradient-to-br ${religion.gradient} rounded-3xl shadow-xl`}
                    ></div>
                    <div className="absolute -inset-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-inner"></div>

                    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-inner border border-white/60">
                      <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={religion.image || "/placeholder.svg"}
                          alt={religion.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }}>
                    <div className="absolute -inset-4 bg-gradient-to-br from-stone-200 via-blue-100/50 to-rose-100/50 rounded-3xl shadow-xl"></div>
                    <div className="absolute -inset-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-inner"></div>

                    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-inner border border-white/60">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-16 h-16 ${religion.accent} rounded-2xl flex items-center justify-center shadow-sm`}
                        >
                          <Heart className={`w-8 h-8 ${religion.iconColor}`} />
                        </div>
                        <h3 className="text-3xl font-serif text-stone-800">{religion.name}</h3>
                      </div>

                      <p className="text-lg text-stone-600 mb-8 leading-relaxed font-sans">{religion.description}</p>

                      {/* Ritual Photos Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        {religion.rituals.map((ritual, ritualIndex) => (
                          <motion.div
                            key={ritualIndex}
                            className="group"
                            whileHover={{ scale: 1.05, rotate: ritualIndex % 2 === 0 ? 2 : -2 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="relative">
                              <div className="absolute -inset-1 bg-gradient-to-br from-stone-200 to-blue-100 rounded-2xl shadow-md"></div>
                              <div className="relative bg-white/90 rounded-2xl p-2 shadow-inner">
                                <div className="relative aspect-square overflow-hidden rounded-xl">
                                  <Image
                                    src={ritual.image || "/placeholder.svg"}
                                    alt={ritual.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                </div>
                                <div className="p-3">
                                  <h4 className="font-serif font-semibold text-stone-900 text-sm mb-1">
                                    {ritual.name}
                                  </h4>
                                  <p className="text-xs text-stone-600 font-sans">{ritual.description}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <Button
                        size="lg"
                        className="bg-blue-600/90 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 font-sans"
                        asChild
                      >
                        <Link href="/contact">
                          Plan Your Celebration
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-50/20 via-pink-50 to-rose-50/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-stone-200 to-blue-100/50 rounded-3xl shadow-lg"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-inner border border-white/60">
                    <div className="w-16 h-16 bg-blue-100/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-serif font-bold text-stone-800 mb-2">{stat.number}</div>
                    <div className="text-stone-600 font-sans">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            
            {/* Section Header */}
            <motion.div
              className="relative max-w-4xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-stone-200 via-blue-100/50 to-rose-100/50 rounded-3xl shadow-xl"></div>
              <div className="absolute -inset-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-inner"></div>

              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-inner border border-white/60">
                <Badge className="mb-4 bg-rose-100/80 text-rose-700 px-6 py-2 rounded-full shadow-sm border border-rose-200/50 font-sans">
                  Our Experts
                </Badge>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                  Cultural
                  <br />
                  <span className="text-rose-600/80 font-sans font-light italic">Specialists</span>
                </h2>
                <p className="text-xl text-stone-600 font-sans">
                  Meet our diverse team of cultural and religious celebration experts
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-stone-200 via-blue-100/50 to-rose-100/50 rounded-3xl shadow-xl"></div>
                  <div className="absolute -inset-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-inner"></div>

                  <Card className="relative bg-white/90 backdrop-blur-md border-0 rounded-3xl overflow-hidden shadow-inner border border-white/60">
                    <div className="relative h-64 overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-sans font-medium mb-4">{member.role}</p>

                      <div className="space-y-2">
                        <p className="text-sm font-serif font-semibold text-stone-800">Specialties:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, specialtyIndex) => (
                            <Badge
                              key={specialtyIndex}
                              variant="secondary"
                              className="bg-stone-100/80 text-stone-700 text-xs font-sans"
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
    </div>
  )
}
