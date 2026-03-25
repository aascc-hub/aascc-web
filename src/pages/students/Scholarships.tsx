import { DollarSign, GraduationCap, Award, Users } from 'lucide-react';

const Scholarships = () => {
  const scholarships = [
    {
      title: 'Merit Scholarship',
      amount: 'Up to ₹50,000',
      eligibility: 'Students with 85%+ marks',
      category: 'Academic Excellence',
      icon: GraduationCap,
      color: 'blue'
    },
    {
      title: 'Need-Based Financial Aid',
      amount: 'Up to ₹75,000',
      eligibility: 'Students from economically weaker sections',
      category: 'Financial Support',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Sports Scholarship',
      amount: 'Up to ₹40,000',
      eligibility: 'State/National level sports achievers',
      category: 'Sports Excellence',
      icon: Award,
      color: 'orange'
    },
    {
      title: 'Minority Community Scholarship',
      amount: 'Up to ₹60,000',
      eligibility: 'Students from minority communities',
      category: 'Community Support',
      icon: Users,
      color: 'purple'
    }
  ];

  const governmentSchemes = [
    {
      name: 'UGC Merit Scholarship',
      authority: 'University Grants Commission',
      amount: '₹20,000 - ₹50,000',
      eligibility: 'Top performers in university examinations'
    },
    {
      name: 'State Government Scholarship',
      authority: 'State Education Department',
      amount: '₹15,000 - ₹30,000',
      eligibility: 'Students from SC/ST/OBC categories'
    },
    {
      name: 'National Scholarship Portal',
      authority: 'Government of India',
      amount: 'Varies',
      eligibility: 'Various categories and criteria'
    },
    {
      name: 'Post-Matric Scholarship',
      authority: 'Department of Social Welfare',
      amount: '₹10,000 - ₹25,000',
      eligibility: 'Students from reserved categories'
    }
  ];

  const feeConcessions = [
    'Complete fee waiver for students securing first rank',
    '50% fee concession for students with 90%+ marks',
    '25% fee concession for students with 80%+ marks',
    'Special concessions for children of defense personnel',
    'Sibling discount for multiple children from same family',
    'Alumni children receive special fee concessions'
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mt-8 mb-6">Scholarships & Fee Concessions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Supporting deserving students through various scholarship programs and fee concession schemes
          </p>
        </div>

        {/* College Scholarships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">College Scholarships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scholarships.map((scholarship, index) => {
              const Icon = scholarship.icon;
              const colorClasses: Record<string, string> = {
                blue: 'bg-blue-100 text-blue-900',
                green: 'bg-green-100 text-green-900',
                orange: 'bg-orange-100 text-orange-900',
                purple: 'bg-purple-100 text-purple-900'
              };
              
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colorClasses[scholarship.color]}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">{scholarship.title}</h3>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-yellow-600">{scholarship.amount}</div>
                    <p className="text-xs text-gray-500">Annual Amount</p>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 text-center">{scholarship.eligibility}</p>
                  <div className="text-center">
                    <span className={`px-2 py-1 rounded-full text-xs ${colorClasses[scholarship.color]}`}>
                      {scholarship.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Government Scholarships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Government Scholarships</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-900 text-white px-6 py-4">
              <h3 className="text-xl font-semibold">Available Government Schemes</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {governmentSchemes.map((scheme, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="text-lg font-semibold text-blue-900 mb-1">{scheme.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{scheme.authority}</p>
                      <p className="text-sm text-gray-700">{scheme.eligibility}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{scheme.amount}</div>
                      <p className="text-xs text-gray-500">Amount Range</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fee Concessions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Fee Concessions</h2>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {feeConcessions.map((concession, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-900 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{concession}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-blue-900 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
              <p className="text-blue-200 text-sm">Complete the scholarship application form with required documents</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Document Verification</h3>
              <p className="text-blue-200 text-sm">Scholarship committee reviews applications and verifies documents</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Award Notification</h3>
              <p className="text-blue-200 text-sm">Successful candidates are notified and scholarships are disbursed</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="mb-4">For more information or to apply:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-blue-200">Email: scholarships@anjumancollege.edu.in</p>
              <p className="text-blue-200">Phone: +91 98765 43220</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;