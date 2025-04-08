import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="bg-white py-12 px-4 md:px-8 mt-28">
      <div className="max-w-7xl mx-auto border rounded-lg p-6 md:p-10 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2 border-b-2 border-blue-500 inline-block">
          Get in Touch With Us
        </h2>

        <div className="mt-10 bg-white shadow-xl rounded-lg p-6 md:flex md:gap-10">
          {/* Left Side - Info */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-800">Contact Our Admissions Team</h3>
              <p className="text-gray-600 mt-2">
                Have questions about admissions, academics, or facilities? Reach out — we're here to help you make the right choice for your future.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-blue-800">Email</h4>
              <p className="flex items-center gap-2 mt-1">
                <span className="text-blue-600">📧</span>
                <a href="mailto:admissions@schoolname.edu" className="text-blue-600 hover:underline">
                  admissions@schoolname.edu
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-blue-800">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-100 hover:bg-blue-100 p-2 rounded-full text-blue-600">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-blue-100 p-2 rounded-full text-blue-600">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-blue-100 p-2 rounded-full text-blue-600">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="mt-8 md:mt-0 md:w-1/2 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Phone Number (Optional)"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
