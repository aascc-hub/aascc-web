import { Quote } from 'lucide-react';

const PrincipalDesk = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mt-8 mb-6">Principal's Desk</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A message from our Principal about the vision, values, and commitment to excellence at Anjuman Arts, Science & Commerce College, Bhatkal
          </p>
        </div>

        {/* Principal's Profile */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Principal's Photo */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/images/principal.jpg" 
                  alt="Mohammad Yusuf kola" 
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-900 mb-2">Prof. Muhammad Yusuf Kola</h2>
                  <p className="text-yellow-600 font-semibold mb-4">Principal</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-semibold">Education:</span> KSET B.com, B.Ed, M.B.A (HR), M.Com</p>
                    <p><span className="font-semibold">Experience:</span> 15+ years in Academia</p>
                    <p><span className="font-semibold">Phone No:</span> +91 80735 94532</p>
                    {/* <p><span className="font-semibold">Email:</span> kmmohsin@anjuman.edu.in</p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Principal's Message */}
            <div className="lg:col-span-2">
              <div className="bg-blue-900 text-white rounded-lg p-8 h-full flex flex-col justify-center">
                <Quote className="h-12 w-12 text-yellow-500 mb-6" />
                <blockquote className="text-lg leading-relaxed mb-6 italic">
                  "Education is not just about imparting knowledge; it's about igniting minds, fostering creativity, 
                  and building character. At Anjuman Arts, Science & Commerce College, Bhatkal, we are committed to nurturing not just successful 
                  professionals, but responsible citizens who will contribute meaningfully to society."
                </blockquote>
                <p className="text-yellow-400 font-semibold">- Prof. Muhammad Yusuf Kola</p>
              </div>
            </div>
          </div>

          {/* Detailed Message */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Message from the Principal</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Dear Students, Faculty, and Well-wishers,
              </p>
              
              <p className="mb-6">
                It gives me immense pleasure to welcome you to Anjuman Arts, Science & Commerce College, Bhatkal, an institution that has been 
                at the forefront of quality education for over six decades. Our journey, which began in 1968, 
                has been marked by continuous growth, innovation, and unwavering commitment to academic excellence.
              </p>
              
              <p className="mb-6">
                In today's rapidly evolving world, education must go beyond traditional boundaries. At Anjuman Arts, Science & Commerce College, Bhatkal
                we believe in holistic development that encompasses not only academic prowess but also critical thinking, 
                ethical values, and social responsibility. Our curriculum is designed to meet contemporary challenges 
                while preserving the timeless values that form the foundation of good character.
              </p>
              
              <p className="mb-6">
                Our distinguished faculty members are not just teachers but mentors, guides, and inspirers. They bring 
                years of experience, research expertise, and genuine care for student development. Together, we create 
                an environment where students can explore their potential, pursue their passions, and prepare for 
                meaningful careers.
              </p>
              
              <p className="mb-6">
                The diversity of our student body is one of our greatest strengths. Students from various cultural, 
                economic, and geographical backgrounds come together to create a vibrant learning community. This 
                diversity enriches the educational experience and prepares our students for success in an 
                interconnected global society.
              </p>
              
              <p className="mb-6">
                As we look toward the future, we remain committed to innovation in education. We continuously update 
                our teaching methodologies, incorporate technology meaningfully, and create opportunities for 
                experiential learning. Our goal is to ensure that every graduate leaves our institution with the 
                knowledge, skills, and confidence to make a positive impact in their chosen field.
              </p>
              
              <p className="mb-6">
                I encourage all our students to make the most of their time atAnjuman Arts, Science & Commerce College, Bhatkal. Engage actively in 
                classroom discussions, participate in co-curricular activities, build meaningful relationships with 
                peers and faculty, and never hesitate to seek guidance when needed. Remember, education is a 
                collaborative journey, and we are here to support you every step of the way.
              </p>
              
              <p className="mb-6">
                To our faculty and staff, I express my gratitude for their dedication and professionalism. To our 
                alumni, thank you for being our ambassadors and for your continued support. To the parents and 
                guardians, we value your trust and partnership in shaping young minds.
              </p>
              
              <p>
                Together, let us continue building on the legacy of excellence that defines Anjuman Arts, Science & Commerce College, Bhatkal. 
                I wish you all success in your endeavors and look forward to celebrating your achievements.
              </p>
              
              <div className="mt-8 text-right">
                <p className="font-semibold">Warm regards,</p>
                <p className="text-blue-900 font-bold text-lg mt-2">Prof. Muhammad Yusuf Kola</p>
                <p className="text-gray-600">Principal, Anjuman Arts, Science & Commerce College, Bhatkal </p>
              </div>
            </div>
          </div>

          {/* Achievements and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Principal's Vision</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Foster an environment of academic excellence and innovation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Promote inclusive education that celebrates diversity</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Strengthen industry-academia partnerships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Develop globally competent and socially responsible graduates</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Enhance research culture and innovation ecosystem</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Key Achievements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>NAAC Grade A accreditation maintained</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>95% placement rate in recent years</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Launch of new skill-based programs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Strengthened alumni engagement initiatives</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Enhanced digital infrastructure for learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDesk;