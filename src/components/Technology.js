import React from 'react';
import { 
  Cloud, 
  Smartphone, 
  Cpu, 
  Database,
  Wifi,
  Monitor
} from 'lucide-react';

const technologies = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable cloud infrastructure for data processing and storage",
    tags: ["AWS", "Azure", "Real-time Processing"]
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native mobile applications for on-the-go farm management",
    tags: ["iOS", "Android", "Offline Sync"]
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Local processing power for immediate insights and responses",
    tags: ["IoT Gateways", "Real-time Analytics", "Low Latency"]
  },
  {
    icon: Database,
    title: "Big Data Analytics",
    description: "Advanced analytics to process large volumes of agricultural data",
    tags: ["Machine Learning", "Predictive Analytics", "Data Mining"]
  },
  {
    icon: Wifi,
    title: "IoT Connectivity",
    description: "Seamless connectivity across all your farming equipment and sensors",
    tags: ["LoRaWAN", "5G", "Satellite"]
  },
  {
    icon: Monitor,
    title: "Dashboard & Reporting",
    description: "Comprehensive dashboards with customizable reports and insights",
    tags: ["Real-time Monitoring", "Custom Reports", "Alerts"]
  }
];

const Technology = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built on Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our platform leverages the latest in agricultural technology, IoT sensors, 
              artificial intelligence, and cloud computing to deliver unparalleled farming insights.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">&lt;100ms</div>
                <div className="text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                <div className="text-gray-600">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">256-bit</div>
                <div className="text-gray-600">Encryption</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <tech.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{tech.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{tech.description}</p>
                <div className="flex flex-wrap gap-1">
                  {tech.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;