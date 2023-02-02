import React, { useState } from 'react'

function Footer() {
    
    const year = new Date().getFullYear()
   
    



  return (
    <div>
      <footer>
        <p>@coyright {year}</p>
      </footer>
    </div>
  )
}

export default Footer
