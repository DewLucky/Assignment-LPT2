import React from "react";

import deselect from '../../images/deselect.svg'
import download from '../../images/download.svg'
import ApplicantsCard from "./ApplicantsCard";

export default function ApplicantsContainer() {

    const applicantsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    

  return (
    <>
      <div className="applicants-container">
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
        <div className="applicants-list-container">
            {
                applicantsArray.map((e)=>{
                return (
                    <ApplicantsCard/>
                )
                })
        }
        </div>
      </div>
    </>
  );
}
