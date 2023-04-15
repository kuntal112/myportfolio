import React from 'react'
import SocialLinks from "./SocialLinks"
import { Link } from "react-router-dom"
import Footer from './Footer'
var NavBar = () => {
  return (
    <div className="navbar closed">
      
      <div className="brand-logo">

        <Link to="/" className="navbar-brand" ><span className="font-weight-bold logo-span">Kuntal Das</span></Link>
        <SocialLinks></SocialLinks>
     </div>
     <div className="navigation">
       <ul className="navigation-list">
         <li><Link to="/about"><button>About</button></Link></li>
         <li><Link to="/skills"><button>Skills</button></Link></li>
         <li><Link to="/myworks"><button>My Works</button></Link></li>
         <li><Link to="/contact"><button>Contact</button></Link></li>
         <li><a href="Kuntal Das.pdf" download className=""><button >CV</button></a></li>
       </ul>
     </div>
     <Footer></Footer>
    </div >
  )
}
export default NavBar;