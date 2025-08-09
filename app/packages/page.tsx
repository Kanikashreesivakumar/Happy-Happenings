"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CheckCircle, Star, Crown, Gem } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function PackagesPage() {
  const packages = [
    {
      name: "Silver",
      icon: Star,
      price: "$2,999",
      description: "Perfect celebrations",
      features: [
        "Event planning consultation (2 sessions)",
        "Venue recommendations",
        "Basic decor package",
        "Vendor coordination",
        "Day-of coordination (6 hours)",
        "Timeline creation",
        "Guest list management",
        "Basic photography (2 hours)",
      ],
      color: "border-gray-300",
      bgColor: "bg-gray-50",
      textColor: "text-gray-700",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
    },
    {
      name: "Gold",
      icon: Crown,
      price: "$4,999",
      description: "Our most popular package for memorable celebrations",
      features: [
        "Everything in Silver package",
        "Extended planning consultation (4 sessions)",
        "Premium decor package",
        "Custom theme development",
        "Full vendor management",
        "Day-of coordination (8 hours)",
        "Rehearsal coordination",
        "Professional photography (4 hours)",
        "Floral arrangements",
        "Welcome gifts for guests",
      ],
      popular: true,
      color: "border-yellow-400",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
      name: "Platinum",
      icon: Gem,
      price: "$7,999",
      description: "Luxury experience with premium services and attention to detail",
      features: [
        "Everything in Gold package",
        "Unlimited planning consultations",
        "Luxury decor and styling",
        "Personal event assistant",
        "Full weekend coordination",
        "VIP vendor partnerships",
        "Professional videography",
        "Full photography coverage (8 hours)",
        "Premium floral design",
        "Custom invitations and stationery",
        "Transportation coordination",
        "Post-event cleanup",
      ],
      color: "border-purple-400",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
    },
  ]

  const addOns = [
    { name: "Additional Photography Hour", price: "$150" },
    { name: "Videography Package", price: "$800" },
    { name: "Live Music/DJ", price: "$600" },
    { name: "Premium Bar Service", price: "$400" },
    { name: "Custom Cake Design", price: "$300" },
    { name: "Photo Booth Rental", price: "$250" },
    { name: "Transportation Service", price: "$200" },
    { name: "Additional Decor Elements", price: "$100" },
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
            Our Packages
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the perfect package for your event. Each package is designed to provide exceptional value and can be
            customized to meet your specific needs.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {packages.map((pkg, index) => (
              <motion.div key={pkg.name} variants={fadeInUp}>
                <Card
                  className={`relative h-full ${pkg.color} border-2 ${pkg.popular ? "scale-105 shadow-2xl" : "shadow-lg"} hover:shadow-xl transition-all duration-300`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-rose-500 text-white px-4 py-1 text-sm font-medium">Most Popular</Badge>
                    </div>
                  )}

                  <CardHeader className={`text-center pb-4 ${pkg.bgColor} rounded-t-lg`}>
                    <div className="flex justify-center mb-4">
                      <div
                        className={`w-16 h-16 ${pkg.bgColor} border-2 ${pkg.color} rounded-full flex items-center justify-center`}
                      >
                        <pkg.icon className={`w-8 h-8 ${pkg.textColor}`} />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-serif text-gray-800">{pkg.name}</CardTitle>
                    <div className="text-4xl font-bold text-gray-800 mt-2">{pkg.price}</div>
                    <p className="text-gray-600 mt-2">{pkg.description}</p>
                  </CardHeader>

                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full mt-8 ${pkg.buttonColor} text-white rounded-full py-3 text-lg font-medium`}
                      asChild
                    >
                      <Link href="/contact">Choose {pkg.name}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your package even more special
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {addOns.map((addon, index) => (
              <motion.div key={addon.name} variants={fadeInUp}>
                <Card className="p-4 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-800 mb-2">{addon.name}</h3>
                    <p className="text-2xl font-bold text-rose-600">{addon.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Frequently Asked questions
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                question: "Can I customize a package?",
                answer:
                  "All our services.",
              },
              {
                question: "What's included in the consultation sessions?",
                answer:
                  "Our process.",
              },
              {
                question: "Do you ?",
                answer:
                  "Yes, we offer require a 50% deposit to secure your date, with the balance due 30 days before your event.",
              },
              {
                question: "How far in advance should I book?",
                answer:
                  "We recommend booking at  and planning time. However, we can accommodate shorter timelines when possible.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 border-0 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
    </div>
  )
}
