"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Phone, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { title: "Weddings", href: "/services#weddings", description: "Complete wedding planning services" },
    { title: "Birthdays", href: "/services#birthdays", description: "Memorable birthday celebrations" },
    { title: "Engagements", href: "/services#engagements", description: "Romantic engagement parties" },
    { title: "Corporate Events", href: "/services#corporate", description: "Professional corporate gatherings" },
  ]

  const galleryItems = [
    { title: "Wedding Gallery", href: "/gallery?filter=weddings", image: "/placeholder.svg?height=100&width=150" },
    { title: "Birthday Gallery", href: "/gallery?filter=birthdays", image: "/placeholder.svg?height=100&width=150" },
    { title: "Corporate Gallery", href: "/gallery?filter=corporate", image: "/placeholder.svg?height=100&width=150" },
    {
      title: "Engagement Gallery",
      href: "/gallery?filter=engagements",
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

  // Custom NavigationMenuLink component with enhanced hover effects
  const CustomNavLink = ({ href, children, className, ...props }: any) => (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink className={className} {...props}>
        {children}
      </NavigationMenuLink>
    </Link>
  )

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/placeholder.svg?height=40&width=120&text=Happy+Happenings+Logo"
              alt="Happy Happenings Logo"
              width={120}
              height={40}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Home */}
                <NavigationMenuItem>
                  <CustomNavLink
                    href="/"
                    className={cn(
                      "relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 group",
                      "before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300",
                      "before:scale-0 before:opacity-0 hover:before:scale-100 hover:before:opacity-100",
                      isScrolled
                        ? "text-gray-700 hover:text-rose-600 before:bg-rose-50 hover:shadow-sm"
                        : "text-white hover:text-rose-200 before:bg-white/10 hover:shadow-lg",
                    )}
                  >
                    <span className="relative z-10">Home</span>
                  </CustomNavLink>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 group",
                      "before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300",
                      "before:scale-0 before:opacity-0 hover:before:scale-100 hover:before:opacity-100",
                      "data-[state=open]:before:scale-100 data-[state=open]:before:opacity-100",
                      isScrolled
                        ? "text-gray-700 hover:text-rose-600 before:bg-rose-50 data-[state=open]:text-rose-600 data-[state=open]:before:bg-rose-50 hover:shadow-sm"
                        : "text-white hover:text-rose-200 before:bg-white/10 data-[state=open]:text-rose-200 data-[state=open]:before:bg-white/10 hover:shadow-lg",
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      Services
                      <ChevronDown className="w-3 h-3 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border border-gray-200 shadow-xl rounded-xl p-2 mt-2">
                    <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-rose-50 hover:text-rose-600 focus:bg-rose-50 focus:text-rose-600 hover:shadow-md hover:scale-[1.02] group"
                            >
                              <div className="text-sm font-medium leading-none group-hover:text-rose-700 transition-colors duration-300">
                                {service.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-rose-600/80 transition-colors duration-300">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Gallery Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 group",
                      "before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300",
                      "before:scale-0 before:opacity-0 hover:before:scale-100 hover:before:opacity-100",
                      "data-[state=open]:before:scale-100 data-[state=open]:before:opacity-100",
                      isScrolled
                        ? "text-gray-700 hover:text-rose-600 before:bg-rose-50 data-[state=open]:text-rose-600 data-[state=open]:before:bg-rose-50 hover:shadow-sm"
                        : "text-white hover:text-rose-200 before:bg-white/10 data-[state=open]:text-rose-200 data-[state=open]:before:bg-white/10 hover:shadow-lg",
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      Gallery
                      <ChevronDown className="w-3 h-3 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border border-gray-200 shadow-xl rounded-xl p-2 mt-2">
                    <ul className="grid w-[600px] gap-2 p-2 md:grid-cols-2">
                      {galleryItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="flex select-none space-x-3 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-rose-50 hover:text-rose-600 focus:bg-rose-50 focus:text-rose-600 hover:shadow-md hover:scale-[1.02] group"
                            >
                              <div className="relative overflow-hidden rounded-md">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.title}
                                  width={60}
                                  height={40}
                                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                              </div>
                              <div>
                                <div className="text-sm font-medium leading-none group-hover:text-rose-700 transition-colors duration-300">
                                  {item.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1 group-hover:text-rose-600/80 transition-colors duration-300">
                                  View our {item.title.toLowerCase()} collection
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Packages */}
                <NavigationMenuItem>
                  <CustomNavLink
                    href="/packages"
                    className={cn(
                      "relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 group",
                      "before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300",
                      "before:scale-0 before:opacity-0 hover:before:scale-100 hover:before:opacity-100",
                      isScrolled
                        ? "text-gray-700 hover:text-rose-600 before:bg-rose-50 hover:shadow-sm"
                        : "text-white hover:text-rose-200 before:bg-white/10 hover:shadow-lg",
                    )}
                  >
                    <span className="relative z-10">Packages</span>
                  </CustomNavLink>
                </NavigationMenuItem>

                {/* Testimonials */}
                <NavigationMenuItem>
                  <CustomNavLink
                    href="/testimonials"
                    className={cn(
                      "relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 group",
                      "before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300",
                      "before:scale-0 before:opacity-0 hover:before:scale-100 hover:before:opacity-100",
                      isScrolled
                        ? "text-gray-700 hover:text-rose-600 before:bg-rose-50 hover:shadow-sm"
                        : "text-white hover:text-rose-200 before:bg-white/10 hover:shadow-lg",
                    )}
                  >
                    <span className="relative z-10">Testimonials</span>
                  </CustomNavLink>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <CustomNavLink
                    href="/contact"
                    className={cn(
                      "relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 group",
                      "before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300",
                      "before:scale-0 before:opacity-0 hover:before:scale-100 hover:before:opacity-100",
                      isScrolled
                        ? "text-gray-700 hover:text-rose-600 before:bg-rose-50 hover:shadow-sm"
                        : "text-white hover:text-rose-200 before:bg-white/10 hover:shadow-lg",
                    )}
                  >
                    <span className="relative z-10">Contact</span>
                  </CustomNavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Book Now Button */}
            <Button
              size="sm"
              className="relative ml-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 group overflow-hidden"
              asChild
            >
              <Link href="/book-now">
                <span className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Phone className="w-4 h-4 mr-2 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative z-10 font-medium">Book Now</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "relative p-2 rounded-lg transition-all duration-300",
                    "before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300",
                    "before:scale-0 before:opacity-0 hover:before:scale-100 hover:before:opacity-100",
                    isScrolled ? "hover:bg-rose-50 before:bg-rose-50" : "hover:bg-white/10 before:bg-white/10",
                  )}
                >
                  <Menu
                    className={cn(
                      "w-6 h-6 relative z-10 transition-colors duration-300",
                      isScrolled ? "text-gray-700 hover:text-rose-600" : "text-white hover:text-rose-200",
                    )}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <div className="flex flex-col gap-2 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-medium text-gray-700 hover:text-rose-600 transition-all duration-300 p-3 rounded-lg hover:bg-rose-50 hover:shadow-sm hover:scale-[1.02]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="text-lg font-medium text-gray-700 hover:text-rose-600 transition-all duration-300 p-3 rounded-lg hover:bg-rose-50 hover:shadow-sm hover:scale-[1.02]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/gallery"
                    className="text-lg font-medium text-gray-700 hover:text-rose-600 transition-all duration-300 p-3 rounded-lg hover:bg-rose-50 hover:shadow-sm hover:scale-[1.02]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/packages"
                    className="text-lg font-medium text-gray-700 hover:text-rose-600 transition-all duration-300 p-3 rounded-lg hover:bg-rose-50 hover:shadow-sm hover:scale-[1.02]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Packages
                  </Link>
                  <Link
                    href="/testimonials"
                    className="text-lg font-medium text-gray-700 hover:text-rose-600 transition-all duration-300 p-3 rounded-lg hover:bg-rose-50 hover:shadow-sm hover:scale-[1.02]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-medium text-gray-700 hover:text-rose-600 transition-all duration-300 p-3 rounded-lg hover:bg-rose-50 hover:shadow-sm hover:scale-[1.02]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Button
                    className="bg-rose-500 hover:bg-rose-600 text-white rounded-full mt-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 group overflow-hidden"
                    asChild
                  >
                    <Link href="/book-now" onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <Phone className="w-4 h-4 mr-2 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                      <span className="relative z-10 font-medium">Book Now</span>
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
