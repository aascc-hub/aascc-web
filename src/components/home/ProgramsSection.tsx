import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Program {
  title: string;
  abbreviation: string;
  description: string;
  image: string;
  duration: string;
  seats: string;
}

interface ProgramsSectionProps {
  featuredPrograms: Program[];
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ featuredPrograms }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mb-4">Featured Programs</h2>
          <p className="text-xl text-gray-600">Discover our comprehensive academic offerings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group">
              <div className="relative overflow-hidden h-56">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-bold text-lg">
                  {program.abbreviation}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="flex justify-between text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                  <span className="font-semibold">Duration: {program.duration}</span>
                  <span className="font-semibold">Seats: {program.seats}</span>
                </div>
                <Link
                to={`/academics/programs/${program.abbreviation.toLowerCase()}`}
                  className="inline-flex items-center text-blue-900 hover:text-yellow-600 font-semibold transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
