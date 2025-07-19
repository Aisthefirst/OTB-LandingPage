import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Droplets, 
  Thermometer, 
  Zap, 
  BarChart3, 
  Satellite, 
  Bot,
  Leaf,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Smart Irrigation",
    description: "Automated watering systems that optimize water usage based on soil moisture, weather conditions, and crop requirements.",
    color: "text-blue-600"
  },
  {
    icon: Thermometer,
    title: "Climate Monitoring",
    description: "Real-time monitoring of temperature, humidity, and environmental conditions to ensure optimal growing conditions.",
    color: "text-orange-600"
  },
  {
    icon: Satellite,
    title: "Precision Farming",
    description: "Satellite imagery and GPS technology for precise field mapping, crop health assessment, and yield prediction.",
    color: "text-purple-600"
  },
  {
    icon: Bot,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms that analyze data patterns to provide actionable insights for crop management.",
    color: "text-emerald-600"
  },
  {
    icon: BarChart3,
    title: "Yield Analytics",
    description: "Comprehensive analytics dashboard to track performance metrics, yields, and ROI across your farming operations.",
    color: "text-indigo-600"
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Smart energy management systems that reduce power consumption while maintaining optimal farming conditions.",
    color: "text-yellow-600"
  },
  {
    icon: Shield,
    title: "Pest & Disease Control",
    description: "Early detection and prevention systems to protect crops from pests and diseases using predictive analytics.",
    color: "text-red-600"
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    description: "Environmentally conscious solutions that promote sustainable farming practices and reduce environmental impact.",
    color: "text-green-600"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Smart Agriculture Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our integrated platform combines cutting-edge technology with agricultural expertise 
            to transform traditional farming into data-driven, efficient operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className={`inline-flex p-3 rounded-lg bg-gray-50 w-fit ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}