import { NavLink } from "react-router-dom"

export const Navbar =()=> {
    return       <nav>
    <NavLink to="/">Home</NavLink>
    <span> </span>
    <NavLink to="/about">About</NavLink>
    <span> </span>
    <NavLink to="/payments">Payments</NavLink>
    <span> </span>
    
  </nav>
}