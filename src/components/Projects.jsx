// components/Projects.jsx
import { useState } from 'react';
import { FaSearch, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: "Urban Planning Dashboard",
      description: "Interactive dashboard for city planners to visualize zoning changes and development proposals.",
      tags: ["React", "Mapbox GL JS", "D3.js", "PostGIS"],
      image: "https://via.placeholder.com/600x400?text=Urban+Planning",
      category: "dashboard",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Wildfire Tracking System",
      description: "Real-time wildfire monitoring with predictive modeling for fire spread.",
      tags: ["Leaflet", "Python", "GeoServer", "OpenLayers"],
      image: "https://via.placeholder.com/600x400?text=Wildfire+Tracking",
      category: "mapping",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Delivery Route Optimizer",
      description: "Algorithm for optimizing delivery routes based on traffic and weather conditions.",
      tags: ["Google Maps API", "Node.js", "GraphQL", "MongoDB"],
      image: "https://via.placeholder.com/600x400?text=Route+Optimizer",
      category: "application",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Historical Maps Archive",
      description: "Digital archive of historical maps with comparison tools to modern basemaps.",
      tags: ["React", "OpenLayers", "GeoJSON", "Firebase"],
      image: "https://via.placeholder.com/600x400?text=Historical+Maps",
      category: "mapping",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Environmental Impact Visualizer",
      description: "3D visualization tool for assessing environmental impact of construction projects.",
      tags: ["Three.js", "Cesium", "WebGL", "ArcGIS"],
      image: "https://via.placeholder.com/600x400?text=Environmental+Impact",
      category: "visualization",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Public Transport Analytics",
      description: "Analysis and visualization of public transport usage patterns.",
      tags: ["D3.js", "Python", "PostGIS", "Chart.js"],
      image: "https://via.placeholder.com/600x400?text=Transport+Analytics",
      category: "dashboard",
      link: "#",
      github: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mapping', name: 'Web Mapping' },
    { id: 'dashboard', name: 'Dashboards' },
    { id: 'visualization', name: 'Visualizations' },
    { id: 'application', name: 'Applications' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 bg-gradient-to-bl from-blue-500 to-green-800 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my GIS web development work
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === category.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-200 text-gray-800 py-1 px-2 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found matching your criteria.</p>
          </div>
        )}

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-dark">{selectedProject.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiX className="text-2xl" />
                  </button>
                </div>
                
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-auto"
                  />
                </div>
                
                <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                
                <h4 className="text-lg font-semibold text-dark mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 py-1 px-3 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                      <FaGithub className="mr-2" /> View Code
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center justify-center bg-transparent hover:bg-gray-100 text-dark font-semibold py-3 px-6 border border-gray-300 rounded-lg transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;