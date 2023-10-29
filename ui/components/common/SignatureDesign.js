"use client"

import React, { useState, useEffect } from 'react';

export default function SignatureDesign() {
  const [textColor, setTextColor] = useState('hide');

  const toggleTextColor = () => {
    setTextColor(textColor === 'hide' ? 'text-black' : 'hide');
  };

  useEffect(() => {
    // Function to toggle text color at intervals
    const interval = setInterval(() => {
      toggleTextColor();
    }, 2000); // Toggle color every 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
    className="bg-blue-500 h-10 md:h-20 opacity-50 hover:opacity-0 transition-opacity ease-in-out duration-2000"
    style={{
      transitionProperty: 'opacity',
      transitionDuration: '2000ms',
      transitionTimingFunction: 'ease-in-out'
    }}
    >
      <div className="relative h-full">
        <div className="absolute inset-0 bg-blue-500  -skew-y-12 origin-bottom-right">
         
        </div>
        <div className="absolute inset-0 bg-indigo-800 transform skew-y-1 origin-top-left text-white p-4 text-xxs  md:text-base">
     
          </div>
        <div className={`absolute inset-2 bg-indigo-900 transform skew-y-12 origin-bottom-top rotate-90`}
        >
        </div>
      </div>
      <div
        className="relative h-full mr-2 md:mr-10 flex items-center justify-center text-white"
      >
        {/* <div className={`text-sm md:text-2xl font-semibold rotate-90 transform skew-y-12 ${textColor}`}>
          Aditya
        </div> */}
      </div>
    </div>
  );
}
