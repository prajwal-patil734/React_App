// OrderTable.js

//import React, { useState, useEffect } from "react";
// Import the refresh icon
import "./OrderTable.css";
import download from "./download.png";
import shop from "./shop.png";
import rectangle from "./rectangle.png";
const OrderTable = ({ currentData }) => {
  return (
    <div className="order-table-container">
      <div className="refresh-button">
        <img src={download} alt="Refresh" /> Refresh
      </div>
      <table className="order-table">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Channel</th>
            <th className="th">TKN</th>
            <th className="th">Order Date</th>
            <th className="th">City</th>
            <th className="th">Customer Name</th>
            <th className="th">Order Value</th>
            <th className="th">Status</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        <tbody className="gap">
          {currentData.map((order) => (
            <tr className="num" key={order.orderNo}>
              <td className="rec">
                <img src={rectangle} alt="" />
              </td>
              <td className="image1">
                <img src={shop} alt="" />
              </td>
              <td className="gg">{order.trackingNumber}</td>
              <td className="da">{order.orderDate}</td>
              <td>{order.city}</td>
              <td>{order.customerName}</td>
              <td>{order.orderValue}</td>
              <td className="btn">{order.status}</td>
              <td>
                <button>Action</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
