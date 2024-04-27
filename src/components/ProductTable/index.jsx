import React from "react";

import { LuChevronsDownUp } from "react-icons/lu";
import { tableHeaders, tableItemsData } from "./duck/constants";

import Pagination from "../Pagination";

import "./style.scss";

const ProductTable = () => {
  return (
    <>
      <section className="table-section">
        <table className="table-container">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              {tableHeaders.map((elem, i) => (
                <th key={`table-header-${i}`}>
                  <span>{elem}</span>
                  <LuChevronsDownUp size="14" color="#333" title="Sort" />
                </th>
              ))}
              <th>
                <span>...</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableItemsData.map((item, i) => (
              <tr key={`table-item-${i}`}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.serialNo} .</td>
                <td>{item.firstItem}</td>
                <td>{item.secondItem}</td>
                <td>{item.thirdItem}</td>
                <td>{item.fourthItem}</td>
                <td>{item.fifthItem}</td>
                <td>{item.sixthItem}</td>
                <td>
                  <span>...</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Pagination />
    </>
  );
};

export default ProductTable;
