import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import {useLocation} from "react-router-dom";
import Search from "./Navbar/Search";

const Navbar = () => {
  
  const searchRoute = useLocation('/search');

  return (
    <div className='h-[3.75.rem] flex items-center justify-between px-8 pt-5'>

      
      <Navigation/>
      {searchRoute.pathname ==='/search' && <Search/>}
      <Auth/>
      
      </div>
  )
}

export default Navbar