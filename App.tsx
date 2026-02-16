import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import MemberProfile from './pages/MemberProfile';
import Cells from './pages/Cells';
import Financial from './pages/Financial';
import Calendar from './pages/Calendar';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Mock authentication check
  const isAuthenticated = true; 
  return isAuthenticated ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/members" element={
        <ProtectedRoute>
          <Members />
        </ProtectedRoute>
      } />
      
      <Route path="/members/:id" element={
        <ProtectedRoute>
          <MemberProfile />
        </ProtectedRoute>
      } />
      
      <Route path="/cells" element={
        <ProtectedRoute>
          <Cells />
        </ProtectedRoute>
      } />
      
      <Route path="/financial" element={
        <ProtectedRoute>
          <Financial />
        </ProtectedRoute>
      } />
      
      <Route path="/calendar" element={
        <ProtectedRoute>
          <Calendar />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}