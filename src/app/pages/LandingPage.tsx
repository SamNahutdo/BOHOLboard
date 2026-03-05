import { useNavigate } from 'react-router-dom';
import { Building2, MapPin, Shield, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://source.unsplash.com/1920x1080/?bohol,beach,resort"
            alt="Bohol Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d3436]/70 to-[#2d3436]/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-[#219653] rounded-2xl flex items-center justify-center shadow-2xl">
              <Building2 className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-[48px] md:text-[64px] font-['Poppins:Bold',sans-serif] text-white mb-4 leading-tight">
            BOHOL Board
          </h1>
          
          <p className="text-[20px] md:text-[24px] font-['Poppins:Regular',sans-serif] text-white/90 mb-8 max-w-2xl mx-auto">
            Discover your perfect stay in the heart of Bohol
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/role-selection')}
              className="bg-[#219653] hover:bg-[#1a7741] text-white px-8 py-4 rounded-[12px] font-['Poppins:SemiBold',sans-serif] text-[18px] shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              Get Started
            </button>
            
            <button
              onClick={() => navigate('/properties')}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-[12px] font-['Poppins:SemiBold',sans-serif] text-[18px] transition-all w-full sm:w-auto"
            >
              Explore Properties
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-['Poppins:Bold',sans-serif] text-[#2d3436] text-center mb-4">
            Why Choose BOHOL Board?
          </h2>
          <p className="text-[16px] font-['Poppins:Regular',sans-serif] text-[#636e72] text-center mb-12 max-w-2xl mx-auto">
            Your trusted platform for finding and listing properties in Bohol
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] rounded-[20px] p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#219653] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-3">
                Prime Locations
              </h3>
              <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                Properties in the best locations across Bohol, from beaches to city centers
              </p>
            </div>

            <div className="bg-[#f8f9fa] rounded-[20px] p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#219653] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-3">
                Verified Listings
              </h3>
              <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                All properties are verified to ensure quality and authenticity
              </p>
            </div>

            <div className="bg-[#f8f9fa] rounded-[20px] p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#219653] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-3">
                Best Experience
              </h3>
              <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                Easy booking process and dedicated support for a seamless experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-[#219653] to-[#1a7741]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[36px] font-['Poppins:Bold',sans-serif] text-white mb-4">
            Ready to Find Your Perfect Stay?
          </h2>
          <p className="text-[18px] font-['Poppins:Regular',sans-serif] text-white/90 mb-8">
            Join thousands of satisfied guests and property owners in Bohol
          </p>
          <button
            onClick={() => navigate('/role-selection')}
            className="bg-white text-[#219653] hover:bg-[#f8f9fa] px-8 py-4 rounded-[12px] font-['Poppins:SemiBold',sans-serif] text-[18px] shadow-xl transition-all transform hover:scale-105"
          >
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2d3436] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-white/70">
            © 2026 BOHOL Board. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
