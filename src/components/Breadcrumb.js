import React from "react";
import "../assets/styles/Breadcrumb.scss";

export default function Breadcrumb(props) {

  return (
    <div className="breadcrumb">
      { props.categories.map((category, index) => {
        let separator;
        if (index + 1 < props.categories.length) {
          separator = <span className="breadcrumb-separator"> &gt; </span>;
        }
        return (
          <>
            <span className="breadcrumb-item">{category}</span>
            {separator}
          </>
        )
      })}
    </div>
  )
}