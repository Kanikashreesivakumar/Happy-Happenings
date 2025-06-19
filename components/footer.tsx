import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=96&text=Happy+Happenings"
                alt="Happy Happenings Logo"
                width={96}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating unforgettable memories through exceptional event planning and flawless execution.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#weddings" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Weddings
                </Link>
              </li>
              <li>
                <Link href="/services#birthdays" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Birthdays
                </Link>
              </li>
              <li>
                <Link href="/services#corporate" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/services#engagements" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Engagements
                </Link>
              </li>
              <li>
                <Link href="/services#baby-showers" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Baby Showers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-500" />
                <span className="text-gray-300">hello@happyhappenings.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                <span className="text-gray-300">
                  123 Event Street
                  <br />
                  Celebration City, CC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Happy Happenings. All rights reserved. |
            <Link href="/privacy" className="hover:text-rose-500 transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-rose-500 transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
