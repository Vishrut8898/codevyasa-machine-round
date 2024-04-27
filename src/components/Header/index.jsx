import React from "react";
import IconComponent from "../commonComponents/IconComponent";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import "./style.scss";

const Header = () => {
  return (
    <header className="header-container">
      <h2 className="heading">Products</h2>
      <div className="header-right-container">
        <IconComponent
          icon={<IoIosNotificationsOutline size="30" />}
          title="Notifications"
          className={"notification"}
        />
        <div className="header-dropdown">
          <figure>
            <img src="/src/assets/images/profile-img.jpg" alt="Profile" />
          </figure>
          <p>Matthews Gill</p>
          <IconComponent
            icon={<FaAngleDown size="16" color="#666" />}
            title="Down"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
