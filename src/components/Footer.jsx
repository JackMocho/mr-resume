// components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-white">GIS</span>
              <span className="text-secondary">Dev</span>
            </h2>
            <p className="text-gray-400 mt-2">Transforming geospatial data into interactive experiences</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} emissarywebmappers254. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;