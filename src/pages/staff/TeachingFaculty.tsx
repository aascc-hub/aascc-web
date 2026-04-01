import { Mail, Phone } from 'lucide-react';

const fallbackImage = '/images/avatar.png';

const NonTeachingStaff = () => {
  const staffCategories = [
    {
      category: 'Teaching Staff',
      staff: [
        { name: 'Prof. Mohammed Yusuf Kola', designation: 'Principal', qualification: 'K.SET, B.com, B.Ed, MBA, M.com', email: '', phone: '', image: '/images/Yusuf Kola.png' },
        { name: 'Prof. Mohammad Hibban', designation: 'Vice-Principal', qualification: ' B.Com, MBA, M.Com, (Ph.D)', email: '', phone: '', image: '/images/MOHAMMED-HIBBAN.jpg' },
        { name: 'Mr. Aftab G.M', designation: 'Lecturer in Commerce', qualification: 'M.Com', email: '', phone: '', image: '/images/12.-AFTAB.jpg' },
        { name: 'Mr. Mohammed Ganim Mohtisham', designation: 'S.W.O & Lecturer in Commerce', qualification: 'M.Com', email: '', phone: '', image: '/images/MOHD-GANIM.jpeg' },
        { name: 'Ms. Fathima Famina', designation: 'Lecturer in Economics', qualification: 'M.A. (Economics)', email: '', phone: '', image: '/images/Fathima.png' },
        { name: 'Dr. D. S. Prabhu', designation: 'H.O.D & Assistant Professor in Economics', qualification: 'M.A (Economics), M.Phil, Ph.D', email: '', phone: '', image: '/images/prabu sir.jpg' },
        { name: 'Mr. Radhakrishna Sheta', designation: 'Lecturer in History', qualification: 'M.A (History)', email: '', phone: '', image: '/images/Radhakrishna.jpeg' },
        { name: 'Ms. Pavitra R. Naik', designation: ' Lecturer in Sociology', qualification: 'M.A', email: '', phone: '', image: '/images/Pavitra2.png' },
        { name: 'Mr. K. Kaleemulla', designation: 'Physical Education Director & Rovers Scout Leader', qualification: 'M.P.Ed, M.Phil', email: '', phone: '', image: '/images/Kaleemulla.jpg' },
        { name: 'Prof. Abdul Rehman Muneeb', designation: 'H.O.D & Lecturer in Chemistry', qualification: 'M.Sc, B.Ed', email: '', phone: '', image: '/images/MUNEEB-KADLI.jpeg' },
        { name: 'Mr. Dr. Vinayak Anand Kamat', designation: ' N.C.C Officer & Lecturer in Physics', qualification: 'M.Sc, Ph.D', email: '', phone: '', image: '/images/vinayak.jpeg' },
        { name: 'Mr. B.H. Nadaf', designation: ' Associate Professor in Mathematics', qualification: 'M.Sc, M.Phil', email: '', phone: '', image: '/images/B-H-Nadaf.jpeg' },
        { name: 'Ms. M. Poornima ', designation: ' Lecturer in Botany', qualification: 'M.Sc., B.Ed., KSET', email: '', phone: '', image: '/images/poornima.jpeg' },
        {name: 'Ms. Bibi Noora', designation: 'Lecturer in Botany', qualification: 'M.Sc', email: '', phone: '', image: '/images/Bibi Noora.png'},
        {name: 'Mr.Umesh Mestha', designation: ' H.O.D & Lecturer in Computer Science', qualification: 'MCA, M.A (English), B.Sc, B.Ed,', email: '', phone: '', image: '/images/UMESH-MESTHA.jpeg'},
        {name: 'Mr. Damodar Naik', designation: 'Lecturer in Kannada', qualification: 'M.A (Kannada)', email: '', phone: '', image: '/images/damodar.jpg'},
        {name: 'Ms. Niha', designation: 'Lecturer in Kannada', qualification: 'M.A (Kannada)', email: '', phone: '', image: '/images/Niha.png'},
        {name: 'Ms. Maimun Nisa', designation: 'Lecturer in Mathematics', qualification: 'Msc', email: '', phone: '', image: '/images/maimunnisa.png'},
        {name: 'Mr. Shazeer Hussain', designation: 'H.O.D & Lecturer in English', qualification: 'M.A (English), B.E (CS), B.Ed', email: '', phone: '', image: '/images/Shazeer-Hussain.jpg'},
        {name: 'Mr. Rauoof Ahmed Savanur', designation: 'H.O.D & Lecturer in urdu', qualification: 'M.A (Urdu), SLET, PGDCA', email: '', phone: '', image: '/images/RAUOOF-AHMED-SAVANUR.jpeg'},
        {name: 'Maulana danish Nadvi', designation: ' Lecturer in Arabic', qualification: 'M.A (Arabic),  B.Ed', email: '', phone: '', image: ''},
      ]
    },

  ];

  const totalStaff = staffCategories.reduce((acc, cat) => acc + cat.staff.length, 0);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mt-8 mb-6">Teaching Faculty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated teaching staff who ensure smooth administration, support, and services at Anjuman Arts, Science & Commerce College, Bhatkal
          </p>
        </div>

        {/* Stats */}
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-900 mb-2">{totalStaff}</div>
            <div className="text-gray-600 text-sm">Total Teaching Staff</div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
            <div className="text-gray-600 text-sm">Dedicated to Academic Excellence</div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
            <div className="text-gray-600 text-sm">Academic Performance Rate</div>
          </div>
        </div>


        {/* Staff Sections */}
        {staffCategories.map((cat, idx) => (
          <div key={idx} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mb-4 animate-fade-in-up">{cat.category}</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.staff.map((member, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="relative p-6 pb-0">
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <img src={member.image || fallbackImage} alt={member.name} className="w-full h-full rounded-full  border-4 border-blue-100 shadow-lg transform hover:scale-110 transition-transform duration-300" onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = fallbackImage; }} />
                    </div>
                  </div>

                  <div className="p-6 pt-2 text-center">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                    <p className="text-yellow-600 font-semibold mb-2">{member.designation}</p>
                    {member.qualification && <p className="text-gray-600 text-sm mb-3">{member.qualification}</p>}

                    <div className="border-t border-gray-200 pt-4 space-y-2">
                      {member.email && (
                        <div className="flex items-center justify-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          <a href={`mailto:${member.email}`} className="hover:text-blue-900 transition-colors duration-200 truncate">{member.email}</a>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center justify-center text-sm text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          <a href={`tel:${member.phone}`} className="hover:text-blue-900 transition-colors duration-200">{member.phone}</a>
                        </div>
                      )}
                    </div>


                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Non-Teaching Staff Office Info */}
        <div className="bg-blue-900 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Teaching Staff Office</h2>
          <p className="text-blue-200 mb-6">For Academic and support-related inquiries</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <p className="font-semibold mb-1">Office Email</p>
              <p className="text-blue-200 text-sm">anjumancollegebkl@gmail.com</p>
            </div>
            <div className="text-center">
              <p className="font-semibold mb-1">Office Hours</p>
              <p className="text-blue-200 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
            <div className="text-center">
              <p className="font-semibold mb-1">Phone</p>
              <p className="text-blue-200 text-sm">+91 8385 226 443</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-in-up { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out both; }
      `}</style>
    </div>
  );
};

export default NonTeachingStaff;
