import { Link, useLocation } from 'react-router-dom';
import { Home, Building2, Calendar, User, PlusCircle, LayoutDashboard, Menu, X, MapPinned, Search } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  userRole: 'owner' | 'boarder' | null;
}

export default function Navbar({ userRole }: NavbarProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const boarderNavItems = [
    { path: '/home', label: 'Home', icon: Home },
    { path: '/map', label: 'Map', icon: MapPinned },
    { path: '/search', label: 'Search', icon: Search },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  const ownerMainItems = [
    { path: '/home', label: 'Home', icon: Home },
    { path: '/properties', label: 'Properties', icon: Building2 },
    { path: '/my-bookings', label: 'Bookings', icon: Calendar },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  const ownerItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/add-property', label: 'Add Property', icon: PlusCircle },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop & Mobile Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#219653] rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[20px] font-['Poppins:Bold',sans-serif] text-[#2d3436]">
                BOHOL Board
              </h1>
              <p className="text-[11px] font-['Poppins:Regular',sans-serif] text-[#636e72] leading-none">
                {userRole === 'owner' ? 'Property Owner' : 'Find Your Stay'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {(userRole === 'owner' ? ownerMainItems : boarderNavItems).map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-['Poppins:Medium',sans-serif] text-[14px] ${
                    isActive(item.path)
                      ? 'bg-[#219653] text-white'
                      : 'text-[#636e72] hover:bg-[#f8f9fa]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
            
            {userRole === 'owner' && ownerItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-['Poppins:Medium',sans-serif] text-[14px] ${
                    isActive(item.path)
                      ? 'bg-[#219653] text-white'
                      : 'text-[#636e72] hover:bg-[#f8f9fa]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#f8f9fa] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#2d3436]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2d3436]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#dfe6e9]">
            <div className="flex flex-col gap-1">
              {(userRole === 'owner' ? ownerMainItems : boarderNavItems).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-['Poppins:Medium',sans-serif] text-[14px] ${
                      isActive(item.path)
                        ? 'bg-[#219653] text-white'
                        : 'text-[#636e72] hover:bg-[#f8f9fa]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}
              
              {userRole === 'owner' && (
                <>
                  <div className="h-px bg-[#dfe6e9] my-2" />
                  {ownerItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-['Poppins:Medium',sans-serif] text-[14px] ${
                          isActive(item.path)
                            ? 'bg-[#219653] text-white'
                            : 'text-[#636e72] hover:bg-[#f8f9fa]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {item.label}
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
