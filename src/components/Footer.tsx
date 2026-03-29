import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, PhoneCall, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about/introduction' },
    { name: 'Academics', path: '/academics/programs-offered' },
    { name: 'Admissions', path: '/academics/how-to-apply' },
    { name: 'Faculty', path: '/staff/teaching-faculty' },
    { name: 'Campus Life', path: '/students/events-2022' },
    { name: 'Contact', path: '/about/contact' }
  ];

  const academicLinks = [
    { name: 'Undergraduate Programs', path: '/academics/programs-offered' },
    { name: 'Postgraduate Programs', path: '/academics/programs-offered' },
    { name: 'Research', path: '/academics/research-publications' },
    { name: 'Library', path: '/facilities/library' },
    { name: 'Academic Calendar', path: '/academics/academic-calendar' },
    { name: 'Examination', path: '/academics/continuous-evaluation' }
  ];


  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg">
              <img src="/images/Logo.webp" alt="Logo" className="h-12 w-16 object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Anjuman Arts, Science and Commerce College, Bhatkal</h3>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Anjuman Arts, Science and Commerce college, Bhatkal is committed to providing quality education and fostering academic excellence. 
              We prepare students for successful careers and responsible citizenship.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-blue-200 hover:text-yellow-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-500 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Academics</h4>
            <ul className="space-y-2">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-blue-200 text-sm">
                   AASCC, AnjumanAbad -
                  581320
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                <p className="text-blue-200 text-sm">+91 8385226443</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                <p className="text-blue-200 text-sm">college@anjuman.edu.in,</p>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                <p className="text-blue-200 text-sm">Telephone: +91 8385 226 443</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sitemap Section */}

      {/* Bottom Bar */}
      <div className="bg-blue-950 border-t border-blue-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-blue-200">
            <p>&copy; 2027 AASCC All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="#" className="hover:text-white">Privacy Policy</Link>
              <Link to="#" className="hover:text-white">Terms of Service</Link>
              <Link to="#" className="hover:text-white">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;