import React from 'react'
import "../styles/globals.css";

export const metadata = {
  title: 'Aditya Kumar — Backend Engineer',
  description: 'Senior backend engineer specializing in scalable APIs, distributed systems, and full-stack development.',
};

function layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default layout;
