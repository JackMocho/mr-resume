// components/Skills.jsx
import { useState } from 'react';
import { FaMapMarkedAlt, FaCode, FaDatabase, FaChartLine, FaServer, FaTools } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = [
    {
      id: 1,
      name: "Leaflet/OpenLayers",
      level: 95,
      category: "mapping",
      icon: <FaMapMarkedAlt className="text-primary" />
    },
    {
      id: 2,
      name: "ArcGIS API",
      level: 90,
      category: "mapping",
      icon: <FaMapMarkedAlt className="text-primary" />
    },
    {
      id: 3,
      name: "JavaScript/TypeScript",
      level: 92,
      category: "programming",
      icon: <FaCode className="text-blue-500" />
    },
    {
      id: 4,
      name: "React",
      level: 88,
      category: "programming",
      icon: <FaCode className="text-blue-500" />
    },
    {
      id: 5,
      name: "PostGIS",
      level: 85,
      category: "database",
      icon: <FaDatabase className="text-green-500" />
    },
    {
      id: 6,
      name: "GeoServer",
      level: 80,
      category: "server",
      icon: <FaServer className="text-purple-500" />
    },
    {
      id: 7,
      name: "D3.js",
      level: 75,
      category: "visualization",
      icon: <FaChartLine className="text-orange-500" />
    },
    {
      id: 8,
      name: "QGIS",
      level: 70,
      category: "tools",
      icon: <FaTools className="text-red-500" />
    },
    {
      id: 9,
      name: "Python (Geopandas)",
      level: 78,
      category: "programming",
      icon: <FaCode className="text-blue-500" />
    },
    {
      id: 10,
      name: "Google Maps API",
      level: 85,
      category: "mapping",
      icon: <FaMapMarkedAlt className="text-primary" />
    },
    {
      id: 11,
      name: "Mapbox GL JS",
      level: 82,
      category: "mapping",
      icon: <FaMapMarkedAlt className="text-primary" />
    },
    {
      id: 12,
      name: "Three.js (3D GIS)",
      level: 65,
      category: "visualization",
      icon: <FaChartLine className="text-orange-500" />
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'mapping', name: 'Mapping Libraries' },
    { id: 'programming', name: 'Programming' },
    { id: 'database', name: 'Spatial Databases' },
    { id: 'visualization', name: 'Visualization' },
    { id: 'server', name: 'GIS Servers' },
    { id: 'tools', name: 'GIS Tools' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My expertise in GIS web development technologies and frameworks
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => (
            <div key={skill.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
              <div className="text-right mt-1">
                <span className="text-xs font-semibold text-primary">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;