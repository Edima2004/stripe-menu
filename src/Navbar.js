import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSideBar, closeSubMenu, openSubMenu } = useGlobalContext();

  const displaySubmenu = (e)=>{
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    //console.log(tempBtn, page)
    const center = (tempBtn.right + tempBtn.left)/ 2;
    const bottom = tempBtn.bottom - 3;
    const width= tempBtn.width
    openSubMenu(page, {center, bottom, width})
  }

  //useEffect(() => {
  //    let subMenuTime = setTimeout(() => {
  //      displaySubmenu();
  //    }, 1000);
  //    return () => {
  //      clearTimeout(subMenuTime);
  //    };
  //  }, [displaySubmenu]);

  const handleSubMenu= (e)=>{
    //e.target.className != link-btn// or
    if (!e.target.classList.contains('link-btn') ){
      closeSubMenu()
    }
  }
  return (
    <nav className="nav" onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className="btn signin-btn" >Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
