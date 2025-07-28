import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const CallToAction = () => {
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
          
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-gray-900">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Get Started Today</h3>
              <p className="text-gray-600">
                Fill out the form below and our team will contact you within 24 hours.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    id="firstName" 
                    type="text"
                    placeholder="John" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    id="lastName" 
                    type="text"
                    placeholder="Doe" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700 mb-1">Farm Size (acres)</label>
                <input 
                  id="farmSize" 
                  type="text"
                  placeholder="e.g., 100" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Tell us about your farming operation and how we can help..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Send Message
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;