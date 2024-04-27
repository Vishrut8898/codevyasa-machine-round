import React from "react";
import { tabs } from "./duck/constants";

import CustomButton from "../commonComponents/CustomButton";
import "./style.scss";

const Tabs = () => {
  return (
    <ul className="tabs-container">
      {tabs.map((tab, i) => (
        <li key={`tab-${i}`}>
          <CustomButton
            hasIcon={false}
            variant={tab.variant}
            title={tab.title}
            label={tab.label}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
