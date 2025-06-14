// components/Home.jsx
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';

const ImageWithFallback = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = '/fallback.jpg';
      }}
    />
  );
};

const Home = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Interactive City Map",
      description: "Web-based interactive map with real-time data visualization",
      tags: ["React", "Leaflet", "GeoJSON"],
      image: image1
    },
    {
      id: 2,
      title: "Environmental Tracker",
      description: "GIS application for tracking environmental changes",
      tags: ["ArcGIS", "Python", "PostGIS"],
      image: image2
    },
    {
      id: 3,
      title: "Real Estate Heatmap",
      description: "Heatmap visualization of property values across regions",
      tags: ["Google Maps API", "D3.js", "Firebase"],
      image: image3
    },
    {
      id: 4,
      title: "Disaster Response System",
      description: "Emergency response coordination with spatial analysis",
      tags: ["OpenLayers", "Node.js", "MongoDB"],
      image: image1
    },
    {
      id: 5,
      title: "Urban Planning Tool",
      description: "3D visualization for urban development planning",
      tags: ["Three.js", "Cesium", "WebGL"],
      image: image4
    }
  ];

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-orange-400 to-blue-500 text-grey-500 ">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Transforming <span className="text-slate-200">Geospatial Data</span> into Interactive Experiences
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Specialized in building powerful web applications that visualize and analyze spatial data to solve real-world challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects" 
                className="bg-red hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                View My Work <FiArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left- w-full h-full border-10 border-secondary rounded-full z-10"></div>
              <div className="relative z-10 bg-white rounded-full overflow-hidden shadow-xl">
                <ImageWithFallback 
                  src="./profile-image.jpg" 
                  alt="GIS Web Application" 
                  className="w-full h-auto"
                />
              </div>
              
            </div>
          </div>
        </div>

        {/* Featured Projects Horizontal Scroll */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="relative">
            <div className="overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex space-x-6 w-max">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="w-72 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/fallback.jpg';
                        }}
                      />
                      {hoveredProject === project.id && (
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300">
                          <Link 
                            to={`/projects/${project.id}`}
                            className="text-white font-semibold bg-secondary py-2 px-4 rounded-lg hover:bg-green-600"
                          >
                            View Details
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-dark mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-800 py-1 px-2 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-white font-semibold hover:text-secondary"
            >
              View All Projects <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;