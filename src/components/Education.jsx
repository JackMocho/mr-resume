// components/Education.jsx
import { FaGraduationCap, FaUniversity, FaCertificate } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Geospatial Information Science & Remote Sensing",
      institution: "Dedan Kimathi University of Technology",
      year: "2018 - 2021",
      description: "Specialized in Geo-Science, web-based GIS applications and spatial data analysis. Thesis on: 'Spatio-temporal Assessment of Human Thermal Comfort, case study Mogotio Sub-County, Kenya'.",
      icon: <FaGraduationCap className="text-2xl text-primary" />
    },
    {
      id: 2,
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      institution: "Kabianga School",
      year: "2014 - 2017",
      description: " A whole-rounded education with a focus on sciences and mathematics.",
      icon: <FaUniversity className="text-2xl text-secondary" />
    },
    {
      id: 3,
      degree: "Advanced GIS Developer Certification",
      institution: "Esri Technical Certification Program",
      year: "2021",
      description: "Certified in ArcGIS API for JavaScript and advanced geospatial analysis techniques.",
      icon: <FaCertificate className="text-2xl text-blue-500" />
    },
    {
      id: 4,
      degree: "Web Mapping with Open Source Tools",
      institution: "Udemy Online Course",
      year: "2022",
      description: "Completed comprehensive training in Leaflet, OpenLayers, and GeoServer for web mapping applications.",
      icon: <FaCertificate className="text-2xl text-green-500" />
    }
  ];

  return (
    <section id="education" className="py-16 bg-gradient-to-br from-slate-200 to-green-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Education & Qualifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped my expertise in GIS web development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {educationData.map((item, index) => (
              <div 
                key={item.id}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
              >
                {/* Content */}
                <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <h3 className="text-xl font-bold text-dark mb-2">{item.degree}</h3>
                  <p className="text-secondary font-semibold mb-2">{item.institution} • {item.year}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>

                {/* Icon */}
                <div className="hidden md:flex w-16 h-16 bg-white rounded-full shadow-md items-center justify-center z-10">
                  {item.icon}
                </div>

                {/* Mobile icon */}
                <div className="md:hidden w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                {/* For even items, empty div to balance layout */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;