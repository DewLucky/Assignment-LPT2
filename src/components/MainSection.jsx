import React from "react";
import user from '../../images/account.png'
import JobSearch from "./JobSearch";
import MyJobs from "./MyJobs";
import Suggested from "./Suggested";
import Upcoming from "./Upcoming";
import Header from './Header'
import Applications from "./Applications";

const Main = () => {

    const [appliedFilter, setAppliedFilter] = React.useState([]);

    // console.log(cities);

    function handleSelect(event){
        // console.log("something changed")
        // console.log(event.target)
        const {name, value, type} = event.target;
        // console.log(name)
    }



  return (
<section className="main-section">
  <Header></Header>
  
  <Applications/>
</section>
  );
};

export default Main;
