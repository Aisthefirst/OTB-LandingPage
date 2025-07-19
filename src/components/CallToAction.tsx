import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              Join thousands of farmers who have already revolutionized their operations 
              with our smart agriculture solutions. Get started today and see the difference.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Email Us</div>
                  <div className="text-emerald-100">info@smartagritech.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-emerald-100">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Visit Us</div>
                  <div className="text-emerald-100">123 Farm Tech Plaza, Agriculture City</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Get Started Today</CardTitle>
              <p className="text-gray-600">
                Fill out the form below and our team will contact you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <Label htmlFor="farmSize" className="text-gray-700">Farm Size (acres)</Label>
                <Input id="farmSize" placeholder="e.g., 100" />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-700">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your farming operation and how we can help..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}