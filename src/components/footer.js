import React from "react"

export default function Footer() {
  return (
    <footer className='p20'>
      © {new Date().getFullYear()} &middot; Built by
      {` `}
      <a href='https://www.groundcrew.com.au'>Groundcrew</a>
    </footer>
  )
}
