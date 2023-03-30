import React from 'react'
import hamburger from '../../images/hamburger.svg'
import dashboard from '../../images/dashboard.svg'
import myjobsIcon from '../../images/jobs-icon.svg'
import messagesIcon from '../../images/messages.svg'
import calander from '../../images/calander.svg'
import logoutIcon from '../../images/logout.svg'
import user from '../../images/user.svg'
import stats from '../../images/stats-icon.svg'
import brush from '../../images/brush.svg'
import settings from '../../images/settings.svg'
import jobTooli from '../../images/job-tooli.svg'

function Leftsidebar() {
    return (
        <section className='left-sidebar'>
            <div className="sidebar-items">

                <div className='hamburger-container'>
                    <img src={jobTooli} alt="hamburger-icon" />
                </div>

                <div className='dashboard-container'>
                    <div className='dashboard-item'>
                        <img src={dashboard} alt="dashboard-icon" />
                    </div>

                    <div className='dashboard-item'>
                        <img src={user} alt="jobs-icon" />
                    </div>

                    <div className='dashboard-item'>
                        <img src={myjobsIcon} alt="jobs-icon" />
                    </div>

                    <div className='dashboard-item'>
                        <img src={stats} alt="messages-icon" />
                    </div>

                    <div className='dashboard-item'>
                        <img src={brush} alt="calander-icon" />
                    </div>

                    <div className='dashboard-item'>
                        <img src={settings} alt="calander-icon" />
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Leftsidebar;