import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const solutions = [
  {
    title: "Crop Management",
    description: "End-to-end crop lifecycle management with AI-powered recommendations",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
    features: ["Growth stage monitoring", "Nutrient management", "Harvest optimization", "Quality control"],
    color: "emerald"
  },
  {
    title: "Livestock Monitoring",
    description: "Smart systems for animal health, behavior tracking, and welfare management",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
    features: ["Health monitoring", "Feed optimization", "Breeding management", "Behavior analysis"],
    color: "blue"
  },
  {
    title: "Resource Optimization",
    description: "Intelligent resource allocation for water, energy, and input management",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    features: ["Water conservation", "Energy efficiency", "Input reduction", "Cost optimization"],
    color: "indigo"
  }
];

export function Solutions() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored Solutions for Every Farm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From small family farms to large agricultural enterprises, our scalable solutions 
            adapt to your specific needs and help you achieve your farming goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback 
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-200 text-sm">{solution.description}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`h-5 w-5 text-${solution.color}-600`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className={`w-full border-${solution.color}-600 text-${solution.color}-600 hover:bg-${solution.color}-50`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}