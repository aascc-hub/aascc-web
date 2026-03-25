import { Clock, Users, Award, BookOpen, ArrowRight } from 'lucide-react';
import { Link, } from 'react-router-dom';

const ProgramsOffered = () => {

  const programs = [
    {
      id: 'B.com',
      name: 'Bachelor of Commerce',
      abbreviation: 'B.Com',
      duration: '3 Years',
      seats: '120',
      fees: '₹25,000',
      placementRate: '92%',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: "Empowering Tomorrow's Business Leaders",
      highlights: [
        'Industry-experienced faculty members',
        'Internship opportunities with top companies',
        'Live case studies and business simulations'
      ],
      route: '/academics/programs/bcom'
    },
    {
      id: 'BA',
      name: 'Bachelor In Arts',
      abbreviation: 'BA',
      duration: '3 Years',
      seats: '100',
      fees: '₹20,000',
      placementRate: '95%',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Shaping Future Cultural Innovators',
      highlights: [
        'Modern Digital Research Labs',
        'Creative Arts & Humanities Focus',
        'Hands-on Leadership Projects'
      ],
      route: '/academics/programs/ba'
    },
    {
      id: 'BSC',
      name: 'Bachelor of Science',
      abbreviation: 'B.Sc',
      duration: '3 Years',
      seats: '80',
      fees: '₹40,000',
      placementRate: '90%',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Exploring Scientific Frontiers',
      highlights: [
        'Advanced Research Laboratories',
        'Practical Field Work & Projects',
        'Expert Guidance for Higher Studies'
      ],
      route: '/academics/programs/bsc'
    },
    {
      id: 'MCOM',
      name: 'Master of Commerce',
      abbreviation: 'M.Com',
      duration: '2 Years',
      seats: '40',
      fees: '₹85,000',
      placementRate: '94%',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Mastering Global Trade and Finance',
      highlights: [
        'Specialized Research Methodology',
        'Corporate Internship Program',
        'Advanced Strategic Management'
      ],
      route: '/academics/programs/mcom'
    },
    {
      id: 'MA',
      name: 'Master of Arts',
      abbreviation: 'M.A',
      duration: '2 Years',
      seats: '50',
      fees: '₹75,000',
      placementRate: '85%',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Deepening Creative Excellence',
      highlights: [
        'Interdisciplinary Research Approach',
        'Seminars and Literature Workshops',
        'Creative Writing & Analysis'
      ],
      route: '/academics/programs/ma'
    }
  ];

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 pt-20">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Academic Programs</h1>
          <p className="text-xl text-gray-600">Choose the program that aligns with your career aspirations</p>
        </div>

        {/* Programs Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto mb-12">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-blue-900 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">{program.abbreviation}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">{program.name}</h2>
                <p className="text-yellow-600 font-semibold mb-4">{program.tagline}</p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  {program.highlights.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Quick Info */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-gray-200">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Duration</p>
                    <p className="font-bold text-blue-900">{program.duration}</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Seats</p>
                    <p className="font-bold text-blue-900">{program.seats}</p>
                  </div>
                  <div className="text-center">
                    <Award className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Placements</p>
                    <p className="font-bold text-green-700">{program.placementRate}</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <Link
                    to={program.route}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={() => alert('Prospectus download starting...')}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Download Prospectus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-auto mb-12">
          <div className="bg-blue-900 text-white px-8 py-4">
            <h3 className="text-2xl font-bold">Program Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-blue-900">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-blue-900">B.Com</th>
                  <th className="px-6 py-4 text-center font-bold text-blue-900">B.Sc</th>
                  <th className="px-6 py-4 text-center font-bold text-blue-900">M.Com</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Duration</td>
                  <td className="px-6 py-4 text-center">3 Years</td>
                  <td className="px-6 py-4 text-center">3 Years</td>
                  <td className="px-6 py-4 text-center">2 Years</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Placement</td>
                  <td className="px-6 py-4 text-center text-green-700 font-bold">92%</td>
                  <td className="px-6 py-4 text-center text-green-700 font-bold">90%</td>
                  <td className="px-6 py-4 text-center text-green-700 font-bold">94%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg shadow-lg p-8 mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Programs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <BookOpen className="h-8 w-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Modern Curriculum</h4>
                <p className="text-blue-200 text-sm">Updated to match latest industry demands</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="h-8 w-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Expert Faculty</h4>
                <p className="text-blue-200 text-sm">Professionals with deep industry roots</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="h-8 w-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Global Network</h4>
                <p className="text-blue-200 text-sm">Connect with alumni and top companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsOffered;   