import React from "react";
import addUser from "../../images/add-user.svg";
import FiltersContainer from "./FiltersContainer";
import Applicants from "./ApplicantsContainer";
export default function Applications() {
  return (
    <>
      <div className="applications-section">
        <div className="applications-section-title-container">
          <h2>Applications</h2>
          <img src={addUser} alt="" />
        </div>

        <div className="flex-container">
          <div className="left">
            <FiltersContainer />
          </div>
          <div className="right">
            <p className="shown-data">
              Showing <span>45</span> from <span>180</span> total
            </p>
            <Applicants />
          </div>
        </div>
      </div>
    </>
  );
}
