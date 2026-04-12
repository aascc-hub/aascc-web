import { allEvents } from '../data/events';
import { Users, Award, Trophy, BookOpen } from 'lucide-react';


import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import AnnouncementsSection from '../components/home/AnnouncementsSection';
import EventsSection from '../components/home/EventsSection';
import AdmissionBanners from '../components/AdmissionBanners';
import GallerySection from '../components/home/GallerySection';
import ProgramsSection from '../components/home/ProgramsSection';
import BannerSection from '../components/home/BannerSection';
// import TestimonialsSection from '../components/home/TestimonialsSection';
import PlacementsSection from '../components/home/PlacementsSection';   
import StaffSection from '../components/home/StaffSection';

const HomePage = () => {

  const slides = [
    {
      image: '/images/clg2.png',
      title: 'Anjuman Arts, Science & Commerce College, Bhatkal',
      subtitle: 'Excellence in Education Since 1968',
      description: 'Empowering students through quality education and holistic development'
    },
   

     {
      image: '/images/principal.jpg',
      title: 'Principal Of AASCC',
      subtitle: 'State-of-the-art Infrastructure',
      description: 'World-class laboratories, libraries, and recreational facilities'
    },
    {
      image: '/images/green.jpg',
      title: 'Modern Campus Facilities',
      subtitle: 'State-of-the-art Infrastructure',
      description: 'World-class laboratories, libraries, and recreational facilities'
    },
    {
      image: '/images/C5.jpeg',
      title: 'Modern Campus Facilities',
      subtitle: 'State-of-the-art Infrastructure',
      description: 'World-class laboratories, libraries, and recreational facilities'
    },
    {
      image: '/images/ground.jpg',
      title: 'Modern Campus Facilities',
      subtitle: 'State-of-the-art Infrastructure',
      description: 'World-class laboratories, libraries, and recreational facilities'
    },
    {
      image: '/images/liabrary1.jpg',
      title: 'Modern Campus Facilities',
      subtitle: 'State-of-the-art Infrastructure',
      description: 'World-class laboratories, libraries, and recreational facilities'
    },
    {
      image: '/images/lab.jpeg',
      title: 'Modern Campus Facilities',
      subtitle: 'State-of-the-art Infrastructure',
      description: 'World-class laboratories, libraries, and recreational facilities'
    },
    {
      image: '/images/ut2.jpg',
      title: 'Research & Innovation',
      subtitle: 'Advancing Knowledge',
      description: 'Cutting-edge research programs and innovative academic initiatives'
    },
    
  ];

  const announcements = [
    { date: '2024-01-15', title: 'Admission Open for Academic Year 2026-27', type: 'admission' },
    { date: '2024-01-10', title: 'Annual Sports Meet - February 2025', type: 'event' },
    { date: '2024-01-08', title: 'Mid-term Examination Schedule Released', type: 'academic' },
    { date: '2024-01-05', title: 'Research Conference on Sustainability', type: 'research' },
    { date: '2024-01-02', title: 'Library Extended Hours During Exams', type: 'facility' }
  ];



  const campusHighlights = [
    {
      image: '/images/clg2.png',
      title: 'Modern Building',
      description: 'State-of-the-art academic buildings'
    },
    {
      image: '/images/liabrary1.jpg',
      title: 'Library',
      description: 'Well-equipped digital library'
    },
    {
      image: '/images/Computer-Science-Lab-PG.jpeg',
      title: 'Computer Lab',
      description: 'Advanced computer laboratories'
    },
    {
      image: '/images/diractions.jpg',
      title: 'Directions',
      description: 'Clear campus navigation and directions'
    },
    {
      image: '/images/garden.jpg',
      title: 'Garden',
      description: 'beautiful and serene garden for relaxation and outdoor activities'
    },
    
    {
      image: '/images/m2.jpg',
      title: 'Masjid',
      description: 'Beautiful and serene prayer space for the campus community'
    },
    {
      image: '/images/turf.jpg',
      title: 'Turf Ground',
      description: 'Well-maintained football field for sports activities'
    },
    {
      image: '/images/liabrary counter.jpg',
      title: 'Library Counter',
      description: 'Modern and efficient library counter for student services'
    },
    
  ];



  const featuredPrograms = [
    {
      title: 'Bachelor of COmmerce',
      abbreviation: 'B.Com',
      description: 'Comprehensive commerce education with practical business insights',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '3 Years',
      seats: '120'
    },
    {
      title: 'Bachelor In Arts',
      abbreviation: 'B.A.',
      description: 'Diverse programs in humanities and social sciences to foster critical thinking',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '3 Years',
      seats: '100'
    },
    {
      title: 'Bachelor of Science',
      abbreviation: 'B.Sc',
      description: 'In-depth science programs with hands-on laboratory experience',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '3 Years',
      seats: '100'
    },
    {
      title: 'Master of Commerce',
      abbreviation: 'M.Com',
      description: 'Advanced studies in commerce and finance for career growth',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '3 Years',
      seats: '100'
    },
    {
      title: 'Master of Arts',
      abbreviation: 'M.A',
      description: 'Graduate programs in arts and social sciences for deeper understanding',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '3 Years',
      seats: '100'
    },
    
  ];


  // const testimonials = [
  //   {
  //     name: 'Priya Sharma',
  //     batch: 'Class of 2023',
  //     course: 'B.Sc. Computer Science',
  //     image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  //     quote: 'AASCC  provided me with excellent opportunities to grow both academically and personally. The faculty is supportive and the campus life is vibrant.'
  //   },
  //   {
  //     name: 'Rahul Khan',
  //     batch: 'Class of 2022',
  //     course: 'B.Com',
  //     image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  //     quote: 'The practical approach to learning and industry connections helped me secure a great job right after graduation. Grateful to be an Anjuman alumni.'
  //   },
  //   {
  //     name: 'Ananya Desai',
  //     batch: 'Class of 2023',
  //     course: 'B.A. English',
  //     image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  //     quote: 'The diverse cultural environment and quality education at AASCC shaped my perspective and prepared me for the global world.'
  //   },
  //   {
  //     name: 'Vikram Singh',
  //     batch: 'Class of 2024',
  //     course: 'B.Com',
  //     image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  //     quote: 'The B.Com program equipped me with business acumen and networking skills. I landed my dream job at a top MNC before graduation.'
  //   },
  //   {
  //     name: 'Sakshi Patel',
  //     batch: 'Class of 2023',
  //     course: 'B.Com',
  //     image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  //     quote: 'Empowering Tomorrows Business Leaders'
  //   }
  // ];

  const placedStudents = [
    { name: 'Amit Kumar', company: 'Toyota', package: '₹4.5 LPA', image: 'images/Abdul hasan.jpg' },
    { name: 'Sayed Abubakkar', company: 'Infosys', package: '₹5.2 LPA', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Chandrika NAgappa Gond', company: 'Department Of Posts', package: '₹4.8 LPA', image: 'images/Chandrika.jpg' },
    { name: 'Ganpati Rama Naik', company: 'Sagility', package: '₹6.0 LPA', image: 'images/ganpati.jpg' },
    { name: 'Santosh Kharvi', company: 'Startek', package: '₹5.5 LPA', image: 'images/santosh.jpg' },
    { name: 'Satish J', company: 'Aragen Life Sciences Ltd', package: '₹4.7 LPA', image: 'images/satish j.jpg' },
    { name: 'Subramanya Rama Naik', company: 'Axis Bank', package: '₹5.0 LPA', image: 'images/subramanya.jpg' },
    { name: 'Parveen Manjappa Naik', company: 'Aron Universal', package: '₹5.8 LPA', image: 'images/parveen.jpg' }
  ];

  const recruitingCompanies = [
    { name: 'TCS', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
    { name: 'Infosys', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
    { name: 'Wipro', logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
    { name: 'Accenture', logo: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
    { name: 'Cognizant', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
    { name: 'Tech Mahindra', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
    { name: 'HCL', logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
    { name: 'Capgemini', logo: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' }
  ];



  const stats = [
    { number: '500+', label: 'Students Enrolled', icon: Users },
    { number: '55+', label: 'Years of Excellence', icon: Award },
    { number: '18', label: 'University Toppers', icon: Trophy },
    { number: '23+', label: 'Faculty Members', icon: BookOpen }
  ];

  const staff = [
    // Teaching Staff (16 members)
    {
      name: 'Prof. Mohammed Yusuf Kola',
      role: 'Principal',
      department: 'Teaching Staff',
      image: '/images/principal.jpg'
    },
    {
      name: 'Mr. Mohammad Hibban',
      role: 'Vice-Principal',
      department: 'Teaching Staff',
      image: '/images/MOHAMMED-HIBBAN.jpg'
    },
    {
      name: 'Mr. Aftab G.M',
      role: 'Lecturer in Commerce',
      department: 'Teaching Staff',
      image: '/images/12.-AFTAB.jpg'
    },
    {
      name: 'Mr.Mohammed Ganim Mohtisham',
      role: 'S.W.O & Lecturer in Commerce',
      department: 'Teaching Staff',
      image: '/images/MOHD-GANIM.jpeg'
    },
    {
      name: 'Ms. Fathima Famina',
      role: 'Lecturer in Economics',
      department: 'Teaching Staff',
      image: ''
    },
    {
      name: 'Dr. D. S. Prabhu',
      role: 'H.O.D & Assistant Professor in Economics',
      department: 'Teaching Staff',
      image: '/images/prabu sir.jpg'
    },
    {
      name: 'Mr. Radhakrishna Shet',
      role: 'Lecturer in History',
      department: 'Teaching Staff',
      image: '/images/Radhakrishna.jpeg'
    },
    {
      name: 'Ms. Pavitra R. Naik',
      role: 'Lecturer in Sociology',
      department: 'Teaching Staff',
      image: '/images/Pavitra-R-Naik.jpeg'
    },
    {
      name: 'Mr. K. Kaleemulla',
      role: 'Physical Education Director & Rovers Scout Leader',
      department: 'Teaching Staff',
      image: '/images/Kaleemulla.jpg'
    },
    {
      name: 'Prof. Abdul Rehman Muneeb',
      role: 'H.O.D & Lecturer in Chemistry',
      department: 'Teaching Staff',
      image: '/images/MUNEEB-KADLI.jpeg'
    },
    {
      name: 'Dr. Vinayak Anand Kamat',
      role: 'H.O.D & Lecturer in Physics',
      department: 'Teaching Staff',
      image: '/images/vinayak.jpeg'
    },
    {
      name: 'Mr. B.H. Nadaf',
      role: 'Associate Professor in Mathematics',
      department: 'Teaching Staff',
      image: '/images/B-H-Nadaf.jpeg'
    },
    {
      name: 'Mrs. M. Poornima',
      role: 'Lecturer in Botany',
      department: 'Teaching Staff',
      image: '/images/poornima.jpeg'
    },
    {
      name: 'Ms. Bibi Noora ',
      role: 'Lecturer in Botany ',
      department: 'Teaching Staff',
      image: ''
    },
    {
      name: 'Mr.Umesh Mestha',
      role: 'H.O.D & Lecturer in Computer Science',
      department: 'Teaching Staff',
      image: '/images/UMESH-MESTHA.jpeg'
    },
     {
      name: 'Mr. Damodar Naik',
      role: 'Lecturer in Kannada',
      department: 'Teaching Staff',
      image: '/images/damodar.jpg'
    },
     {
      name: 'Mrs. Niha',
      role: 'Lecturer in Kannada',
      department: 'Teaching Staff',
      image: ''
    },
     {
      name: 'Mr. Shazeer Hussain',
      role: 'Web Developer, H.O.D & Lecturer in English',
      department: 'Teaching Staff',
      image: '/images/Shazeer-Hussain.jpg'
    },
     {
      name: 'Mr. Rauoof Ahmed Savanur',
      role: 'H.O.D & Lecturer in Urdu',
      department: 'Teaching Staff',
      image: '/images/RAUOOF-AHMED-SAVANUR.jpeg'
    },
     {
      name: 'Maulana danish Nadvi',
      role: ' Lecturer in Arabic',
      department: 'Teaching Staff',
      image: ''
    },

    // Non-Teaching Staff (6 members)
    {
      name: 'Mr. Jayadeep Shinde',
      role: 'S.D.A',
      department: 'Non-Teaching Staff',
      image: '/images/Jayadeep.jpeg'
    },
    {
      name: 'Mr. Vinod Shetty',
      role: 'F.D.A',
      department: 'Non-Teaching Staff',
      image: '/images/Vinod-Shetty.jpg'
    },
    {
      name: 'Mr. Mohammed Muzammil',
      role: 'S.D.A',
      department: 'Non-Teaching Staff',
      image: '/images/Muzammil.jpg'
    },
    {
      name: 'Mr. Mohammed Zayan',
      role: 'Accountant',
      department: 'Non-Teaching Staff',
      image: '/images/Mohammed-Zayan.jpeg'
    },
    {
      name: 'Mr. Afzal G. Jamadar',
      role: 'Librarian',
      department: 'Non-Teaching Staff',
      image: '/images/Afzal-G-Jamadar.jpeg'
    },
    {
      name: 'Mr.Mohammad Saleem',
      role: 'Attender',
      department: 'Non-Teaching Staff',
      image: '/images/Mohammed-Saleem.jpeg'
    },
    {
      name: 'Mr.A. A. Mulla',
      role: 'Attender',
      department: 'Non-Teaching Staff',
      image: '/images/Mulla.jpg'
    },
    {
      name: 'Mr.Maqbool Ahmed',
      role: 'Peon',
      department: 'Non-Teaching Staff',
      image: '/images/Maqbool.jpeg'
    },
    {
      name: 'Mr.Fakhruddin',
      role: 'Gardner',
      department: 'Non-Teaching Staff',
      image: '/images/Fakhruddin.jpeg'
    }
  ];







 return (
    <div className="min-h-screen">
      {/* 1. Top of Page */}
      <HeroSection slides={slides} />
       <StatsSection stats={stats} />
      
      
      {/* 2. Key Information */}
       <AdmissionBanners /> 
      <AnnouncementsSection announcements={announcements} />
      <EventsSection allEvents={allEvents} />

      {/* 3. Visuals & Content */}
      <BannerSection />
      <GallerySection campusHighlights={campusHighlights} />
      <ProgramsSection featuredPrograms={featuredPrograms} />

      {/* 4. Social Proof & Faculty */}
      {/* <TestimonialsSection testimonials={testimonials} /> */}
      <PlacementsSection 
        placedStudents={placedStudents} 
        recruitingCompanies={recruitingCompanies}  
      />
      <StaffSection staff={staff} />
    </div>
  );
};
export default HomePage;