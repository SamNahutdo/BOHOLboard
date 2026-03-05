import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import RoleSelection from './pages/RoleSelection';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetails from './pages/PropertyDetails';
import BookingPage from './pages/BookingPage';
import BookingSuccess from './pages/BookingSuccess';
import MyBookings from './pages/MyBookings';
import ProfilePage from './pages/ProfilePage';
import AddProperty from './pages/AddProperty';
import OwnerDashboard from './pages/OwnerDashboard';
import MapPage from './pages/MapPage';
import SearchPage from './pages/SearchPage';

export default function App() {
  const [userRole, setUserRole] = useState<'owner' | 'boarder' | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/role-selection" element={<RoleSelection setUserRole={setUserRole} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} userRole={userRole} />} />

          {/* Protected Routes with Navbar */}
          <Route path="/home" element={
            <>
              <Navbar userRole={userRole} />
              <HomePage userRole={userRole} />
            </>
          } />
          <Route path="/map" element={
            <>
              <Navbar userRole={userRole} />
              <MapPage />
            </>
          } />
          <Route path="/search" element={
            <>
              <Navbar userRole={userRole} />
              <SearchPage />
            </>
          } />
          <Route path="/properties" element={
            <>
              <Navbar userRole={userRole} />
              <PropertiesPage />
            </>
          } />
          <Route path="/property/:id" element={
            <>
              <Navbar userRole={userRole} />
              <PropertyDetails />
            </>
          } />
          <Route path="/booking/:id" element={
            <>
              <Navbar userRole={userRole} />
              <BookingPage />
            </>
          } />
          <Route path="/booking-success" element={
            <>
              <Navbar userRole={userRole} />
              <BookingSuccess />
            </>
          } />
          <Route path="/my-bookings" element={
            <>
              <Navbar userRole={userRole} />
              <MyBookings userRole={userRole} />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Navbar userRole={userRole} />
              <ProfilePage userRole={userRole} />
            </>
          } />
          
          {/* Owner Only Routes */}
          <Route path="/add-property" element={
            <>
              <Navbar userRole={userRole} />
              <AddProperty />
            </>
          } />
          <Route path="/dashboard" element={
            <>
              <Navbar userRole={userRole} />
              <OwnerDashboard />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}
