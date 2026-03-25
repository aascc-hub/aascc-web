
import { Award, Trophy, Star, ExternalLink } from 'lucide-react';

const MeritoriousStudents = () => {

  // --- DATA SECTIONS ---

  const universityRanks = [
    { rank: 1, studentName: 'Mr. Mohammed Sameh', department: 'B.com', marks: '95%', year: '2019-20', fatherName: '' },
    { rank: 2, studentName: 'Mr. Janardhan Somayya Gond', department: 'Bsc', marks: '88%', year: '2019-20', fatherName: '' },
    { rank: 3, studentName: 'Mr. Hareesh Manjunatha Gond', department: 'BA', marks: '81%', year: '2019-20', fatherName: '' },
    { rank: 1, studentName: 'Mr. Mohammed Sameh', department: 'Bcom', marks: '91%', year: '2018-19', fatherName: '' },
    { rank: 3, studentName: 'Mr. Ganesh Manjunatha Naik', department: 'BA', marks: '81%', year: '2018-19', fatherName: '' },
    { rank: 2, studentName: 'Mr. Janardhan Somayya Gond', department: 'Bsc', marks: '92.22%', year: '2017-18', fatherName: '' },
    { rank: 1, studentName: 'Miss. Ramya Subray Naik', department: 'M.com', marks: '73.60%', year: '2020-21', fatherName: '' },
    { rank: 2, studentName: 'Miss. Niha', department: 'M.A', marks: '80%', year: '2020-21', fatherName: '' },
  ].sort((a, b) => b.year.localeCompare(a.year));

  const sportsAchievements = [
    { name: 'Mohammad Aquib', sport: 'Volleyball', details: 'Karnatak University Blue Player (2008-2011)' },
    { name: 'Abdul Basith Muallim', sport: 'Athletics (Javelin)', details: 'B.Com 6th Sem, Gold Medalist & All India Inter-University Player (2010-11)' },
    { name: 'Prashanth Prabhu K.', sport: 'Table Tennis', details: 'B.Com 4th Sem, Karnatak University Blue Player (2012-13)' },
    { name: 'Mohammad Mohtisim', sport: 'Cricket', details: 'B.Com 6th Sem, Karnatak University Blue Player (2013-14)' },
    { name: 'Mohammad Haneef J.', sport: 'Football', details: 'B.Com 2nd Sem, Karnatak University Blue Player (2014-15)' },
    { name: 'Abrar Hassan', sport: 'Football', details: 'B.Com 2nd Sem, Karnatak University Blue Player (2014-15)' },
    { name: 'Fayeez Ahmed', sport: 'Football', details: 'B.Com 2nd Sem, Karnatak University Blue Player (2014-15)' },
    { name: 'Syed Abdul Badee', sport: 'Athletics (Hammer Throw)', details: 'B.Com 4th Sem, Gold Medalist & NMR record holder (44.88m) (2015-16)' },
    { name: 'Mohammad Jasim', sport: 'Badminton', details: 'B.Com 6th Sem, Karnatak University Blue (2015-16)' },
    { name: 'Mohammad Salah', sport: 'Swimming', details: 'B.Com 6th Sem, Silver Medalist in 100m Back Stroke (2015-16)' },
    { name: 'Mohammed Mutie Ajaib', sport: 'Athletics Pole-Vault', details: 'Gold Medalist, KUD Inter-Collegiate (2009-2011)' }
  ];

  // const culturalAchievements = [
  //   { rank: 1, name: 'Sneha Patel', event: 'Dance Competition', level: 'National Level Winner', prize: 'First Prize', year: '2023' },
  //   { rank: 2, name: 'Vikram Rao', event: 'Debate Competition', level: 'State Level Runner-up', prize: 'Second Prize', year: '2023' },
  //   { rank: 3, name: 'Meera Joshi', event: 'Singing Competition', level: 'Inter-College Winner', prize: 'Third Prize', year: '2023' }
  // ];

  // --- HELPER FUNCTIONS ---

  const getRankBadge = (rank: number) => {
    if (rank === 1) return 'bg-yellow-500 text-blue-900';
    if (rank === 2) return 'bg-gray-400 text-white';
    if (rank === 3) return 'bg-orange-400 text-white';
    return 'bg-blue-500 text-white';
  };

  // const getPrizeColor = (rank: number) => {
  //   if (rank === 1) return 'text-green-600';
  //   if (rank === 2) return 'text-gray-600';
  //   if (rank === 3) return 'text-orange-600';
  //   return 'text-blue-600';
  // };

  const categories = [
    { title: 'Academic Excellence', icon: Award, description: 'Outstanding academic performance', count: universityRanks.length },
    { title: 'Sports Achievements', icon: Trophy, description: 'Excellence in sports and athletics', count: new Set(sportsAchievements.map(s => s.name)).size },
    // { title: 'Cultural Activities', icon: Star, description: 'Exceptional cultural contributions', count: culturalAchievements.length }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mt-8 mb-6">Meritorious Students</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating the achievements of our outstanding students who have excelled in academics, sports, and cultural activities.
          </p>
        </div>

        {/* Achievement Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{category.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{category.description}</p>
                <div className="text-3xl font-black text-yellow-600">{category.count}</div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Awardees</p>
              </div>
            );
          })}
        </div>

        {/* University Ranks */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">University Ranks</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="divide-y divide-gray-100">
              {universityRanks.map((student, index) => (
                <div key={index} className="p-6 flex flex-col sm:flex-row items-center justify-between hover:bg-blue-50/30 transition-colors">
                  <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-black shadow-sm ${getRankBadge(student.rank)}`}>
                      #{student.rank}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">{student.studentName}</h3>
                      {student.fatherName && <p className="text-gray-500 text-sm">{student.fatherName}</p>}
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">{student.department}</p>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <div className="text-2xl font-black text-yellow-600">{student.marks}</div>
                    <p className="text-sm font-medium text-gray-400">{student.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sports Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Sports Achievements</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {sportsAchievements.map((item, index) => (
                <div key={index} className="group p-4 rounded-lg border-l-4 border-blue-900 bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">{item.name}</h3>
                  <p className="text-blue-600 font-bold text-sm mb-2">{item.sport}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.details}</p>
                </div>
              ))}
            </div>

            {/* Special Highlights Section */}
            <div className="bg-blue-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={20} /> Historical Records
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-yellow-500 pl-4">
                  <p className="font-bold text-yellow-400">Football Selection (2014-15)</p>
                  <p className="text-sm opacity-90">Haneef J, Abrar Hassan, and Fayaz Ahmed were the first from Bhatkal Taluka to have three players selected for the KUD team in a single year.</p>
                </div>
                <div className="border-l-2 border-yellow-500 pl-4">
                  <p className="font-bold text-yellow-400">Hammer Throw Record (2015-16)</p>
                  <p className="text-sm opacity-90">Syed Abdul Badee (B.Com 4th Sem) created history with a New Meet Record (NMR) of 44.88 meters.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="/NAAC_PPT_2008-2016.pptx" target="_blank" className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-blue-200 transition-colors">
              FOR MORE INFORMATION CLICK HERE <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Cultural Events Achievements */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Cultural Events Achievements</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="space-y-6">
              {culturalAchievements.map((achievement, index) => (
                <div key={index} className={`flex flex-col sm:flex-row items-center justify-between py-6 ${index < culturalAchievements.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full font-black ${getRankBadge(achievement.rank)}`}>
                      #{achievement.rank}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">{achievement.name}</h3>
                      <p className="text-gray-600 font-medium">{achievement.event}</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">{achievement.level}</p>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <div className={`text-xl font-black ${getPrizeColor(achievement.rank)}`}>{achievement.prize}</div>
                    <p className="text-sm font-bold text-gray-400">{achievement.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Recognition Programs Summary */}
        <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 shadow-inner">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Recognition & Honors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <Award className="text-yellow-600" /> Merit Awards
              </h3>
              <ul className="space-y-4">
                {['Gold Medal for University Topper', 'Silver Medal for College Topper', 'Bronze Medal for Department Topper', 'Merit Certificates for Outstanding Performance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <Star className="text-blue-600" /> Special Recognition
              </h3>
              <ul className="space-y-4">
                {['Best All-Round Student Award', 'Leadership Excellence Award', 'Community Service Recognition', 'Innovation and Creativity Award'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MeritoriousStudents;