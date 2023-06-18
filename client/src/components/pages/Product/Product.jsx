import React, { useState } from 'react';
import "./Product.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
const Product = () => {
    const handleSubmit = () => {
        
    }
   
  return (
      <div>
          <div className="main_div1">
              <div className="box1">
                  <span className="bordreLine1"></span>
                  <form action="" onSubmit={handleSubmit}>
                      <h2>Product Creation Page</h2>
                      <div className="inputBox1">
                          <input
                              type="text"
                              onChange={(e) => (e.target.value)}
                              value={""}
                          />

                          <span>Product Title</span>
                          <i></i>
                      </div>
                      <div className="inputBox1">
                          <input
                              type="text"
                              onChange={(e) => (e.target.value)}
                              value={""}
                          />
                          <span>Product Image</span>
                          <i></i>
                      </div>
                      <div className="inputBox1">
                          <input
                              type="text"
                              onChange={(e) => (e.target.value)}
                              value={""}
                          />
                          <span>Product Description</span>
                          <i></i>
                      </div>
                      <div className="inputBox1">
                          <input
                              type="text"
                              onChange={(e) => (e.target.value)}
                              value={""}
                          />
                          <span>Product Price</span>
                          <i></i>
                      </div>
                      
                      <input type="submit" />
                  </form>
                  <ToastContainer />
              </div>
          </div>
      </div>
  )
}

export default Product