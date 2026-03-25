import { Eye, Target, Heart, Lightbulb } from 'lucide-react';

const VisionMission = () => {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in all our endeavors.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We encourage creative thinking, embrace change, and foster an environment of continuous improvement.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in teaching, research, and service, setting high standards for ourselves and our students.'
    },
    {
      icon: Eye,
      title: 'Inclusivity',
      description: 'We celebrate diversity and create an inclusive environment where everyone can thrive and succeed.'
    }
  ];

  const objectives = [
    'To provide quality education that meets international standards',
    'To foster critical thinking and analytical skills among students',
    'To promote research and innovation in various academic disciplines',
    'To develop ethical and responsible citizens for society',
    'To encourage cultural diversity and global perspectives',
    'To build strong industry partnerships for practical learning',
    'To support community development through outreach programs',
    'To maintain sustainable and environmentally conscious practices'
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mt-8 mb-6">Vision & Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our guiding principles that shape everything we do at Anjuman Arts, Science & Commerce College, Bhatkal
          </p>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-lg p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-500 p-3 rounded-full mr-4">
                <Eye className="h-8 w-8 text-blue-900" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg leading-relaxed text-blue-100">
              To be a premier educational institution that empowers students with knowledge, skills, 
              and values to become global citizens who contribute meaningfully to society and lead 
              positive change in their communities and beyond.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-blue-900 rounded-lg p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-blue-900 p-3 rounded-full mr-4">
                <Target className="h-8 w-8 text-yellow-500" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg leading-relaxed text-blue-800">
              To provide quality education through innovative teaching methods, foster research and 
              critical thinking, promote cultural diversity and inclusivity, and develop ethical 
              leaders who are equipped to address the challenges of the 58st century.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Objectives */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Strategic Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-900 font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Philosophy */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">Our Educational Philosophy</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At AASCC we believe that education is a transformative force that goes beyond 
                the acquisition of knowledge. Our educational philosophy is centered on the holistic 
                development of students, nurturing not just their intellectual capabilities but also 
                their emotional, social, and ethical dimensions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We embrace a student-centered approach that recognizes the unique potential of each 
                individual. Our pedagogy combines traditional wisdom with modern innovation, creating 
                learning experiences that are both rigorous and engaging. We encourage active 
                participation, critical inquiry, and collaborative learning.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to lifelong learning extends beyond graduation, as we prepare our 
                students to be adaptive, creative, and responsible citizens who can contribute 
                positively to an increasingly interconnected and rapidly changing world.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-blue-200 mb-6">
            Be part of our journey to create a better tomorrow through quality education
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/academics/how-to-apply" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Apply Now
            </a>
            <a 
              href="/about/contact" 
              className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-blue-900 text-yellow-500 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;