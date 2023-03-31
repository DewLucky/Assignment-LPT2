import React from "react";
import deselect from "../../images/deselect.svg";
import download from "../../images/download.svg";

export default function TopContainer() {
  return (
    <>
      <div className="top-container">
        <div className="deselect-container">
          <img src={deselect} alt="" />
          <p>
            deselect <span>3</span> rows
          </p>
        </div>

        <div className="sort-by-container">
          <select className="sort-by-element">
            <option value="">Sort by: newest first</option>
          </select>
        </div>

        <div className="bulk-actions-container">
          <img src={download} alt="" />
          <select
            className="bulk-actions-element"
            name="bulk-actions"
            id="bulk-actions"
          >
            <option value="bulk-actions">Bulk Actions</option>
          </select>
        </div>
      </div>
    </>
  );
}
