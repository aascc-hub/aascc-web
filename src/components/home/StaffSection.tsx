import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StaffMember {
  name: string;
  role: string;
  department: string;
  image: string;
}

interface StaffSectionProps {
  staff: StaffMember[];
}

const StaffSection: React.FC<StaffSectionProps> = ({ staff }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextStaff = () => {
    setCurrentIndex((prev) => {
      const next = prev + itemsPerPage;
      return next >= staff.length ? 0 : next;
    });
  };

  const prevStaff = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage + staff.length) % staff.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextStaff();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, [staff.length, itemsPerPage]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mb-4">Our Faculty</h2>
          <p className="text-xl text-gray-600">Meet our dedicated educators and administrators</p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevStaff}
              className="absolute left-0 z-10 bg-yellow-500 hover:bg-yellow-600 text-blue-900 p-3 rounded-full transition-colors duration-200 md:block hidden"
              aria-label="Previous staff"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {staff.slice(currentIndex, currentIndex + itemsPerPage).map((member, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center transition-transform duration-500 ease-in-out transform hover:scale-105">
                    <img
                      src={member.image || '/images/avatar.png'}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-yellow-400 bg-white"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = '/images/avatar.png'; }}
                    />
                    <h4 className="font-semibold text-blue-900 text-lg mb-2">{member.name}</h4>
                    <p className="text-yellow-600 text-base mb-1">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.department}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextStaff}
              className="absolute right-0 z-10 bg-yellow-500 hover:bg-yellow-600 text-blue-900 p-3 rounded-full transition-colors duration-200 md:block hidden"
              aria-label="Next staff"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-between mt-6 md:hidden px-4">
            <button
              onClick={prevStaff}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 rounded-full transition-colors duration-200"
              aria-label="Previous staff"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextStaff}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 rounded-full transition-colors duration-200"
              aria-label="Next staff"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(staff.length / itemsPerPage) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === Math.floor(currentIndex / itemsPerPage) ? 'bg-yellow-500' : 'bg-gray-300'
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

export default StaffSection;
