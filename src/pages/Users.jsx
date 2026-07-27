import React from "react";
import "../styles/Users.css";
import { 
  FaEye, 
  FaEdit, 
  FaTrash 
} from "react-icons/fa";

function Users() {
  return (
    <div className="users-page">

      <div className="page-header">
        <h2>Users</h2>
        <p>Manage all registered users</p>
      </div>


      <div className="users-card">

        <table  className="users-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>
              <button className="action view">
                        <FaEye/>
                      </button>
                      <button className="action edit">
                        <FaEdit/>
                      </button>

                      <button className="action delete">
                        <FaTrash/>
                      </button>
            </td>
          </tbody>
        </table>

      </div>


    </div>
  );
}

export default Users;