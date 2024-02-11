import { NavLink } from "react-router-dom"
import css from './Header.module.css'
import clsx from "clsx"

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export const Header = () => {
return <header className={css.header}>
    <NavLink to='/' className={ buildLinkClass}>Home</NavLink>
    <NavLink to='/movies' className={buildLinkClass}>Movies</NavLink>
</header>
}