import { NavLink } from "react-router-dom"

export const Header = () => {
return <div>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/Movies'>Movies</NavLink>
</div>
}