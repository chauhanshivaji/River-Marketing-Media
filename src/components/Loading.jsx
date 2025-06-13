import React from 'react';

const Loading = () => {
  return (
    <>
      <style>
        {`
          @keyframes down {
            0%, 100% {
              transform: none;
            }
            25% {
              transform: translateX(100%);
            }
            50% {
              transform: translateX(100%) translateY(100%);
            }
            75% {
              transform: translateY(100%);
            }
          }

          @keyframes up {
            0%, 100% {
              transform: none;
            }
            25% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(-100%) translateY(-100%);
            }
            75% {
              transform: translateY(-100%);
            }
          }

          .animate-down {
            animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
          }

          .animate-up {
            animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
          }
        `}
      </style>
      <div className="fixed inset-0 flex items-center justify-center bg-neutral-900/80 backdrop-blur-sm z-50">
        <div className="relative w-[100px] h-[100px]">
          {/* First block */}
          <div className="absolute w-[30px] h-[30px] bg-[#E88924] top-1/2 left-1/2 animate-up"></div>
          
          {/* Second block */}
          <div className="absolute w-[30px] h-[30px] bg-[#FFFFFF] top-[calc(50%-30px)] left-[calc(50%-30px)] animate-down"></div>
        </div>
      </div>
    </>
  );
};

export default Loading; 