import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <section className="companyName">
        <h1>Your Shake</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/Products">Products</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
export default Navbar
 

 {/* <p><a href="/About_Me" onClick={handleClick()}>Who We Are</a></p>   <p><a href="/Products" onClick={handleClick()}>Products</a></p>  <p><a href="/Allergens" onClick={handleClick()}>Allergens</a></p> */}
