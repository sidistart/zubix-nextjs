"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "/images/avatar-1.jpg", // This is a placeholder, we'll handle it appropriately
    quote:
      "Zubix has completely transformed how I manage my business finances. The bill payment reminders have saved me from late fees countless times.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Freelance Designer",
    image: "/images/avatar-2.jpg",
    quote:
      "As a freelancer, tracking my income and expenses was always a pain. Zubix made budgeting simple and even helped me save for taxes.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Graduate Student",
    image: "/images/avatar-3.jpg",
    quote:
      "The loan feature on Zubix helped me cover an emergency expense when I really needed it. The process was quick and the rates were fair.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Zubix is helping people take control of their finances
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-8 left-8 text-blue-100 text-4xl">
                <FaQuoteLeft />
              </div>

              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center text-blue-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
