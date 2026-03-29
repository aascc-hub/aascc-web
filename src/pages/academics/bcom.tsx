import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Users, Award, DollarSign, CheckCircle, ArrowRight, Target, BarChart3, Briefcase } from 'lucide-react';

const BComProgramDetail = () => {
  const navigate = useNavigate();

  const program = {
    id: 'bcom',
    name: 'Bachelor of Commerce',
    abbreviation: 'B.Com',
    duration: '3 Years',
    seats: '120',
    fees: '₹25000 per annum',
    placements: '90% placement rate with average package of 5.5 LPA',
    tagline: 'Empowering Future Financial Leaders',
    overview: 'The Bachelor of Commerce is a comprehensive 3-year program designed to provide a strong foundation in financial accounting, taxation, and business management. Our curriculum integrates traditional commerce with modern digital finance.',
    description: 'Our B.Com program offers in-depth knowledge of business trade, economic policies, and financial markets. Students master essential tools like Tally, advanced Excel, and SAP while exploring emerging fields like Fintech and Global Trade.',
    semesters: [
      { semester: 'Semester I', subjects: ['Financial Accounting', 'Business Mathematics', 'Micro Economics', 'Business Communication'] },
      { semester: 'Semester II', subjects: ['Corporate Accounting', 'Business Statistics', 'Macro Economics', 'Principles of Management'] },
      { semester: 'Semester III', subjects: ['Cost Accounting', 'Income Tax Law', 'Banking & Finance', 'Digital Marketing for Business'] },
      { semester: 'Semester IV', subjects: ['Management Accounting', 'Indirect Tax (GST)', 'Auditing', 'Financial Markets'] },
      { semester: 'Semester V', subjects: ['Financial Management', 'Investment Analysis', 'Business Analytics', 'Electives'] },
      { semester: 'Semester VI', subjects: ['Strategic Management', 'Entrepreneurship', 'Corporate Law', 'Project & Internship'] }
    ],
    highlights: [
      'Modern Fintech & Accounting Labs',
      'Certifications: Google Cloud, Tally ERP, SAP',
      'Real-world business case study projects',
      'Industrial visits to stock exchanges and banks',
      'Expert-led workshops on GST and Taxation',
      'Strong network of corporate industry partners'
    ],
    specializations: ['Accounting & Finance', 'Banking & Insurance', 'Taxation', 'Business Analytics', 'Digital Marketing'],
    skills: ['Financial Analysis', 'Tally & ERP', 'Tax Planning', 'Business Strategy', 'Audit & Compliance', 'Stock Market Analytics'],
    career_paths: [
      { role: 'Financial Analyst', company: 'Banking & Financial Firms', salary: '5-10 LPA' },
      { role: 'Tax Consultant', company: 'CA Firms & Corporate Tax Depts', salary: '4-9 LPA' },
      { role: 'Investment Banker', company: 'Investment Firms & MNCs', salary: '8-15 LPA' },
      { role: 'Accountant', company: 'Manufacturing & Tech Companies', salary: '3-7 LPA' }
    ],
    eligibility: ['12th Pass from recognized board', 'Commerce/Science stream preferred', 'Minimum 50% aggregate marks', 'Strong numerical aptitude preferred']
  };

  return (
    <div className="pt-32">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-900 hover:text-yellow-600 font-semibold mb-8 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to Programs
        </button>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg shadow-xl p-8 mb-8">
          <div className="text-5xl font-bold mb-2">{program.abbreviation}</div>
          <h1 className="text-3xl font-bold mb-4">{program.name}</h1>
          <p className="text-xl text-blue-200 mb-6">{program.tagline}</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-800/50 rounded-lg p-4">
              <Clock className="h-6 w-6 mb-2 text-yellow-400" />
              <div className="text-sm text-blue-200">Duration</div>
              <div className="text-lg font-bold">{program.duration}</div>
            </div>
            <div className="bg-blue-800/50 rounded-lg p-4">
              <Users className="h-6 w-6 mb-2 text-yellow-400" />
              <div className="text-sm text-blue-200">Seats</div>
              <div className="text-lg font-bold">{program.seats}</div>
            </div>
            <div className="bg-blue-800/50 rounded-lg p-4">
              <DollarSign className="h-6 w-6 mb-2 text-yellow-400" />
              <div className="text-sm text-blue-200">Fees</div>
              <div className="text-lg font-bold">{program.fees}</div>
            </div>
            <div className="bg-blue-800/50 rounded-lg p-4">
              <Award className="h-6 w-6 mb-2 text-yellow-400" />
              <div className="text-sm text-blue-200">Placement</div>
              <div className="text-lg font-bold">{program.placements.split(' ')[0]}</div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Program Overview</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{program.overview}</p>
        </section>

        {/* Highlights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Why Choose This Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {program.highlights.map((highlight, i) => (
              <div key={i} className="bg-white border-l-4 border-yellow-500 rounded-lg p-4 shadow-md">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-semibold">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Curriculum Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {program.semesters.map((sem, i) => (
              <div key={i} className="bg-blue-900 text-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">{sem.semester}</h3>
                <ul className="space-y-2">
                  {sem.subjects.map((sub, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1 flex-shrink-0"></div>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Specializations Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {program.specializations.map((spec, i) => (
              <div key={i} className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 text-center">
                <Target className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                <p className="font-bold text-blue-900">{spec}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Career */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-yellow-500" />
              Skills You'll Develop
            </h3>
            <div className="space-y-3">
              {program.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-yellow-500" />
              Career Opportunities
            </h3>
            <div className="space-y-3">
              {program.career_paths.map((path, i) => (
                <div key={i} className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">{path.role}</p>
                  <p className="text-sm text-gray-600">{path.salary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eligibility & Admission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-900">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Eligibility Criteria</h3>
            <ul className="space-y-3">
              {program.eligibility.map((el, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{el}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border-2 border-yellow-500">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Admission Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Annual Fee</p>
                <p className="text-2xl font-bold text-blue-900">{program.fees}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Placement Rate</p>
                <p className="text-lg font-bold text-green-700">{program.placements}</p>
              </div>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BComProgramDetail;