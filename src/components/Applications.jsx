import React from 'react'
import addUser from '../../images/add-user.svg'
import FiltersContainer from './FiltersContainer'
import Applicants from './ApplicantsContainer'
export default function Applications(){

    const [darkMode, setDarkMode] = React.useState(false)
    // console.log(darkMode)
    function handleClick(){
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <>

            <div className="applications-section">

                <div className="applications-section-title-container">
                    <h2>Applications</h2>
                    <p>Showing <span>45</span> from <span>180</span> total</p>
                    <img src={addUser} alt="" />
                </div>

                <div className="flex-container">
                    <div className="left">
                        <FiltersContainer
                            darkMode={darkMode}  
                            toggleDarkMode={handleClick}
                        />
                    </div>
                    <div className="right">
                        <Applicants/>
                    </div>
                </div>

            </div>
        
        </>

    )
}