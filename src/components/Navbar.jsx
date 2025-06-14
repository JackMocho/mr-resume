import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaArrowLeft } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const isEducationPage = location.pathname === '/education';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-500 shadow-md py-2' : 'bg-primary py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with conditional back button */}
          <div className="flex items-center">
            {isEducationPage && (
              <button 
                onClick={() => window.history.back()}
                className="mr-3 md:hidden text-xl text-white hover:text-secondary transition-colors"
                aria-label="Go back to home"
              >
                <FaArrowLeft />
              </button>
            )}
            <Link 
              to="/" 
              className="text-2xl font-bold text-white hover:text-secondary transition-colors"
              onClick={closeMobileMenu}
            >
              <span className={isScrolled ? 'text-primary' : 'text-white'}>My</span>
              <span className="text-secondary"> Portfolio</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Link (no dropdown) */}
            <Link 
              to="/" 
              className={`${isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-secondary'} transition-colors`}
            >
              Home
            </Link>

            {/* Education Link */}
            <Link 
              to="/education" 
              className={`${isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-secondary'} transition-colors`}
            >
              Education
            </Link>

            {/* Skills Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center ${isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-secondary'} transition-colors`}
                onMouseEnter={() => toggleDropdown('skills')}
              >
                Skills
                {activeDropdown === 'skills' ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
              </button>
              {activeDropdown === 'skills' && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseLeave={() => toggleDropdown('skills')}
                >
                  <h3 className="px-4 py-2 font-semibold text-primary border-b">Top GIS Developer Skills</h3>
                  <Link to="#" className="block px-4 py-2 text-dark hover:bg-gray-100">Web Mapping (Leaflet, OpenLayers)</Link>
                  <Link to="#" className="block px-4 py-2 text-dark hover:bg-gray-100">Geospatial Data Processing</Link>
                  <Link to="#" className="block px-4 py-2 text-dark hover:bg-gray-100">GIS APIs (ArcGIS, Google Maps)</Link>
                  <Link to="#" className="block px-4 py-2 text-dark hover:bg-gray-100">Spatial Databases (PostgreSQL & PostGIS)</Link>
                  <Link to="#" className="block px-4 py-2 text-dark hover:bg-gray-100">React/JavaScript/Tailwind CSS/Python</Link>
                  <Link to="#" className="block px-4 py-2 text-dark hover:bg-gray-100">Node JS/GIS Integration</Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center ${isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-secondary'} transition-colors`}
                onMouseEnter={() => toggleDropdown('services')}
              >
                Services
                {activeDropdown === 'services' ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
              </button>
              {activeDropdown === 'services' && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseLeave={() => toggleDropdown('services')}
                >
                  <h3 className="px-4 py-2 font-semibold text-primary border-b">GIS Development Services</h3>
                  <Link to="#" className="block px-4 py-2 text-dark hover:bg-gray-100">Custom Web Mapping Solutions</Link>
                  <Link to="#" className="block px-4 py-2 text-dark hover:bg-gray-100">Geospatial Data Visualization</Link>
                  <Link to="#" className="block px-4 py-2 text-dark hover:bg-gray-100">Location-based Applications</Link>
                  <Link to="#" className="block px-4 py-2 text-dark hover:bg-gray-100">GIS System Integration</Link>
                  <Link to="#" className="block px-4 py-2 text-dark hover:bg-gray-100">Spatial Analysis Tools</Link>
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 mt-2 text-center text-white bg-secondary rounded mx-2 hover:bg-green-600"
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/projects" 
              className={`${isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-secondary'} transition-colors`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`${isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-secondary'} transition-colors`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`text-2xl focus:outline-none ${isScrolled ? 'text-dark' : 'text-white'} hover:text-secondary transition-colors`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-2">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {/* Back button for education page */}
              {isEducationPage && (
                <button
                  onClick={() => {
                    window.history.back();
                    closeMobileMenu();
                  }}
                  className="flex items-center w-full px-3 py-2 text-dark hover:bg-gray-100 rounded-md"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to Home
                </button>
              )}

              {/* Mobile Menu Items */}
              <Link 
                to="/" 
                className="block px-3 py-2 text-dark hover:bg-gray-100 rounded-md"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              <Link 
                to="/education" 
                className="block px-3 py-2 text-dark hover:bg-gray-100 rounded-md"
                onClick={closeMobileMenu}
              >
                Education
              </Link>

              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('mobileSkills')}
                  className="flex items-center justify-between w-full px-3 py-2 text-dark hover:bg-gray-100 rounded-md"
                >
                  <span>Skills</span>
                  {activeDropdown === 'mobileSkills' ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeDropdown === 'mobileSkills' && (
                  <div className="pl-4">
                    <h3 className="px-3 py-2 font-semibold text-primary">Top GIS Developer Skills</h3>
                    <Link to="#" className="block px-3 py-2 text-dark hover:bg-gray-100">Web Mapping</Link>
                    <Link to="#" className="block px-3 py-2 text-dark hover:bg-gray-100">Geospatial Data</Link>
                    <Link to="#" className="block px-3 py-2 text-dark hover:bg-gray-100">GIS APIs</Link>
                    <Link to="#" className="block px-3 py-2 text-dark hover:bg-gray-100">Spatial Databases</Link>
                    <Link to="#" className="block px-3 py-2 text-dark hover:bg-gray-100">JavaScript</Link>
                    <Link to="#" className="block px-3 py-2 text-dark hover:bg-gray-100">React/GIS</Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('mobileServices')}
                  className="flex items-center justify-between w-full px-3 py-2 text-dark hover:bg-gray-100 rounded-md"
                >
                  <span>Services</span>
                  {activeDropdown === 'mobileServices' ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeDropdown === 'mobileServices' && (
                  <div className="pl-4">
                    <h3 className="px-3 py-2 font-semibold text-primary">GIS Development Services</h3>
                    <Link to="#" className="block px-3 py-2 text-dark hover:bg-gray-100">Web Mapping Solutions</Link>
                    <Link to="#" className="block px-3 py-2 text-dark hover:bg-gray-100">Data Visualization</Link>
                    <Link to="#" className="block px-3 py-2 text-dark hover:bg-gray-100">Location-based Apps</Link>
                    <Link to="#" className="block px-3 py-2 text-dark hover:bg-gray-100">System Integration</Link>
                    <Link to="#" className="block px-3 py-2 text-dark hover:bg-gray-100">Spatial Analysis</Link>
                    <Link 
                      to="/services" 
                      className="block px-3 py-2 mt-2 text-center text-white bg-secondary rounded hover:bg-green-600"
                      onClick={closeMobileMenu}
                    >
                      View All Services
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/projects" 
                className="block px-3 py-2 text-dark hover:bg-gray-100 rounded-md"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-dark hover:bg-gray-100 rounded-md"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;