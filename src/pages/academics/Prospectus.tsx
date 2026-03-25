import React from 'react';

const Prospectus = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">College Prospectus</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive information about our academic programs, admission procedures, and college life
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-8 text-center italic">
            The complete college prospectus with detailed information about programs, 
            admission procedures, fees, and regulations will be available here.
          </p>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">Page content coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prospectus;