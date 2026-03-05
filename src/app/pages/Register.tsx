import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, Mail, Lock, User, Phone, ArrowLeft } from 'lucide-react';

interface RegisterProps {
  setIsAuthenticated: (value: boolean) => void;
  userRole: 'owner' | 'boarder' | null;
}

export default function Register({ setIsAuthenticated, userRole }: RegisterProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setIsAuthenticated(true);
    navigate('/home');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate('/login')}
          className="mb-6 flex items-center gap-2 text-[#636e72] hover:text-[#2d3436] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Login
        </button>

        <div className="bg-white rounded-[20px] shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#219653] rounded-2xl flex items-center justify-center">
              <Building2 className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-[28px] font-['Poppins:Bold',sans-serif] text-[#2d3436] text-center mb-2">
            Create Account
          </h1>
          <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72] text-center mb-2">
            Sign up as {userRole === 'owner' ? 'an Owner' : 'a Boarder'}
          </p>
          <p className="text-[12px] font-['Poppins:Regular',sans-serif] text-[#636e72] text-center mb-6">
            Join BOHOL Board today
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#636e72]" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full pl-11 pr-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#636e72]" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full pl-11 pr-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#636e72]" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+63 912 345 6789"
                  className="w-full pl-11 pr-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#636e72]" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                  className="w-full pl-11 pr-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#636e72]" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  className="w-full pl-11 pr-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#219653] hover:bg-[#1a7741] text-white py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] shadow-sm transition-colors mt-6"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
              Already have an account?{' '}
              <Link to="/login" className="text-[#219653] font-['Poppins:SemiBold',sans-serif] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
