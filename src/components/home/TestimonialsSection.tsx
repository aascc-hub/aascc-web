import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  batch: string;
  course: string;
  image: string;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length, itemsPerPage]);

  return (
    <section className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-4">Student Testimonials</h2>
          <p className="text-xl text-blue-200">Hear from our successful alumni</p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 z-10 bg-yellow-500 hover:bg-yellow-600 text-blue-900 p-3 rounded-full transition-colors duration-200 md:block hidden"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.slice(currentIndex, currentIndex + itemsPerPage).map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
                    <Quote className="h-6 w-6 text-yellow-500 mb-3" />
                    <p className="text-gray-700 mb-6 italic text-base">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-blue-900 text-base">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.course}</p>
                        <p className="text-xs text-gray-500">{testimonial.batch}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 z-10 bg-yellow-500 hover:bg-yellow-600 text-blue-900 p-3 rounded-full transition-colors duration-200 md:block hidden"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-between mt-6 md:hidden px-4">
            <button
              onClick={prevTestimonial}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 rounded-full transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 rounded-full transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === Math.floor(currentIndex / itemsPerPage) ? 'bg-yellow-500' : 'bg-white/30'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
