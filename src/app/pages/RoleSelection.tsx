import { useNavigate } from 'react-router-dom';
import { Building2, Home, ArrowLeft } from 'lucide-react';

interface RoleSelectionProps {
  setUserRole: (role: 'owner' | 'boarder') => void;
}

export default function RoleSelection({ setUserRole }: RoleSelectionProps) {
  const navigate = useNavigate();

  const handleRoleSelection = (role: 'owner' | 'boarder') => {
    setUserRole(role);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#219653] to-[#1a7741]">
      <div className="w-full max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-white/80 hover:text-white font-['Poppins:Medium',sans-serif] text-[14px] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[40px] md:text-[48px] font-['Poppins:Bold',sans-serif] text-white mb-4">
            Choose Your Role
          </h1>
          <p className="text-[18px] font-['Poppins:Regular',sans-serif] text-white/90 max-w-2xl mx-auto">
            Select how you'd like to use BOHOL Board
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Boarder/Tenant Card */}
          <div
            onClick={() => handleRoleSelection('boarder')}
            className="bg-white rounded-[20px] p-8 cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#219653] to-[#1a7741] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Home className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-[28px] font-['Poppins:Bold',sans-serif] text-[#2d3436] mb-3">
                I'm a Boarder
              </h2>
              
              <p className="text-[15px] font-['Poppins:Regular',sans-serif] text-[#636e72] mb-6">
                Looking for a place to stay in Bohol
              </p>

              <ul className="space-y-3 mb-6 text-left w-full">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-[#219653] rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    Browse verified properties
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-[#219653] rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    Easy online booking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-[#219653] rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    Manage your bookings
                  </span>
                </li>
              </ul>

              <div className="w-full bg-[#219653] text-white py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] group-hover:bg-[#1a7741] transition-colors">
                Continue as Boarder
              </div>
            </div>
          </div>

          {/* Owner Card */}
          <div
            onClick={() => handleRoleSelection('owner')}
            className="bg-white rounded-[20px] p-8 cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#219653] to-[#1a7741] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-[28px] font-['Poppins:Bold',sans-serif] text-[#2d3436] mb-3">
                I'm an Owner
              </h2>
              
              <p className="text-[15px] font-['Poppins:Regular',sans-serif] text-[#636e72] mb-6">
                Ready to list my property for rent
              </p>

              <ul className="space-y-3 mb-6 text-left w-full">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-[#219653] rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    List unlimited properties
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-[#219653] rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    Manage bookings & tenants
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-[#219653] rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    Track earnings & analytics
                  </span>
                </li>
              </ul>

              <div className="w-full bg-[#219653] text-white py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] group-hover:bg-[#1a7741] transition-colors">
                Continue as Owner
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
