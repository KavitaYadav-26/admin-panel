import React from "react";
import {
    FaUsers,
    FaBox,
    FaShoppingCart,
    FaRupeeSign,
} from "react-icons/fa";

import "../styles/Dashboard.css";
// charts
import Charts from "../components/Charts";
// cards
// import Cards from "../components/Cards";



function Dashboard() {
    return (
        <div className="dashboard">

            <h2 className="dashboard-title">Dashboard</h2>

            <p className="dashboard-subtitle">
                Welcome back, Admin
            </p>
            {/* card start */}
            <div className="row g-4">

                {/* Users */}
                <div className="col-lg-3 col-md-6">
                    <div className="stat-card">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Total Users</h6>
                                <h3>120</h3>
                            </div>

                            <FaUsers className="stat-icon" />
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="col-lg-3 col-md-6">
                    <div className="stat-card">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Products</h6>
                                <h3>50</h3>
                            </div>

                            <FaBox className="stat-icon" />
                        </div>
                    </div>
                </div>

                {/* Orders */}
                <div className="col-lg-3 col-md-6">
                    <div className="stat-card">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Orders</h6>
                                <h3>80</h3>
                            </div>

                            <FaShoppingCart className="stat-icon" />
                        </div>
                    </div>
                </div>

                {/* Revenue */}
                <div className="col-lg-3 col-md-6">
                    <div className="stat-card">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Revenue</h6>
                                <h3>₹25,000</h3>
                            </div>

                            <FaRupeeSign className="stat-icon" />
                        </div>
                    </div>
                </div>

            </div>
            {/* card end */}

            {/* charts start */}
            <div className="row mt-4">

                {/* Sales Overview */}
                <div className="col-lg-8 mb-4">

                    <div className="chart-box">

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <h5 className="mb-0 fw-bold">Sales Overview</h5>

                            <select className="form-select w-auto">
                                <option>This Month</option>
                                <option>Last Month</option>
                                <option>This Year</option>
                            </select>

                        </div>

                        <div className="chart-placeholder">
                            <Charts />
                        </div>

                    </div>

                </div>

                {/* Recent Users */}
                <div className="col-lg-4">

                    <div className="activity-box">

                        <h5 className="fw-bold mb-4">Recent Users</h5>

                        <div className="d-flex justify-content-between mb-3">
                            <div>
                                <h6 className="mb-0">Rahul Sharma</h6>
                                <small className="text-muted">UI Designer</small>
                            </div>
                            <span className="badge bg-orange">Active</span>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <div>
                                <h6 className="mb-0">Priya Singh</h6>
                                <small className="text-muted">Frontend Developer</small>
                            </div>
                            <span className="badge bg-warning m-auto text-dark">Pending</span>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <div>
                                <h6 className="mb-0">Amit Verma</h6>
                                <small className="text-muted">Backend Developer</small>
                            </div>
                            <span className="badge bg-primary m-auto">New</span>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div>
                                <h6 className="mb-0">Sneha Gupta</h6>
                                <small className="text-muted">HR Manager</small>
                            </div>
                            <span className="badge bg-danger m-auto">Offline</span>
                        </div>

                    </div>

                </div>

            </div>
            {/* charts end */}

            {/* orders start */}
            <div className="row mt-4">

                <div className="col-12">

                    <div className="orders-box">

                        <div className="d-flex justify-content-between align-items-center mb-3">

                            <h5 className="fw-bold mb-0">
                                Recent Orders
                            </h5>

                            <button className="btn btn-warning text-white">
                                View All
                            </button>

                        </div>

                        <table className="table align-middle">

                            <thead>

                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Product</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                </tr>

                            </thead>

                            <tbody>

                                <tr>
                                    <td>#1001</td>
                                    <td>Rahul Sharma</td>
                                    <td>Laptop</td>
                                    <td><span className="badge bg-success">Completed</span></td>
                                    <td>₹65,000</td>
                                </tr>

                                <tr>
                                    <td>#1002</td>
                                    <td>Priya Singh</td>
                                    <td>Headphones</td>
                                    <td><span className="badge bg-warning text-dark">Pending</span></td>
                                    <td>₹3,500</td>
                                </tr>

                                <tr>
                                    <td>#1003</td>
                                    <td>Amit Verma</td>
                                    <td>Monitor</td>
                                    <td><span className="badge bg-danger">Cancelled</span></td>
                                    <td>₹18,000</td>
                                </tr>

                                <tr>
                                    <td>#1004</td>
                                    <td>Sneha Gupta</td>
                                    <td>Keyboard</td>
                                    <td><span className="badge bg-primary">Processing</span></td>
                                    <td>₹2,200</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>
            {/* orders ends */}
        </div>
    );
}

export default Dashboard;