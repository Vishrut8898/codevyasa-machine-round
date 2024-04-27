import React from "react";
import "./style.scss";

import PrimaryLogo from "../commonComponents/PrimaryLogo";
import SidebarItem from "./components/SidebarItem";
import { SidebarItems } from "./duck/contants";

const Sidebar = () => {
  return (
    <aside className="side-bar">
      <PrimaryLogo />
      <ul className="side-bar-items">
        {SidebarItems.map((item, i) => (
          <SidebarItem
            key={`side-bar-item-${i}`}
            size={item.size}
            color={item.color}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
