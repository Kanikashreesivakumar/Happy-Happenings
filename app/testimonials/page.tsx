"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

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

export default function TestimonialsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      event: "Wedding",
      date: "June 2023",
      rating: 5,
      review:
        "Happy Happenings made our dream wedding come true! From the initial consultation to the last dance, every detail was perfectly executed. The team was professional, creative, and truly understood our vision. Our guests are still talking about how magical the day was.",
      image: "/placeholder.svg?height=100&width=100&text=Sarah+Michael",
      eventImage: "/placeholder.svg?height=400&width=600&text=Sarah+Michael+Wedding",
    },
    {
      id: 2,
      name: "Jennifer Thompson",
      event: "Corporate Gala",
      date: "September 2023",
      rating: 5,
      review:
        "Outstanding service for our company's 25th anniversary gala. The event exceeded all expectations and our clients were amazed by the attention to detail. The team handled everything seamlessly, allowing us to focus on our guests and celebrate this important milestone.",
      image: "/placeholder.svg?height=100&width=100&text=Jennifer",
      eventImage: "/placeholder.svg?height=400&width=600&text=Corporate+Gala+Event",
    },
    {
      id: 3,
      name: "David & Lisa Chen",
      event: "Engagement Party",
      date: "March 2023",
      rating: 5,
      review:
        "From planning to execution, everything was seamless. We couldn't have asked for a better team to celebrate our engagement with. The romantic atmosphere they created was beyond our wildest dreams, and the coordination was flawless.",
      image: "/placeholder.svg?height=100&width=100&text=David+Lisa",
      eventImage: "/placeholder.svg?height=400&width=600&text=Engagement+Party+Setup",
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      event: "Baby Shower",
      date: "August 2023",
      rating: 5,
      review:
        "The most beautiful baby shower I could have imagined! The team created such a warm and welcoming atmosphere. Every guest commented on how lovely everything was, from the decorations to the delicious food. Thank you for making this day so special.",
      image: "/placeholder.svg?height=100&width=100&text=Maria",
      eventImage: "/placeholder.svg?height=400&width=600&text=Baby+Shower+Celebration",
    },
    {
      id: 5,
      name: "Robert & Helen Williams",
      event: "50th Anniversary",
      date: "November 2023",
      rating: 5,
      review:
        "Celebrating 50 years of marriage deserved something special, and Happy Happenings delivered beyond our expectations. They captured the essence of our love story and created an evening that our family will treasure forever. Absolutely wonderful experience.",
      image: "/placeholder.svg?height=100&width=100&text=Robert+Helen",
      eventImage: "/placeholder.svg?height=400&width=600&text=50th+Anniversary+Party",
    },
    {
      id: 6,
      name: "Amanda Foster",
      event: "30th Birthday Party",
      date: "July 2023",
      rating: 5,
      review:
        "My 30th birthday party was absolutely perfect! The theme execution was creative and fun, and the team made sure every guest had an amazing time. The attention to detail was incredible, and I felt like a queen on my special day. Highly recommend!",
      image: "/placeholder.svg?height=100&width=100&text=Amanda",
      eventImage: "/placeholder.svg?height=400&width=600&text=30th+Birthday+Party",
    },
    {
      id: 7,
      name: "James & Patricia Miller",
      event: "Corporate Launch",
      date: "October 2023",
      rating: 5,
      review:
        "The product launch event was a huge success thanks to Happy Happenings. They understood our brand vision and created an event that perfectly showcased our new product line. The attention to detail and professional execution was outstanding.",
      image: "/placeholder.svg?height=100&width=100&text=James+Patricia",
      eventImage: "/placeholder.svg?height=400&width=600&text=Product+Launch+Event",
    },
    {
      id: 8,
      name: "Sophie Turner",
      event: "Engagement Celebration",
      date: "December 2023",
      rating: 5,
      review:
        "Our engagement celebration was absolutely magical! The team created the most romantic atmosphere with beautiful lighting and floral arrangements. Every detail was perfect, and our families were so impressed. We can't wait to work with them for our wedding!",
      image: "/placeholder.svg?height=100&width=100&text=Sophie",
      eventImage: "/placeholder.svg?height=400&width=600&text=Romantic+Engagement",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [])

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
            Client Testimonials
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what our clients have to say about their experience with Happy
            Happenings.
          </motion.p>
        </div>
      </section>

      {/* Featured Testimonial Slider */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={testimonials[currentSlide].eventImage || "/placeholder.svg"}
                    alt={`${testimonials[currentSlide].event} photo`}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-rose-300 mb-6" />

                  <div className="flex mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonials[currentSlide].review}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonials[currentSlide].image || "/placeholder.svg"}
                      alt={testimonials[currentSlide].name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{testimonials[currentSlide].name}</p>
                      <p className="text-gray-600">
                        {testimonials[currentSlide].event} • {testimonials[currentSlide].date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-gray-300 rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-gray-300 rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? "bg-rose-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">More Happy Clients</h2>
            <p className="text-xl text-gray-600">Every event is a new story of joy and celebration</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.id} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-700 mb-4 leading-relaxed line-clamp-4">
                      "{testimonial.review}"
                    </blockquote>

                    <div className="flex items-center gap-3 mt-auto">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                        <p className="text-gray-600 text-sm">{testimonial.event}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Events Planned" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "5★", label: "Average Rating" },
              { number: "50+", label: "Vendor Partners" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-500 to-pink-500">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Join Our Happy Clients?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Let us create an unforgettable experience for your special event. Contact us today for a free consultation.
          </p>
          <Button
            size="lg"
            className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/contact">Start Planning Today</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
