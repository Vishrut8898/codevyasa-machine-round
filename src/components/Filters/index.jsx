import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";

import { MyContext } from "../../contextApi/MyContext";
import IconComponent from "../commonComponents/IconComponent";

import "./style.scss";

const Filters = () => {
  const { openFilter, setFilterOpen } = useContext(MyContext);
  return (
    <div className="filter-container">
      <div className="filter-header">
        <h3>Filters</h3>
        <IconComponent
          icon={<RxCross2 size="25" color="#666" />}
          title="Close"
          handleClick={() => setFilterOpen(!openFilter)}
        />
      </div>
      <form action="#FIXME">
        <div className="prod-name">
          <span>Product Name</span>
          <input
            type="text"
            name="prod-name"
            placeholder="Product Name"
            value="Test Product Name"
            onChange={() => {}}
          />
        </div>
        <div className="category">
          <span>Category</span>
          <div className="select-box">
            <select name="category" defaultValue="category">
              <option value="category" disabled>
                Category
              </option>
              <option value="category-1">Category 1</option>
              <option value="category-2">Category 2</option>
              <option value="category-3">Category 3</option>
            </select>
            <FaAngleDown size="20" color="#666" />
          </div>
        </div>
        <div className="event-name">
          <span>Event Name</span>
          <input type="text" name="event-name" placeholder="Event Name" />
        </div>
        <div className="match-name">
          <span>Match Name</span>
          <input
            type="text"
            name="match-name"
            placeholder="Match Name"
            value="Test Match Name"
            onChange={() => {}}
          />
        </div>
        <div className="team">
          <span>Team</span>
          <div className="select-box">
            <select name="team" defaultValue="team">
              <option value="team">Team</option>
              <option value="team-1">team 1</option>
              <option value="team-2">team 2</option>
              <option value="team-3">team 3</option>
            </select>
            <FaAngleDown size="20" color="#666" />
          </div>
        </div>
        <div className="filter-submit">
          <input type="submit" value="Apply" />
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
};

export default Filters;
