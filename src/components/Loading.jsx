import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-900/80 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-[#e88924]/20 rounded-full"></div>
        
        {/* Spinning ring */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-[#e88924] rounded-full animate-spin border-t-transparent"></div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#e88924] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Loading; 