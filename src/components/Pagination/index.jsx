import React from "react";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa6";

import "./style.scss";

const Pagination = () => {
  const currentPage = 2;
  const totalPages = 10;
  const pages = [];

  pages.push(
    <li className={currentPage === 1 ? "active" : ""} key={`pagination-1`}>
      1
    </li>,
    <li className={currentPage === 2 ? "active" : ""} key={`pagination-2`}>
      2
    </li>
  );

  for (
    let i = Math.max(3, currentPage - 1);
    i <= Math.min(totalPages - 1, currentPage + 1);
    i++
  ) {
    pages.push(
      <li className={currentPage === i ? "active" : ""} key={i}>
        {i}
      </li>
    );
  }

  if (currentPage < totalPages - 1) {
    pages.push(<span key="ellipsis2">...</span>);
  }

  if (totalPages > 1) {
    pages.push(
      <li
        className={currentPage === totalPages ? "active" : ""}
        key={totalPages}
      >
        {totalPages}
      </li>
    );
  }

  return (
    <div className="pagination-container">
      <FaAnglesLeft
        size="12"
        color="666"
        className="left-arrows"
        title="First Page"
      />
      <FaAngleLeft
        size="12"
        color="666"
        className="left-arrow"
        title="Prev Page"
      />
      <ul>{pages}</ul>
      <FaAngleRight
        size="12"
        color="666"
        className="right-arrow"
        title="Next Page"
      />
      <FaAnglesRight
        size="12"
        color="666"
        className="right-arrows"
        title="Last Page"
      />
    </div>
  );
};

export default Pagination;
