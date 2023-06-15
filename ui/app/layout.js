import React from 'react'
import "../styles/globals.css";



function layout({children}) {
  return (
    <html lang="en">
    <body>{children}</body>
  </html>  )
}

export default layout