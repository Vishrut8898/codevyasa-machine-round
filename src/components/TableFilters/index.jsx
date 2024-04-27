import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { SlCloudDownload } from "react-icons/sl";

import CustomButton from "../commonComponents/CustomButton";

import { MyContext } from "../../contextApi/MyContext";

import "./style.scss";

const TableFilters = () => {
  const { openFilter, setFilterOpen } = useContext(MyContext);
  return (
    <div className="table-filters">
      <div className="search-container">
        <small>Search</small>
        <div className="search-box">
          <CiSearch size={20} color="#acacac" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right-table-filters">
        <CustomButton
          className={"add-product"}
          hasIcon={true}
          leftIcon={<FaPlus size={20} />}
          title={"Add Product"}
          label={"Add Product"}
          variant={"secondary"}
        />
        <CustomButton
          className={"filter"}
          hasIcon={true}
          leftIcon={<IoFilterOutline color="#a78650" size={20} />}
          title={"Filter"}
          label={"Filter"}
          variant={"tertiary"}
          onClick={() => setFilterOpen(!openFilter)}
        />
        <CustomButton
          className={"export"}
          hasIcon={true}
          leftIcon={<SlCloudDownload color="#666" size={20} />}
          title={"Export"}
          label={"Export"}
          variant={"primary"}
        />
      </div>
    </div>
  );
};

export default TableFilters;
