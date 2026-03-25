import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface GallerySectionProps {
  campusHighlights: GalleryItem[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ campusHighlights }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mb-4">Campus Highlights</h2>
          <p className="text-xl text-gray-600">Experience the beauty and facilities of our campus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {campusHighlights.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg h-64 shadow-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link
            to="/gallery"
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            View Full Gallery
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
