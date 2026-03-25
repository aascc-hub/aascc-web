import { Award, Users, BookOpen, Target } from 'lucide-react';

const Introduction = () => {
  const milestones = [
    { year: '1968', title: 'Foundation', description: 'Anjuman Arts, Science, and Commerce College was established with the aim of providing high-quality management education.' },
    { year: '2005', title: 'Accreditation', description: 'Awarded NAAC accreditation with Grade A' },
    { year: '2020', title: 'Digital Initiative', description: 'Launched comprehensive digital learning platform' }
  ];

  const highlights = [
    {
      icon: Users,
      title: 'Diverse Community',
      description: 'Students from various cultural and socioeconomic backgrounds'
    },
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum aligned with industry standards'
    },
    {
      icon: Award,
      title: 'Quality Education',
      description: 'Committed to maintaining high academic standards'
    },
    {
      icon: Target,
      title: 'Future Ready',
      description: 'Preparing students for the challenges of tomorrow'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mt-8 mb-6">About Our College</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            It is inspiring to see the rich legacy of Anjuman Arts, Science, and Commerce College. Since its inception in 1968, it has clearly evolved from a pioneer in local education into a comprehensive hub for higher learning.

            To enhance your description, I have added more detail regarding the campus atmosphere, the academic environment, and the institutional values.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img
            src="/images/clg2.png"
            alt="AASCC Campus"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Introduction Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A Legacy of Excellence and Natural Splendor
                Situated atop a picturesque hillock of the Western Ghats, the college offers a breathtaking view where the lush greenery of the forest meets the vast expanse of the Arabian Sea. This sylvan environment provides a serene and contemplative atmosphere, far from the distractions of city life, making it a "sight of unique nature" and an ideal sanctuary for academic pursuit.

                Established in 1968 as the first institution of its kind in the region, the college has grown from a modest Arts college into a prestigious multi-disciplinary center. Today, it stands as a full-fledged degree college and a recognized Post-Graduate Centre, offering advanced studies in Commerce, Economics, Kannada, and Urdu.
              </p>
              <p>
                Institutional Governance and Values
                Managed by the Anjuman Hami-e-Muslimeen, the institution operates under the protections of Articles 29 and 30 of the Indian Constitution, ensuring the preservation of minority rights and educational autonomy. The college is dedicated to fostering an inclusive environment that respects cultural heritage while pursuing modern academic standards
              </p>
              <p>
                As the college enters its 56th academic session, it remains committed to the "Vision and Mission" of its founders. Students are encouraged to look beyond the classroom and engage with:

                NCC & NSS: Building discipline, leadership, and a spirit of national service.

                Library & Research: Utilizing extensive resources to foster intellectual curiosity.

                Sports & Extra-Curriculars: Developing physical well-being and teamwork.

                Student Conduct and Harmony
                Success at Anjuman is built on a foundation of discipline and mutual respect. Students are expected to uphold the unity and harmony of the campus, ensuring that their words and actions contribute to a peaceful learning environment. By combining determination with the college's state-of-the-art facilities, students are empowered to transform their aspirations into reality.
              </p>
              <p>
                "Education is the most powerful weapon which you can use to change the world."
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Commitment</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Anjuman Arts Sc Com We are committed to providing a high-quality academic experience that blends traditional values with modern learning. Our focus is on delivering a rigorous curriculum in Arts, Science, and Commerce that prepares students for the competitive global market. By fostering a culture of research and critical thinking, we ensure our graduates are equipped with the expertise and analytical skills needed to excel in their professional careers and higher education.
              </p>
              <p>
                Our commitment extends beyond the classroom to the complete development of every student’s personality. We provide a vibrant environment where extracurricular activities, sports, and leadership opportunities allow students to discover their true potential. By balancing academic life with personal growth, we nurture confident, resilient individuals who are ready to take on real-world challenges with a creative and innovative mindset.
              </p>
              <p>
                Rooted in a legacy of service, we are dedicated to building character and a deep sense of social responsibility. We instill ethical values and a spirit of inclusivity in our students, encouraging them to become compassionate citizens who contribute to the betterment of society. At Anjuman, we believe that education is most powerful when guided by integrity, helping our students lead lives of purpose and honor
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Why Choose Anjuman Arts, Science & Commerce College</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>


        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6 p-6 bg-white rounded-lg shadow-lg">
                <div className="bg-yellow-500 text-blue-900 font-bold text-xl px-4 py-2 rounded-lg min-w-fit">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-900 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-blue-200">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">30+</div>
              <div className="text-blue-200">Faculty</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">25+</div>
              <div className="text-blue-200">Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">58</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;