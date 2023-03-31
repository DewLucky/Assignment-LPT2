import React from "react";
import searchIcon from "../../images/search-icon.svg";
import bellIcon from "../../images/bell-icon.svg";
import userImg from "../../images/user-image.jpg";
import logout from "../../images/logout.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="left-menu">
            <div className="search-bar">
              <img src={searchIcon} alt="" />
              <input
                className="input-field"
                type="text"
                placeholder="Search Jobs and Applications..."
              />
            </div>
          </div>
          <div className="right-menu">
            <img src={bellIcon} alt="" />
            <div className="user-details">
              <img className="userImg" src={userImg} alt="user-image" />
              <div className="user-info">
                <p className="user-name">Riley Cooper</p>
                <p className="user-compnay">Acme International</p>
              </div>
            </div>
            <div className="jobsite-container">
              <a href="#">
                <img src={logout} alt="" />
              </a>
              <p className="jobsite-title">Jobsite</p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
