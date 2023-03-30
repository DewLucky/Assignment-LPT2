import React from "react";
import info from "../../images/info-button.png";
import play from "../../images/play-logo.png";
import question from "../../images/question-logo.png";
import email from "../../images/email.png";
import rocket from "../../images/rocket.png";
import account from "../../images/account.png";
import brand from '../../images/brand-logo.webp'
import searchIcon from '../../images/search-icon.svg'
import bellIcon from '../../images/bell-icon.svg'
import userImg from '../../images/user-image.jpg'
import logout from '../../images/logout.svg'

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
                placeholder='Search Jobs and Applications...'
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
              <a href="#"><img src={logout} alt="" /></a>
              <p className="jobsite-title">Jobsite</p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
