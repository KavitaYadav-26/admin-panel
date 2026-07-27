import React from "react";
import { FaHome, FaUsers, FaBox, FaCog } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";


function Sidebar() {
    return (
        <div className="sidebar" >
            <div className="mb-5 ">
                <h2 className="fw-bold m-0 ">
                    <span className="text-white">Core</span>
                    <span style={{ color: "#ff7a1a" }}>Admin</span>
                </h2>

                <small className="text-secondary">
                    ADMIN PANEL
                </small>
            </div>

            <ul className="nav flex-column">

                <li className="nav-item mb-3">
                    <NavLink to="/"
                         className={({ isActive }) =>
                            isActive
                                ? "nav-link active-link rounded d-flex align-items-center"
                                : "nav-link text-white d-flex align-items-center"
                        }
                    >
                        <FaHome className="me-2" />
                        Dashboard
                    </NavLink>
                </li>

                <li className="nav-item mb-3">
                    <NavLink to="/users"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active-link rounded d-flex align-items-center"
                                : "nav-link text-white d-flex align-items-center"
                        }
                    >
                        <FaUsers className="me-2" />
                        Users
                    </NavLink>
                </li>

                <li className="nav-item mb-3">
                    <NavLink to="/products"
                         className={({ isActive }) =>
                            isActive
                                ? "nav-link active-link rounded d-flex align-items-center"
                                : "nav-link text-white d-flex align-items-center"
                        }>
                        <FaBox className="me-2" />
                        Products
                    </NavLink>
                </li>

                <li className="nav-item mb-3">
                    <NavLink to="/settings"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active-link rounded d-flex align-items-center"
                                : "nav-link text-white d-flex align-items-center"
                        }
                    >
                        <FaCog className="me-2" />
                        Settings
                    </NavLink>
                </li>

            </ul>

        </div>
    );
}

export default Sidebar;