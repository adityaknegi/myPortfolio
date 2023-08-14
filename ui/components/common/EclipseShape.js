// EclipseShape.js
import React from 'react';

function EclipseShape() {
  return (
    <div className="relative overflow-hidden md:-mt-16 bg-opacity-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 81"
        fill="none"
        className="bg-opacity-10 fill-red-50"
      >
        <defs>
          {/* Define a clipping mask */}
          <clipPath id="ellipseClip">
            <rect x="0" y="40.5" width="1440" height="40.5" />
          </clipPath>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#F87171" />
            <stop offset="100%" stop-color="#FBBF24" />
          </linearGradient>
        </defs>

        {/* Apply the clipping mask to the ellipse */}
        <g clip-path="url(#ellipseClip)">
          <ellipse cx="719.5" cy="40.5" rx="730.5" ry="40.5" fill="url(#gradient)" />
        </g>
      </svg>

      <div className="absolute h-4 w-4 rounded-full bg-blue-500 animate-bounce" style={{ top: 'calc(50% - 2px)', animation: 'moveBall 300s linear infinite' }} />
      <style jsx>{`
        @keyframes moveBall {
          0% {
            left: 10px;
          }
          100% {
            left: calc(100% - 10px);
          }
        }
      `}</style>
    </div>
  );
}

export default EclipseShape;
