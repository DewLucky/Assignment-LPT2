import React from "react";
import user1 from '../../images/pp1.jpg'
import bookmark from '../../images/bookmark.svg'

export default function ApplicantsCard(){
    return(
        <>
            <div className="applicants-card">
            <div className="select-applicant"></div>
            <div className="applicants-detail-card">
              <div className="applied-job-details">
                <img className="user--img" src={user1} alt="" />
                <div className="bookmark-icon">
                  <img src={bookmark} alt="" />
                </div>
                <div className="applicants-details">
                  <p className="applicants-name">Chikelu Obasea</p>
                  <p className="position">Full stack Ruby on Rails Developer</p>
                </div>
                <div className="applied-date">16 sep 2018</div>
              </div>
              <div className="application-stage">
                <div>
                    <p className="application-count">New</p>
                    <div className="bottom-border">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div>
                    <p className="emoji">🙂</p>
                    <p className="selection-chance">85%</p>
                </div>
                <div className="options">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}