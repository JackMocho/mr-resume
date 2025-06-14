import { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { 
  FaMap, 
  FaChartLine,
  FaLayerGroup, 
  FaGlobeAmericas, 
  FaMobileAlt, 
  FaChartBar,
  FaChevronRight
} from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Custom Web Mapping Solutions",
      icon: <FaMap className="text-3xl text-blue-600" />,
      shortDesc: "Interactive maps tailored to your specific needs",
      longDesc: "I develop custom web mapping applications using the latest technologies like Leaflet, OpenLayers, and Mapbox GL JS. These solutions can integrate with your existing systems and provide intuitive interfaces for spatial data visualization and analysis.",
      features: [
        "Responsive design for all devices",
        "Custom data visualization styles",
        "Real-time data integration",
        "User-friendly interfaces",
        "Performance optimization"
      ],
      category: "development"
    },
    {
      id: 2,
      title: "Geospatial Data Visualization",
      icon: <FaLayerGroup className="text-3xl text-green-600" />,
      shortDesc: "Transform complex data into insightful visuals",
      longDesc: "Using libraries like D3.js and Deck.gl, I create powerful visualizations that make complex geospatial data understandable at a glance. From heatmaps to 3D terrain models, I can help you present your data effectively.",
      features: [
        "Heatmaps and cluster visualizations",
        "Time-series animations",
        "3D terrain and building models",
        "Custom thematic mapping",
        "Interactive data exploration"
      ],
      category: "visualization"
    },
    {
  id: 3,
  title: "Advanced Spatial Analytics",
  icon: <FaChartLine className="text-3xl text-purple-600" />,
  shortDesc: "Uncover hidden patterns and relationships in your geospatial data",
  longDesc: "I provide comprehensive spatial analysis services using tools like ArcGIS Pro, QGIS, and Python geospatial libraries. From basic proximity analysis to complex spatial statistics, I can help you extract meaningful insights from your location data to drive better decision-making.",
  features: [
    "Hotspot and cluster analysis",
    "Network and routing analysis",
    "Spatial interpolation techniques",
    "Terrain and viewshed analysis",
    "Location-allocation modeling",
    "Spatial regression and autocorrelation"
  ],
  category: "analysis"
},
{
  id: 4,
  title: "Geospatial Machine Learning",
  icon: <FaRobot className="text-3xl text-orange-600" />,
  shortDesc: "Predictive modeling and pattern recognition for spatial data",
  longDesc: "I develop custom machine learning solutions for geospatial applications, combining Python's scikit-learn, TensorFlow, and specialized libraries like GeoPandas and Rasterio. These models can help with land cover classification, predictive modeling, and spatial pattern recognition.",
  features: [
    "Satellite image classification",
    "Predictive modeling for spatial phenomena",
    "Object detection in aerial imagery",
    "Spatiotemporal pattern recognition",
    "Feature extraction from point clouds",
    "Model deployment for real-time analysis"
  ],
  category: "analysis"
}
 ];

 const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: ' Web Development' },
    { id: 'visualization', name: 'Data Visualization' },
    { id: 'analysis', name: 'Spatial Analysis' }
  ];



  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const handleRequestService = (service) => {
    navigate('/contact', { 
      state: { 
        serviceRequested: service.title,
        prefillMessage: `I'm interested in your ${service.title} service. ${service.shortDesc}`,
        subject: `Inquiry about ${service.title}`
      } 
    });
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional GIS Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your geospatial needs
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div 
              key={service.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                
                <button 
                  onClick={() => setSelectedService(service)}
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  View details <FaChevronRight className="ml-1" />
                </button>
                
                <button
                  onClick={() => handleRequestService(service)}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  Request Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="mr-4">
                      {selectedService.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiX className="text-2xl" />
                  </button>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedService.longDesc}</p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-8">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleRequestService(selectedService)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Request This Service
                  </button>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 border border-gray-300 rounded-lg transition duration-300"
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

export default Services;