"use client";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export function FooterWithMap() {
  const schoolLocation = {
    lat: 24.7703,
    lng: 92.69996,
    address: "Aloicherra Part IV, Karicherra Bazar, 788165"
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">LITTLE SCHOLARS’ CENTRAL SCHOOL</h3>
            <p className="text-gray-600">
              Providing quality education since 2024, our institution is 
              committed to nurturing young minds for a brighter future.
            </p>
            <div className="flex items-center mt-4">
              <Clock className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium">School Hours</p>
                <p className="text-gray-500">Mon-Fri: 8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/admission" className="text-gray-600 hover:text-blue-600 transition">Admissions</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-blue-600 transition">Academics</a></li>
           
              <li><a href="/gallary" className="text-gray-600 hover:text-blue-600 transition">Gallary</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 h-64">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${schoolLocation.lng-0.005}%2C${schoolLocation.lat-0.005}%2C${schoolLocation.lng+0.005}%2C${schoolLocation.lat+0.005}&layer=mapnik&marker=${schoolLocation.lat}%2C${schoolLocation.lng}`}
                className="hover:grayscale-0 transition-all duration-500"
                aria-label="School Location Map"
              ></iframe>
            </div>
            <div className="flex items-start mt-2">
              <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <a 
                href={`https://www.openstreetmap.org/?mlat=${schoolLocation.lat}&mlon=${schoolLocation.lng}#map=15/${schoolLocation.lat}/${schoolLocation.lng}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                {schoolLocation.address}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 text-blue-600 mr-3" />
              <a href="mailto:info@ourschool.edu" className="text-gray-600 hover:text-blue-600 transition">
              littlescholarscentralschool@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-600 mr-3" />
              <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition">
              9954568020
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-gray-500">© {new Date().getFullYear()}  LITTLE SCHOLARS’ CENTRAL SCHOOL. All rights reserved.</p>
            <div className="flex md:justify-end space-x-6 mt-2">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}