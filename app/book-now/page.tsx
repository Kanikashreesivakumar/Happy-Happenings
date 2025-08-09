"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Users,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Heart,
  Gift,
  Sparkles,
  Baby,
  MessageCircle,
  ArrowRight,
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

export default function BookNowPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
   
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

 
    eventType: "",
    eventDate: "",
    eventTime: "",
    guestCount: "",
    venue: "",
    budget: "",

    location: "",
    preferredStyle: "",
    specialRequests: "",

    selectedServices: [] as string[],
    selectedPackage: "",

   
    hearAboutUs: "",
    previousEvents: "",
    additionalNotes: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Booking submitted:", formData)

  }

  const eventTypes = [
    { value: "wedding", label: "Wedding", icon: Heart, color: "text-rose-500" },
    { value: "birthday", label: "Birthday Party", icon: Gift, color: "text-pink-500" },
    { value: "engagement", label: "Engagement Party", icon: Sparkles, color: "text-purple-500" },
    { value: "corporate", label: "Corporate Event", icon: Users, color: "text-blue-500" },
    { value: "baby-shower", label: "Baby Shower", icon: Baby, color: "text-green-500" },
    { value: "anniversary", label: "Anniversary", icon: Calendar, color: "text-yellow-500" },
  ]

  const packages = [
    {
      name: "Silver",
      price: "$2,999",
      features: ["Event planning consultation", "Venue recommendations", "Basic decor package", "Day-of coordination"],
      popular: false,
    },
    {
      name: "Gold",
      price: "$4,999",
      features: ["Everything in Silver", "Premium decor package", "Full vendor management", "Professional photography"],
      popular: true,
    },
    {
      name: "Platinum",
      price: "$7,999",
      features: ["Everything in Gold", "Luxury styling", "Personal event assistant", "Full weekend coordination"],
      popular: false,
    },
  ]

  const additionalServices = [
    "Photography & Videography",
    "Floral Arrangements",
    "Catering Services",
    "Entertainment & DJ",
    "Transportation",
    "Custom Decorations",
    "Wedding Cake",
    "Photo Booth",
    "Live Music",
    "Bar Service",
  ]

  const steps = [
    { number: 1, title: "Personal Info", description: "Tell us about yourself" },
    { number: 2, title: "Event Details", description: "Share your event vision" },
    { number: 3, title: "Services & Package", description: "Choose your preferences" },
    { number: 4, title: "Review & Submit", description: "Confirm your booking" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-16">
     
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Book+Now+Background"
            alt="Book Now Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-serif text-gray-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Book Your Dream Event
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's start planning your perfect celebration. Fill out our comprehensive booking form and we'll get back to
            you within 24 hours with a personalized proposal.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">500+</div>
              <div className="text-sm text-gray-600">Events Planned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">24hrs</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">5★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </motion.div>
        </div>
      </section>

      
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex justify-between items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                      currentStep >= step.number ? "bg-rose-500 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > step.number ? <CheckCircle className="w-5 h-5" /> : step.number}
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-sm font-medium text-gray-800">{step.title}</div>
                    <div className="text-xs text-gray-600 hidden md:block">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 transition-colors duration-300 ${
                      currentStep > step.number ? "bg-rose-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="border-0 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-serif text-gray-800">
                  Step {currentStep}: {steps[currentStep - 1].title}
                </CardTitle>
                <p className="text-gray-600">{steps[currentStep - 1].description}</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
         
                  {currentStep === 1 && (
                    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            placeholder="Your first name"
                            required
                          />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            placeholder="Your last name"
                            required
                          />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+1 (555) 123-4567"
                            required
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                        <Select onValueChange={(value) => handleInputChange("hearAboutUs", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="google">Google Search</SelectItem>
                            <SelectItem value="social-media">Social Media</SelectItem>
                            <SelectItem value="referral">Friend/Family Referral</SelectItem>
                            <SelectItem value="website">Website</SelectItem>
                            <SelectItem value="advertisement">Advertisement</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </motion.div>
                  )}

               
                  {currentStep === 2 && (
                    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
                      <motion.div variants={fadeInUp} className="space-y-4">
                        <Label>Event Type *</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {eventTypes.map((type) => (
                            <div
                              key={type.value}
                              onClick={() => handleInputChange("eventType", type.value)}
                              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                                formData.eventType === type.value
                                  ? "border-rose-500 bg-rose-50"
                                  : "border-gray-200 hover:border-rose-300"
                              }`}
                            >
                              <type.icon className={`w-6 h-6 ${type.color} mb-2`} />
                              <div className="text-sm font-medium text-gray-800">{type.label}</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="eventDate">Event Date *</Label>
                          <Input
                            id="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={(e) => handleInputChange("eventDate", e.target.value)}
                            required
                          />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="eventTime">Preferred Time</Label>
                          <Select onValueChange={(value) => handleInputChange("eventTime", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                              <SelectItem value="evening">Evening (5PM - 10PM)</SelectItem>
                              <SelectItem value="night">Night (10PM+)</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="guestCount">Expected Guest Count *</Label>
                          <Select onValueChange={(value) => handleInputChange("guestCount", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Number of guests" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-25">1-25 guests</SelectItem>
                              <SelectItem value="26-50">26-50 guests</SelectItem>
                              <SelectItem value="51-100">51-100 guests</SelectItem>
                              <SelectItem value="101-200">101-200 guests</SelectItem>
                              <SelectItem value="201-300">201-300 guests</SelectItem>
                              <SelectItem value="300+">300+ guests</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-5k">Under Rupees 5000</SelectItem>
                              <SelectItem value="5k-10k">Rupees 5000 - 10,000</SelectItem>
                              <SelectItem value="10k-20k">ruppees 1000-20000</SelectItem>
                              <SelectItem value="20k-50k">rupees 20,000 - 50,000</SelectItem>
                              <SelectItem value="50k+">rupees 50000</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>
                      </div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="location">Event Location/City *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          placeholder="City or specific venue if known"
                          required
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="venue">Venue Preference</Label>
                        <Select onValueChange={(value) => handleInputChange("venue", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select venue type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="indoor">Indoor Venue</SelectItem>
                            <SelectItem value="outdoor">Outdoor Venue</SelectItem>
                            <SelectItem value="both">Open to Both</SelectItem>
                            <SelectItem value="home">Private Home</SelectItem>
                            <SelectItem value="hotel">Hotel/Resort</SelectItem>
                            <SelectItem value="restaurant">Restaurant</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </motion.div>
                  )}

                 
                  {currentStep === 3 && (
                    <motion.div className="space-y-8" variants={staggerContainer} initial="initial" animate="animate">
                      <motion.div variants={fadeInUp} className="space-y-4">
                        <Label>Choose Your Package</Label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {packages.map((pkg) => (
                            <div
                              key={pkg.name}
                              onClick={() => handleInputChange("selectedPackage", pkg.name)}
                              className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                                formData.selectedPackage === pkg.name
                                  ? "border-rose-500 bg-rose-50"
                                  : "border-gray-200 hover:border-rose-300"
                              }`}
                            >
                              {pkg.popular && (
                                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white">
                                  Most Popular
                                </Badge>
                              )}
                              <div className="text-center">
                                <h3 className="text-xl font-serif text-gray-800 mb-2">{pkg.name}</h3>
                                <div className="text-2xl font-bold text-rose-600 mb-4">{pkg.price}</div>
                                <ul className="space-y-2 text-sm text-gray-600">
                                  {pkg.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                      <CheckCircle className="w-4 h-4 text-rose-500" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-4">
                        <Label>Additional Services (Optional)</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {additionalServices.map((service) => (
                            <div key={service} className="flex items-center space-x-2">
                              <Checkbox
                                id={service}
                                checked={formData.selectedServices.includes(service)}
                                onCheckedChange={() => handleServiceToggle(service)}
                              />
                              <Label htmlFor={service} className="text-sm cursor-pointer">
                                {service}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="preferredStyle">Preferred Style/Theme</Label>
                        <Input
                          id="preferredStyle"
                          value={formData.preferredStyle}
                          onChange={(e) => handleInputChange("preferredStyle", e.target.value)}
                          placeholder="e.g., Rustic, Modern, Classic, Bohemian"
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="specialRequests">Special Requests or Requirements</Label>
                        <Textarea
                          id="specialRequests"
                          value={formData.specialRequests}
                          onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                          placeholder="Any special dietary requirements, accessibility needs, or specific requests..."
                          rows={4}
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
                      <motion.div variants={fadeInUp}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Review Your Information</h3>
                        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <strong>Name:</strong> {formData.firstName} {formData.lastName}
                            </div>
                            <div>
                              <strong>Email:</strong> {formData.email}
                            </div>
                            <div>
                              <strong>Phone:</strong> {formData.phone}
                            </div>
                            <div>
                              <strong>Event Type:</strong>{" "}
                              {eventTypes.find((t) => t.value === formData.eventType)?.label}
                            </div>
                            <div>
                              <strong>Event Date:</strong> {formData.eventDate}
                            </div>
                            <div>
                              <strong>Guest Count:</strong> {formData.guestCount}
                            </div>
                            <div>
                              <strong>Location:</strong> {formData.location}
                            </div>
                            <div>
                              <strong>Package:</strong> {formData.selectedPackage}
                            </div>
                          </div>
                          {formData.selectedServices.length > 0 && (
                            <div>
                              <strong>Additional Services:</strong>
                              <ul className="list-disc list-inside mt-2">
                                {formData.selectedServices.map((service) => (
                                  <li key={service} className="text-sm">
                                    {service}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="additionalNotes">Additional Notes</Label>
                        <Textarea
                          id="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                          placeholder="Any additional information you'd like to share..."
                          rows={4}
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="bg-rose-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-800 mb-3">What Happens Next?</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-rose-500" />
                            We'll review your request within 24 hours
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-rose-500" />
                            Our team will contact you to schedule a consultation
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-rose-500" />
                            We'll provide a detailed proposal and timeline
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-rose-500" />
                            Start planning your dream event together!
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

          
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="border-rose-300 text-rose-600 hover:bg-rose-50"
                      >
                        Previous Step
                      </Button>
                    )}

                    <div className="ml-auto">
                      {currentStep < 4 ? (
                        <Button type="button" onClick={nextStep} className="bg-rose-500 hover:bg-rose-600 text-white">
                          Next Step <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      ) : (
                        <Button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white px-8">
                          Submit Booking Request
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">Need Help or Have Questions?</h2>
            <p className="text-lg text-gray-600">Our team is here to assist you every step of the way</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Phone className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our planning team</p>
                <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50" asChild>
                  <Link href="tel:+15551234567">+1 (555) 123-4567</Link>
                </Button>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Mail className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your questions anytime</p>
                <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50" asChild>
                  <Link href="mailto:hello@happyhappenings.com">hello@happyhappenings.com</Link>
                </Button>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <MessageCircle className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Quick chat for immediate assistance</p>
                <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50">
                  Start Chat
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
      
    </div>
  )
}
