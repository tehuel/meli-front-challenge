import React from "react";
import "../assets/styles/Breadcrumb.scss";

export default function Breadcrumb({ categories }) {
  return (
    <div className="breadcrumb">
      {categories.map((category, index) => {
        let separator;
        if (index + 1 < categories.length) {
          separator = <span className="breadcrumb-separator"> &gt; </span>;
        }
        return (
          <>
            <span className="breadcrumb-item">{category}</span>
            {separator}
          </>
        );
      })}
    </div>
  );
}
