import React from "react";

import IconComponent from "../../../commonComponents/IconComponent";
import "./style.scss";

const SidebarItem = (props) => {
  const { size, color, title, icon } = props;
  const renderIcon = (Component) => <Component size={size} color={color} />;

  return (
    <li className="side-bar-item">
      <IconComponent icon={renderIcon(icon)} title={title} />
    </li>
  );
};

export default SidebarItem;
