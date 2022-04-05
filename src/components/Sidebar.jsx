import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaChalkboardTeacher,FaBriefcaseMedical } from 'react-icons/fa';
import { BsPerson, BsWhatsapp } from 'react-icons/bs';
import { CgLogOut } from 'react-icons/cg';
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import "../styles/layout.css"
// import { IoMedicalSharp } from 'react-icons/io';


const SideBar = () => {
    return (
        <nav className='side_nav_bar_wrapper'>
            <div style={{marginBottom:'30px',fontSize:'24px'}}>
                <MdOutlineDashboardCustomize/>
                <span>Dashboard</span>
            </div>
            <div className="side_navigation_menu">
                <p>
                    <AiOutlineStar className="side_bar_icons"/> <span>Rating</span>
                </p>
                <p>
                    <FaChalkboardTeacher className="side_bar_icons"/> <span>Coach</span></p>
                <p>
                    <BsPerson className="side_bar_icons"/> <span>Customers</span> </p>
                <p>
                    <BsWhatsapp className="side_bar_icons"/> <span>Chat</span> </p>
                <p>
                    <FaBriefcaseMedical className="side_bar_icons"/> <span>Zury</span> </p>
                <p>
                    <CgLogOut className="side_bar_icons"/> <span>Logout</span>
                </p>
            </div>
        </nav>
    );
};


export default SideBar;
