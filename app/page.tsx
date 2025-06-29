"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Star,
  ArrowRight,
  Play,
} from "lucide-react"
import { useEffect, useState } from "react"
import { MotionImage } from "@/components/motion-image"
import CathedralFrame from "@/components/cathedral-frame"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeInOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: "easeInOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: "easeInOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut", 
    },
  },
}

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  const eventTypes = [
    {
      icon: Heart,
      title: "Weddings",
      image: "/wedd.jpg?height=400&width=600&text=Elegant+Wedding+Ceremony",
      description: "Create planning services",
      color: "bg-rose-100",
      hoverColor: "hover:bg-rose-200",
    },
    {
      icon: Gift,
      title: "Birthdays",
      image: "/br.jpg?height=400&width=600&text=Birthday+Celebration",
      description: "Memorable birthday to your unique style",
      color: "bg-pink-100",
      hoverColor: "hover:bg-pink-200",
    },
    {
      icon: Sparkles,
      title: "Engagements",
      image: "/enga.jpg?height=400&width=600&text=Romantic+Engagement",
      description: "Romantic  celebrate your love story",
      color: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
    },
    {
      icon: Users,
      title: "Corporate Events",
      image: "/coo.jpg?height=400&width=600&text=Corporate+Gala",
      description: "Professional that leave lasting impressions",
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
    },
    {
      icon: Baby,
      title: "Baby Showers",
      image: "/baby.jpg?height=400&width=600&text=Baby+Shower+Setup",
      description: "Sweet ivals",
      color: "bg-green-100",
      hoverColor: "hover:bg-green-200",
    },
    {
      icon: Calendar,
      title: "Anniversaries",
      image: "/pro.jpg?height=400&width=600&text=Anniversary+Celebration",
      description: "Miley",
      color: "bg-yellow-100",
      hoverColor: "hover:bg-yellow-200",
    },
  ]

  const features = [
    {
      title: "Personalization",
      subtitle: "Tailored packages",
      description:
        "Every om-designed packages that reflect your personal style and vision.",
      icon: Heart,
      image: "/placeholder.svg?height=300&width=400&text=Personalized+Planning",
    },
    {
      title: "Professionalism",
      subtitle: "5-star rated team",
      description:
        "Our  and countless successful events to your special day.",
      icon: Star,
      image: "/placeholder.svg?height=300&width=400&text=Professional+Team",
    },
    {
      title: "Perfection",
      subtitle: "Every detail matters",
      description:
        "From the smallest decorative touch to the grandest gesture, we ensure every element is flawlessly executed.",
      icon: Sparkles,
      image: "/placeholder.svg?height=300&width=400&text=Perfect+Details",
    },
  ]

  const services = [
    { icon: MapPin, title: "Photography", image: "/phot.jpg?height=300&width=400&text=Beautiful+Venue" },
    { icon: Palette, title: "Decor & Design", image: "/stg.jpg?height=300&width=400&text=Elegant+Decor" },
    { icon: Utensils, title: "Catering", image: "/ct.jpg?height=300&width=400&text=Gourmet+Catering" },
    { icon: Camera, title: "Make up", image: "/mp.jpg?height=300&width=400&text=Wedding+Photography" },
    { icon: Music, title: "Music & DJ", image: "/mu.jpg?height=300&width=400&text=Live+Entertainment" },
    { icon: Palette, title: "Mehendi", image: "/mh.jpg?height=300&width=400&text=Live+Entertainment" },
  ]

  const galleryImages = [
    "/s1.jpg?height=400&width=400&text=Wedding+Ceremony",
    "/s2.jpg?height=400&width=400&text=Birthday+Party",
    "/s3.jpg?height=400&width=400&text=Corporate+Event",
    "/s4.jpg?height=400&width=400&text=Engagement+Party",
    "/s5.jpg?height=400&width=400&text=Baby+Shower",
    "/s6.jpg?height=400&width=400&text=Anniversary+Dinner",
    "/s7.jpg?height=400&width=400&text=Wedding+Reception",
    "/s8.jpg?height=400&width=400&text=Birthday+Cake",
    "/s10.jpg?height=400&width=400&text=Corporate+Gala",
  ]

  const testimonials = [
    {
      name: "Sarah & Michael",
      event: "Wedding",
      review:
        "Happy Happenings made our dream wedding come true! Every detail was perfect, and the team was incredibly professional.",
      image: "/placeholder.svg?height=80&width=80&text=Sarah+Michael",
      eventImage: "/placeholder.svg?height=300&width=400&text=Wedding+Photo",
      rating: 5,
    },
    {
      name: "Jennifer Thompson",
      event: "Corporate Event",
      review:
        "Outstanding service for our company anniversary. The event exceeded all expectations and our guests were amazed.",
      image: "/placeholder.svg?height=80&width=80&text=Jennifer",
      eventImage: "/placeholder.svg?height=300&width=400&text=Corporate+Photo",
      rating: 5,
    },
    {
      name: "David & Lisa",
      event: "Engagement Party",
      review:
        "From planning to execution, everything was seamless. We couldn't have asked for a better team to celebrate with us.",
      image: "/placeholder.svg?height=80&width=80&text=David+Lisa",
      eventImage: "/placeholder.svg?height=300&width=400&text=Engagement+Photo",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
       
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-95"
            poster="/placeholder.svg?height=1080&width=1920&text=Wedding+Video+Poster"
          >
            <source src="/vid.mp4" type="video/mp4" />
            
            
            <Image
              src="/placeholder.svg?height=1080&width=1920&text=Wedding+Background"
              alt="Wedding celebration"
              fill
              className="object-cover opacity-30"
              priority
            />
          </video>
        </div>

       

       
        <button
          onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
        >
          <Play className="w-6 h-6 text-white" />
        </button>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-serif text-gray-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We Plan Memories,
            <br />
            <span className="text-rose-600">Not Just Events</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Creating unforgettable moments with elegance, style, and attention to every detail
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/contact">Start Planning</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Our Event Specialties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring your vision to life
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {eventTypes.map((event, index) => (
              <motion.div key={event.title} variants={fadeInUp}>
                <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg hover:bg-rose-50 cursor-pointer transform hover:scale-105">
                  <div className="relative h-64">
                    <CathedralFrame
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      height="h-64"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                          <event.icon className="w-5 h-5 text-rose-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    <Button
                      variant="ghost"
                      className="mt-4 text-rose-600 hover:text-rose-700 hover:bg-rose-50 p-0 h-auto font-medium"
                      asChild
                    >
                      <Link href="/services">
                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Why Choose Happy Happenings</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three pillars that make us the perfect choice for your special day
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={index % 2 === 0 ? fadeInLeft : fadeInRight}>
                <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
                  <div className="relative h-48">
                    <CathedralFrame
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      height="h-48"
                    />
                    <div className="absolute inset-0 bg-rose-500/20 group-hover:bg-rose-500/10 transition-colors duration-300" />
                  </div>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-rose-600" />
                    </div>
                    <h3 className="text-2xl font-serif text-gray-800 mb-2">{feature.title}</h3>
                    <Badge variant="secondary" className="mb-4 bg-rose-100 text-rose-700">
                      {feature.subtitle}
                    </Badge>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

  
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive event planning services to handle every aspect of your celebration
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="relative h-[400px]">
                    <CathedralFrame
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">
                      Professional {service.title.toLowerCase()} services tailored to your event needs
                    </p>
                    <Button
                      variant="ghost"
                      className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 p-0 h-auto font-medium"
                      asChild
                    >
                      <Link href="/services">
                        Explore <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full px-8"
              asChild
            >
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
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
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A glimpse into the beautiful events we've created</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className="relative aspect-square"
              >
                <CathedralFrame
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  height="h-full"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full px-8"
              asChild
            >
              <Link href="/gallery">
                View Full Gallery <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>


            

     
    </div>
  )
}
