import React from "react";
import {
    FaSearch,
    FaBell,
    FaEnvelope,
    FaUserCircle,
    FaChevronDown,
    FaUser,
    FaCog,
    FaSignOutAlt,
    FaChartLine
} from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar-custom">

            <div className="search-box">

                <FaSearch className="search-icon" />

                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />

            </div>

            <div className="navbar-right">

                <button className="icon-btn">
                    <FaBell />
                </button>

                <button className="icon-btn">
                    <FaEnvelope />
                </button>

                <div className="profile">

                    <div className="dropdown">

          <button
            className="btn dropdown-toggle d-flex align-items-center"
            type="button"
            data-bs-toggle="dropdown"
          >

            <FaUserCircle size={30} className="me-2" />

            Admin

          </button>


          <ul className="dropdown-menu dropdown-menu-end">

            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>


            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>


            <li>
              <hr className="dropdown-divider" />
            </li>


            <li>
              <a className="dropdown-item text-danger" href="#">
                Logout
              </a>
            </li>

          </ul>

        </div>




                </div>

            </div>

        </nav>
    );
}

export default Navbar;