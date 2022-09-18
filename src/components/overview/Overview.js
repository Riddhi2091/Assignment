import React from 'react'
import './Overview.css'
import Chart from './Chart';
import Inventory from './Inventory'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import addbtn from "../../assets/Add-button.png";
import order from "../../assets/order.png";
import transit from "../../assets/transit.png";
import fulfilled from "../../assets/fullfield.png";
import cancelledorder from "../../assets/cancelled-order.png";
import refresh from "../../assets/Vector.png";
import vector1 from "../../assets/Vector1.svg";
import vector2 from "../../assets/Vector2.svg";

export default function overview() {
  return (
    <div className="overview ">
      <div className="title d-flex mx-md-4">
        <p>Overview</p>
        <button className="btn add-btn">
          <img className="me-3" src={addbtn} alt="" /> Add new wine
        </button>
      </div>

      {/* card */}
      <div class="flex-container mx-md-2">
        <div className="overview-card card1 p-3">
          <div className="d-flex card-header">
            <p>Open orders</p>
            <img src={order} alt="" />
          </div>
          <h5>239</h5>
        </div>

        <div className="overview-card card2 p-3">
          <div className="d-flex card-header">
            <p>Orders in transit</p>
            <img src={transit} alt="" />
          </div>
          <h5>126</h5>
        </div>

        <div className="overview-card card3 p-3">
          <div className="d-flex card-header">
            <p>Fulfilled orders</p>
            <img src={fulfilled} alt="" />
          </div>
          <h5>1,254</h5>
        </div>

        <div className="overview-card card4 p-3">
          <div className="d-flex card-header">
            <p>Cancelled orders</p>
            <img src={cancelledorder} alt="" />
          </div>
          <h5>239</h5>
        </div>
      </div>

      {/* sales detail */}
      <div className="sales mx-md-4">
        <h5>Sales detail</h5>
        <div className="sales-overview px-2">
          <div className="sales-overview-header d-flex mt-4">
            <div className="div1">
              <h6>Total Sales Overview</h6>
              <p>7-13 Aug,2022</p>
            </div>
            <div className="div2 d-flex">
              <img className="me-2" src={refresh} alt="" />
              Refresh Metrics
              <p className="ms-4">Filter by | </p>
              <h6 className="ms-2 me-2">This Weak </h6>
              <img src={vector1} alt="" />
            </div>
          </div>
          <hr />
          <div className="sales-overview-body">
            <Row>
              <Col md={8}>
                <div className="d-flex justify-content-between">
                  <div className="div1">
                    <h3>$ 74,729.00</h3>
                    <h6 className="text-green">
                      <img src={vector2} alt="" /> +21% from last week
                    </h6>
                  </div>
                  <div className="div2">
                    <h6 className="mt-2">
                      <img src={vector2} alt="" /> Highest revenue since 2 weeks
                      ago
                    </h6>
                  </div>
                </div>
                <Chart />
              </Col>

              <Col className="col-md-3" md={{ span: 3, offset: 1 }}>
                <p>Total Profit</p>
                <h4 className="main-color">$12,545.00</h4>
                <h6 className="text-green">
                  <img src={vector2} alt="" /> +23% from last week
                </h6>
                <p className="mt-5">Total Products Sold</p>
                <h4>329</h4>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* inventory */}
      <Inventory />
      
    </div>
  );
}

