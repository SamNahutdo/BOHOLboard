import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, Mail, Lock, ArrowLeft } from 'lucide-react';

interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
}

export default function Login({ setIsAuthenticated }: LoginProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate('/role-selection')}
          className="mb-6 flex items-center gap-2 text-[#636e72] hover:text-[#2d3436] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Login Card */}
        <div className="bg-white rounded-[20px] shadow-lg p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#219653] rounded-2xl flex items-center justify-center">
              <Building2 className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-[28px] font-['Poppins:Bold',sans-serif] text-[#2d3436] text-center mb-2">
            Welcome Back
          </h1>
          <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72] text-center mb-8">
            Login to continue to BOHOL Board
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-[#219653] border-[#dfe6e9] rounded focus:ring-[#219653]" />
                <span className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                  Remember me
                </span>
              </label>
              <a href="#" className="text-[13px] font-['Poppins:Medium',sans-serif] text-[#219653] hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#219653] hover:bg-[#1a7741] text-white py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] shadow-sm transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#219653] font-['Poppins:SemiBold',sans-serif] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
