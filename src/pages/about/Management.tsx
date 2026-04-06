
const Management = () => {
  const officeBearers = [
    { name: 'Janab Yunus Kazia', title: 'President', image: 'https://www.anjumancollege.in/wp-content/uploads/2024/06/President-Yunus-Kazia.jpg' },
    { name: 'Janab Mohammed Sadique Pilloor', title: 'Vice President I', image: '/images/sadique.jpg' },
    { name: 'Janab Dr. Mohammed Zubair Kola', title: 'Vice President II', image: '/images/Zubair_kola.jpg' },
    { name: 'Janab Mohammed Ishaque Shabandri', title: 'General Secretary', image: '/images/Ishaq_shabandri.jpg' },
    { name: 'Janab Mohammed Ismail Jukaku', title: 'Additional General Secretary', image: '/images/Ismail_Jukaku.jpg' },
    { name: 'Janab Syed Ahmed Parvez S.M', title: 'Finance Secretary', image: 'https://www.anjumancollege.in/wp-content/uploads/2024/06/Finance-Secretary-Syed-Ahmed-Parvez-S.M.jpg' },
    { name: 'Janab Syed Hashim S J', title: 'Works Committee Secretary', image: '/images/hashim.jpg' },
    { name: 'Janab Mohammed Ansar Damda Abu', title: 'Secretary, IT, AITM BOARD', image: '/images/ansar-damdaabu.jpg' },
    { name: 'Janab Mohammed Aheed Mohtesham', title: 'Secretary', image: '/images/Aheed_mohtesham.jpg' },
    { name: 'Janab Faiyaz Ahmed Kola', title: 'Secretary, Degree & PU College Board', image: '/images/FAIYAZ.jpg' },
    { name: 'Janab Sadullah Ruknuddin', title: 'Secretary, High School Board', image: '/images/Sadullah.jpg' },
    { name: 'Janab Abdul Hameed Athar Ruknuddin', title: 'Secretary, Deenyath Board', image: '/images/Athar.jpg' },
    { name: 'Janab Imtiyaz Hussain Ruknuddin', title: 'Member', image: '' },
    { name: 'Janab Mohammed Meeran Ismailji', title: 'Member', image: '' },
    { name: 'Janab Mohammed Mubasshir Hussain', title: 'Member', image: '' },
    { name: 'Janab Mr.Rameez Kola', title: 'Member', image: 'https://www.anjumancollege.in/wp-content/uploads/2024/06/Member-Mr.Rameez-Kola.jpg' },
    { name: 'Janab Shahriyar Ahmed Khateeb', title: 'Member', image: '' },
    { name: 'Janab Ashfaque Sada', title: 'Member', image: '' },
    { name: 'Janab Mohammed Ammar Kazia', title: 'Member', image: '' },
    { name: 'Janab Mohammed Yusuf Kola', title: 'Principal', image: '/images/principal.jpg' },
    { name: 'Janab Mohammed Hiban', title: 'Vice-Principal', image: '/images/MOHAMMED-HIBBAN.jpg' },

  ];

  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mt-8 mb-6">Office Bearers (2024-2028)</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Meet the dedicated leaders of Anjuman Hami-e-Muslimeen
        </p>
      </div>

      {/* Office Bearers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {officeBearers.map((member, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative p-6 pb-0">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <img
                  src={member.image || '/images/avatar.png'}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-blue-100 shadow-lg transform hover:scale-110 transition-transform duration-300"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = '/images/avatar.png'; }}
                />
              </div>
            </div>
            <div className="p-6 pt-2 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
              <p className="text-yellow-600 font-semibold">{member.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Organizational Structure */}
      <div className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Organizational Structure</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Board */}
          <div className="text-center mb-8">
            <div className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg mb-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="font-bold">Board of Trustees</h3>
              <p className="text-sm text-blue-200">Governance & Strategy</p>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-px h-8 bg-gray-400"></div>
          </div>

          {/* Principal */}
          <div className="text-center mb-8">
            <div className="inline-block bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg mb-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="font-bold">Principal</h3>
              <p className="text-sm">Executive Leadership</p>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-px h-8 bg-gray-400"></div>
          </div>

          {/* Vice Principal */}
          <div className="text-center">
            <div className="inline-block bg-blue-100 px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h4 className="font-semibold text-blue-900">Vice Principal</h4>
              <p className="text-sm text-gray-600">Leadership Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
