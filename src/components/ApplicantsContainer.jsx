import React from "react";
import TopContainer from "./TopContainer";
import ApplicantsCard from "./ApplicantsCard";
import applicantsData from "../data/applicantsData";

export default function ApplicantsContainer() {

  return (
    <>
      <div className="applicants-container">
        <div className="applicants-list-container">
          <TopContainer/>
          {applicantsData.map((applicant) => {
            return (
              <ApplicantsCard 
              key={applicant.id}
              userImage = {applicant.userImage}
              userName = {applicant.userName}
              position= {applicant.position}
              date = {applicant.date}
              interviewStage= {applicant.interviewStage}
              selectionChance= {applicant.selectionChance}
              />
            )
          })}
        </div>
      </div>
    </>
  );
}
