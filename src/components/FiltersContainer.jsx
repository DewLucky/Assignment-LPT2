import React from "react";

export default function FitersContainer() {
  const [toggleRejected, setToggleRejected] = React.useState(true);

  const [onlySubscribedOn, setOnlySubscribedOn] = React.useState(false);

  function handleToggleRejected() {
    setToggleRejected((prev) => !prev);
  }

  function handleOnlySubscribedOn() {
    setOnlySubscribedOn((prev) => !prev);
  }

  return (
    <>
      <div className="filters-container">
        <div className="filter-options-container">
          <h3 className="filters-title">Filters</h3>
          <div
            className={`show-rejected-applications ${
              toggleRejected ? `on` : `off`
            }`}
          >
            <div className="toggler">
              <div className="toggler--slider" onClick={handleToggleRejected}>
                <div className="toggler--slider--circle"></div>
              </div>
            </div>
            <p>Show rejected applications</p>
          </div>
          <div
            className={`show-subscribed-applications ${
              onlySubscribedOn ? `on` : `off`
            }`}
          >
            <div className="toggler">
              <div className="toggler--slider" onClick={handleOnlySubscribedOn}>
                <div className="toggler--slider--circle"></div>
              </div>
            </div>
            <p>Show only subscribed applications</p>
          </div>

          <div className="jobs-division">
            <h2>JOBS</h2>
            <ul>
              <li>JOB DOMAIN</li>
              <li>SCORE</li>
              <li>APPLICATION DATE</li>
              <li>TAGS</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
