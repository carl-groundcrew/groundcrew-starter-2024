import React from "react"

const Footer = () => (
  <footer className='p20'>
    © {new Date().getFullYear()} &middot; Built by
    {` `}
    <a href="https://www.groundcrew.com.au">Groundcrew</a>
  </footer>
)

export default Footer
