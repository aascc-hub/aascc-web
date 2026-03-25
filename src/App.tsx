import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

// About Pages
import Introduction from './pages/about/Introduction';
import VisionMission from './pages/about/VisionMission';
import Management from './pages/about/Management';
import Objectives from './pages/about/Objectives';
import Plans from './pages/about/Plans';
import Policies from './pages/about/Policies';
import CollegeByelaws from './pages/about/CollegeByelaws';
import Contact from './pages/about/Contact';

// Academics Pages
import ProgramsOffered from './pages/academics/ProgramsOffered';
import HowToApply from './pages/academics/HowToApply';
import AcademicCalendar from './pages/academics/AcademicCalendar';
import AnnualReport2021 from './pages/academics/AnnualReport2021';
import AnnualReport2018 from './pages/academics/AnnualReport2018';
import AnnualReport2017 from './pages/academics/AnnualReport2017';
import AnnualReport2016 from './pages/academics/AnnualReport2016';
import AnnualReport2015 from './pages/academics/AnnualReport2015';
import AnnualReport2014 from './pages/academics/AnnualReport2014';
import AnnualReport2019 from './pages/academics/AnnualReport2019';

// Program Detail Imports 
// (Make sure bba.tsx and bca.tsx exist in your academics folder)

import BComProgramDetail from './pages/academics/bcom';
import BAProgramDetail from './pages/academics/ba';
import BScProgramDetail from './pages/academics/bsc';
import MComProgramDetail from './pages/academics/mcom';
import MAProgramDetail from './pages/academics/ma';

import PrincipalDesk from './pages/staff/PrincipalDesk';
import TeachingFaculty from './pages/staff/TeachingFaculty';
import NonTeachingFaculty from './pages/staff/NonTeachingFaculty';

// Student Corner Pages
import MeritoriousStudents from './pages/students/MeritoriousStudents';
import Scholarships from './pages/students/Scholarships';
import Placements from './pages/students/Placements';

// Events and Gallery
import Eventlist from './pages/events/Eventlist';
import Eventdetails from './pages/events/Eventdetails';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* About Routes */}
            <Route path="/about/introduction" element={<Introduction />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/management" element={<Management />} />
            <Route path="/about/objectives" element={<Objectives />} />
            <Route path="/about/plans" element={<Plans />} />
            <Route path="/about/policies" element={<Policies />} />
            <Route path="/about/college-byelaws" element={<CollegeByelaws />} />
            <Route path="/about/contact" element={<Contact />} />
            
            {/* Academics Routes */}
            <Route path="/academics/programs-offered" element={<ProgramsOffered />} />
            
            {/* Program Details - Matches /academics/programs/abbreviation */}
          
            <Route path="/academics/programs/bcom" element={<BComProgramDetail />} />
            <Route path="/academics/programs/ba" element={<BAProgramDetail />} />
            <Route path="/academics/programs/bsc" element={<BScProgramDetail />} />
            <Route path="/academics/programs/mcom" element={<MComProgramDetail />} />
            <Route path="/academics/programs/ma" element={<MAProgramDetail />} />
            
            <Route path="/academics/how-to-apply" element={<HowToApply />} />
            <Route path="/academics/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/academics/annual-reports/2021-22" element={<AnnualReport2021 />} />
            <Route path="/academics/annual-reports/2018-19" element={<AnnualReport2018 />} />
            <Route path="/academics/annual-reports/2017-18" element={<AnnualReport2017 />} />
            <Route path="/academics/annual-reports/2016-17" element={<AnnualReport2016 />} />
            <Route path="/academics/annual-reports/2015-16" element={<AnnualReport2015 />} />
            <Route path="/academics/annual-reports/2014-15" element={<AnnualReport2014 />} />
            <Route path="/academics/annual-report-2019-20" element={<AnnualReport2019 />} />

            {/* Staff Routes */}
            <Route path="/staff/principal-desk" element={<PrincipalDesk />} />
            <Route path="/staff/teaching-faculty" element={<TeachingFaculty />} />
            <Route path="/staff/non-teaching-faculty" element={<NonTeachingFaculty />} />
            
            {/* Student Corner Routes */}
            <Route path="/students/meritorious-students" element={<MeritoriousStudents />} />
            <Route path="/students/scholarships" element={<Scholarships />} />
            <Route path="/students/placements" element={<Placements />} />

            {/* Events and Gallery Routes */}
            <Route path="/events" element={<Eventlist />} />
            <Route path="/events/:id" element={<Eventdetails />} />
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;