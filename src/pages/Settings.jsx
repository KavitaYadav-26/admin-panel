import React from "react";
import { FaUser, FaLock, FaBell, FaPalette } from "react-icons/fa";
import "../styles/Settings.css";


function Settings() {

    return (

        <div className="settings-page">


            <div className="page-header">

                <h2>Settings</h2>

                <p>Manage your account preferences</p>

            </div>



            <div className="settings-card">


                {/* Profile Settings */}
                <div className="setting-section">

                    <div className="setting-icon">
                        <FaUser />
                    </div>

                    <div>
                        <h5>Profile Settings</h5>
                        <p>Update your personal information</p>
                    </div>

                </div>



                {/* Security */}
                <div className="setting-section">

                    <div className="setting-icon">
                        <FaLock />
                    </div>

                    <div>
                        <h5>Security</h5>
                        <p>Change password and security options</p>
                    </div>

                </div>




                {/* Notifications */}
                <div className="setting-section">

                    <div className="setting-icon">
                        <FaBell />
                    </div>

                    <div>
                        <h5>Notifications</h5>
                        <p>Manage notification preferences</p>
                    </div>

                </div>




                {/* Theme */}
                <div className="setting-section">

                    <div className="setting-icon">
                        <FaPalette />
                    </div>

                    <div>
                        <h5>Appearance</h5>
                        <p>Customize dashboard theme</p>
                    </div>

                </div>


            </div>


        </div>

    );
}


export default Settings;