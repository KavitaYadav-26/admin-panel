import React from "react";

function Login() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">

      <div className="card shadow p-4" style={{ width: "400px" }}>

        <h3 className="text-center mb-4">
          Admin Login
        </h3>

        <div className="mb-3">
          <label>Email</label>

          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>

          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <button className="btn btn-warning w-100">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;