import React from "react";
import user1 from "../../images/pp1.svg";
import bookmark from "../../images/bookmark.svg";

export default function ApplicantsCard(props) {

  const {userImage, userName, position, date, interviewStage, selectionChance} = props;


  return (
    <>
      <div className="applicants-card">
        <div className="select-applicant"></div>
        <div className="applicants-detail-card">
          <div className="applied-job-details">
            <img className="user--img" src={`../../images/` + userImage} alt="" />
            <div className="bookmark-icon">
              <img src={bookmark} alt="" />
            </div>
            <div className="applicants-details">
              <p className="applicants-name">{userName}</p>
              <p className="position">{position}</p>
            </div>
            <div className="applied-date">{date}</div>
          </div>
          <div className="application-stage">
            <div>
              <p className="application-count">{interviewStage}</p>
              <div className="bottom-border">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            
            <div className="options-container">
              <div>
                <p className="emoji">🙂</p>
                <p className="selection-chance">{selectionChance}%</p>
              </div>
              <div className="options">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
