import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Only one dropdown open
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<string | null>(null); // Nested dropdown

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      submenu: [
        { name: 'Introduction', path: '/about/introduction' },
        { name: 'Vision & Mission', path: '/about/vision-mission' },
        { name: "Principal's Desk", path: '/staff/principal-desk' },

        {
          name: 'Staff',
          submenu: [
            { name: 'Teaching Faculty', path: '/staff/teaching-faculty' },
            { name: 'Non-Teaching Faculty', path: '/staff/non-teaching-faculty' },
          ]
        },
        { name: 'Rules & Regulations', path: '/about/policies' },
      ]
    },
    {
      name: 'Academics',
      submenu: [
        { name: 'Programs Offered', path: '/academics/programs-offered' },
        { name: 'How to Apply', path: '/academics/how-to-apply' },
        { name: 'Academic Calendar', path: '/academics/academic-calendar' },
        {
          name: 'Annual Reports',
          submenu: [
            { name: 'Annual Report 2021-22', path: '/academics/annual-reports/2021-22' },
            { name: 'Annual Report 2018-19', path: '/academics/annual-reports/2018-19' },
            { name: 'Annual Report 2017-18', path: '/academics/annual-reports/2017-18' },
            { name: 'Annual Report 2016-17', path: '/academics/annual-reports/2016-17' },
            { name: 'Annual Report 2015-16', path: '/academics/annual-reports/2015-16' },
            { name: 'Annual Report 2014-15', path: '/academics/annual-reports/2014-15' }
          ]
        }
      ]
    },
    { name: 'Governing Bodies', path: '/about/management' },
    { name: 'Gallery', path: '/gallery' },
    {
      name: 'Student Corner',
      submenu: [
        { name: 'Events', path: '/events' },
        { name: 'Meritorious Students', path: '/students/meritorious-students' },
        { name: 'Scholarships & Fee Concessions', path: '/students/scholarships' },
        { name: 'Placements', path: '/students/placements' }
      ]
    },
    { name: 'Contact', path: '/about/contact' }
  ];

  const isContact = (name: string) => name === 'Contact';

  const handleDropdownClick = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    } else {
      setActiveDropdown(name);
      setActiveNestedDropdown(null); // close nested when opening new dropdown
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="bg-blue-900 h-10 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <a href="tel:08385-226283, +91 9916932224 " className="flex items-center text-white hover:text-blue-200">
            <Phone className="h-5 w-5 mr-1" />
            <span className="text-sm hidden sm:inline">+91 80735 94532 </span>
          </a>
          <a href="mailto:anjumancollegebkl@gmail.com" className="flex items-center text-white hover:text-blue-200">
            <Mail className="h-5 w-5 mr-1" />
            <span className="text-sm hidden sm:inline">college@anjuman.edu.in | anjumancollegebkl@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <a href="https://www.facebook.com/adcbkl.bhatkal" className="text-white hover:text-blue-200" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/anjumandegree" className="text-white hover:text-blue-200" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/anjumandegreecollege" className="text-white hover:text-blue-200" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://in.linkedin.com/school/anjuman-arts-science-&-commerce-college-bhatkal./" className="text-white hover:text-blue-200" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://youtube.com/channel/UC5UwTgpJuzNjlmufqmCTEbw" className="text-white hover:text-blue-200" aria-label="YouTube">
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div>
              <img src="/images/Logo.webp" alt="Logo" className="h-12 w-auto" />
            </div>
            <div>
              <h1 className="text-xs sm:text-sm font-bold text-blue-900">Anjuman Arts, Science & Commerce College, Bhatkal<br className="sm:hidden" />
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.name)}

                      className={`flex items-center px-3 py-2 rounded font-medium transition-all duration-200 ${
                        isContact(item.name)
                          ? 'bg-blue-900 text-white shadow-md hover:bg-blue-800'
                          : 'text-gray-700 hover:text-blue-900 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                      {!isContact(item.name) && <ChevronDown className="ml-1 h-4 w-4" />}
                    </button>

                    {/* Dropdown */}
                    {activeDropdown === item.name && !isContact(item.name) && (
                      <div
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.submenu.map((subItem) => (
                          <div key={subItem.name} className="relative">
                            {subItem.submenu ? (
                              <>
                                <button
                                  onClick={() =>
                                    setActiveNestedDropdown(
                                      activeNestedDropdown === subItem.name ? null : subItem.name
                                    )
                                  }
                                  className="flex justify-between w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                                >
                                  {subItem.name}
                                  <ChevronDown
                                    className={`h-3 w-3 transition-transform duration-200 ${
                                      activeNestedDropdown === subItem.name ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                {activeNestedDropdown === subItem.name && (
                                  <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                                    {subItem.submenu.map((nested) => (
                                      <Link
                                        key={nested.name}
                                        to={nested.path}
                                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                                      >
                                        {nested.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-full font-medium transition-all duration-200 ${
                      isContact(item.name)
                        ? 'bg-blue-900 text-white shadow-md hover:bg-blue-800'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="max-h-screen overflow-y-auto py-4">
              {menuItems.map((item) => (
                <MobileMenuItem key={item.name} item={item} closeMenu={() => setIsMobileMenuOpen(false)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Mobile menu
const MobileMenuItem = ({ item, closeMenu }: { item: any; closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isContact = item.name === 'Contact';

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      {item.submenu ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex justify-between w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 ${
              isContact ? 'bg-blue-900 text-white rounded-full shadow-md hover:bg-blue-900' : ''
            }`}
          >
            {item.name}
            {!isContact && <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />}
          </button>
          {isOpen && !isContact && (
            <div className="bg-gray-50">
              {item.submenu.map((subItem: any) => (
                <MobileSubMenuItem key={subItem.name} item={subItem} closeMenu={closeMenu} />
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          to={item.path}
          onClick={closeMenu}
          className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 ${
            isContact ? 'bg-blue-900 text-white rounded-full shadow-md hover:bg-blue-800' : ''
          }`}
        >
          {item.name}
        </Link>
      )}
    </div>
  );
};

const MobileSubMenuItem = ({ item, closeMenu }: { item: any; closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pl-4 border-l border-gray-200">
      {item.submenu ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 text-sm"
          >
            {item.name}
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <div className="bg-gray-100">
              {item.submenu.map((nested: any) => (
                <Link
                  key={nested.name}
                  to={nested.path}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-200 text-sm"
                >
                  {nested.name}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          to={item.path}
          onClick={closeMenu}
          className="block px-4 py-2 text-gray-600 hover:bg-gray-200 text-sm"
        >
          {item.name}
        </Link>
      )}
    </div>
  );
};

export default Header;
