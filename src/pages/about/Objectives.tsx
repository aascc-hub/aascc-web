import React from "react";

const objectives = [
  "To work for realization of our Vision and Mission statements spelt out.",
  "To deliver knowledge, skill as prescribed for a particular programme through innovations in teaching, learning and evaluation.",
  "Character building by including sense of comradeship, discipline, leadership, tolerance, patriotism and spirit of selfless service.",
  "Facilitate Academic, Social, Spiritual, Physical, Mental and Moral growth of students so as to realize all round Personality Development.",
  "Enable students to be socially responsive, nationally productive citizens by instilling values and civic responsibility by providing competent academic career and personal counselling.",
  "To induce knowledge that promotes self-learning and continuous improvement.",
  "To be efficient, effective, community acceptable and work for stakeholders satisfaction.",
  "To constantly display sensitivity to changing times through spirit of “Adapt & Excel”."
];

const Objectives = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Strategic Objectives
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Our objectives guide every initiative and program at Anjuman Arts, Science & Commerce College, Bhatkal.
        </p>
      </div>

      {/* Objectives Grid */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-900 font-bold text-sm">{index + 1}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{objective}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Objectives;
