import {Icon} from 'icons';
import {NavLink} from 'react-router-dom';
 
const Menu = () => {
  return (
    <nav>
        <ul className="flex flex-col">
            <li><NavLink to={"/"}  className={isActive =>("h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-6" + (!isActive ? " bg-active text-white":"" ))}> 
                    <span><Icon name="home" /></span>
                    Home
                </NavLink>
            </li>
            <li><NavLink to={"/search"}  className={isActive =>("h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-6" + (!isActive ? "bg-active text-white " : " "))}>
                <span><Icon name="search" /></span>
                Search
                </NavLink>
                </li>
            <li><NavLink to={"/library"}  className={isActive =>("h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-6 mb-6" + (!isActive ? "bg-active text-white " : " "))}>
                <span><Icon name="library"/></span>
                Library
                </NavLink>
                </li>

        </ul>
    </nav>
  )
}

export default Menu