import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-blue-600">M</span>
                <span className="text-gray-800">SS</span>
              </div>
            </div>
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition">
                Home
              </a>
              <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition">
                About
              </a>
              <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition">
                Services
              </a>
              <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition">
                Resources ▼
              </a>
              <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition">
                Careers
              </a>
            </nav>
            <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded text-sm hover:bg-blue-700 transition">Contact</button>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default MainLayout;
