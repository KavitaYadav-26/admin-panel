import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import "../styles/Users.css";


function Products() {

  return (
    <div className="users-page">


      <div className="page-header">

        <h2>Products</h2>

        <p>Manage all products</p>

      </div>



      <div className="users-card">


        <table className="users-table">


          <thead>

            <tr>

              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            <tr>

              <td>Laptop</td>

              <td>Electronics</td>

              <td>₹55,000</td>

              <td>25</td>


              <td>
                <span className="status-active">
                  Available
                </span>
              </td>


              <td >

                <button className="action view">
                  <FaEye />
                </button>
                <button className="action edit">
                  <FaEdit />
                </button>

                <button className="action delete">
                  <FaTrash />
                </button>
              </td>


            </tr>


          </tbody>


        </table>


      </div>


    </div>
  );
}


export default Products;