import { Button } from "./ui/button";
import { ArrowRight, Leaf, TrendingUp, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-blue-600/5" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-emerald-600">
              <Leaf className="h-6 w-6" />
              <span className="text-sm font-medium">Smart Agriculture Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Revolutionizing 
              <span className="text-emerald-600"> Agriculture</span> with 
              <span className="text-blue-600"> Smart Technology</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Harness the power of IoT, AI, and precision farming to increase crop yields, 
              reduce waste, and build sustainable farming practices for the future.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              <span className="text-sm text-gray-600">40% Yield Increase</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-600">Sustainable Practices</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop"
            alt="Smart agriculture technology in action"
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live Monitoring Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}