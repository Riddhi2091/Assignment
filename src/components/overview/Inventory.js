import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import img1 from "../../assets/inventory1.png";
import edit from "../../assets/Edit.png";
import deleteicon from "../../assets/Delete.png"

import './Inventory.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Inventory() {
  return (
    <div className="inventory mx-md-4 mt-5 mb-5">
      <h5 className="mb-3">Inventory</h5>
      <Row className="investory-heading">
        <Col className="ps-3" md={4}>
          <input className="me-4" type="checkbox" />
          PRODUCT
        </Col>
        <Col md={2}>RATING</Col>
        <Col md={1}>VINTAGE</Col>
        <Col md={1}>QTY</Col>
        <Col md={2}>VOLUME</Col>
        <Col md={1}>COST</Col>
        <Col md={1}>PRICE</Col>
      </Row>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="mt-3">
            <div className="container-fluid">
              <Row className="investory-items">
                <Col className="d-flex" md={4}>
                  <input className="me-4 mt-3 ms-1" type="checkbox" />
                  <img className="me-2" src={img1} alt="" />
                  <div className="div1">
                    <h6>Staglin Family Vineyard...</h6>
                    <p>United States · California · Blends</p>
                  </div>
                </Col>
                <Col md={2}>
                  <span className="rating">RP 95 </span>{" "}
                  <span className="rating2 rating"> +3 </span>
                </Col>
                <Col md={1}>1950's</Col>
                <Col md={1}>04</Col>
                <Col md={2}>Standard (750 mL)</Col>
                <Col md={1}> $56.95</Col>
                <Col md={1}> $59.95</Col>
              </Row>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col className="ps-md-4" md={4}>
                <h6>Staglin Family Vineyard...</h6>
                <span className="d-flex">
                  Region:{" "}
                  <p className="mt-1"> United States · California · Blends</p>
                </span>
              </Col>
              <Col md={2}>Vintage: 2010</Col>
              <Col md={{ span: 3, offset: 3 }} className="d-flex text-center">
                <a href="#" className="mt-2 text-dangours me-2">
                  View More
                </a>
                <img className="ps-md-3 edit" src={edit} alt="" />
                <img className="delete" src={deleteicon} alt="" />
              </Col>
            </Row>
            <hr />

            <Row className="ps-md-3">
              <Col md={3}>
                <p className="mt-2">Rating</p>
                <h6 className="text-dark">James Suckling's</h6>
                <span className="rating">JS 95</span>
                <h6 className="text-dark">Wine Spectator Tasting</h6>

                <span className="rating">WS 79</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Robert Parker</h6>
                <span className="rating">RP 80</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Antonio Galloni’s</h6>
                <span className="rating">---</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark"> Possimus</h6>
                <span className="stock-lable">43 units</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Downtown Condo</h6>
                <span className="stock-lable">95 units</span>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        {/* we can also use map data through jsonfile */}

        
        <Accordion.Item eventKey="1">
          <Accordion.Header className="mt-3">
            <div className="container-fluid">
              <Row className="investory-items">
                <Col className="d-flex" md={4}>
                  <input className="me-4 mt-3 ms-1" type="checkbox" />
                  <img className="me-2" src={img1} alt="" />
                  <div className="div1">
                    <h6>Staglin Family Vineyard...</h6>
                    <p>United States · California · Blends</p>
                  </div>
                </Col>
                <Col md={2}>
                  <span className="rating">RP 95 </span>{" "}
                  <span className="rating2 rating"> +3 </span>
                </Col>
                <Col md={1}>1950's</Col>
                <Col md={1}>04</Col>
                <Col md={2}>Standard (750 mL)</Col>
                <Col md={1}> $56.95</Col>
                <Col md={1}> $59.95</Col>
              </Row>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col className="ps-md-4" md={4}>
                <h6>Staglin Family Vineyard...</h6>
                <span className="d-flex">
                  Region:{" "}
                  <p className="mt-1"> United States · California · Blends</p>
                </span>
              </Col>
              <Col md={2}>Vintage: 2010</Col>
              <Col md={{ span: 3, offset: 3 }} className="d-flex text-center">
                <a href="#" className="mt-2 text-dangours me-2">
                  View More
                </a>
                <img className="ps-md-3 edit" src={edit} alt="" />
                <img className="delete" src={deleteicon} alt="" />
              </Col>
            </Row>
            <hr />

            <Row className="ps-md-3">
              <Col md={3}>
                <p className="mt-2">Rating</p>
                <h6 className="text-dark">James Suckling's</h6>
                <span className="rating">JS 95</span>
                <h6 className="text-dark">Wine Spectator Tasting</h6>

                <span className="rating">WS 79</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Robert Parker</h6>
                <span className="rating">RP 80</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Antonio Galloni’s</h6>
                <span className="rating">---</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark"> Possimus</h6>
                <span className="stock-lable">43 units</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Downtown Condo</h6>
                <span className="stock-lable">95 units</span>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header className="mt-3">
            <div className="container-fluid">
              <Row className="investory-items">
                <Col className="d-flex" md={4}>
                  <input className="me-4 mt-3 ms-1" type="checkbox" />
                  <img className="me-2" src={img1} alt="" />
                  <div className="div1">
                    <h6>Staglin Family Vineyard...</h6>
                    <p>United States · California · Blends</p>
                  </div>
                </Col>
                <Col md={2}>
                  <span className="rating">RP 95 </span>{" "}
                  <span className="rating2 rating"> +3 </span>
                </Col>
                <Col md={1}>1950's</Col>
                <Col md={1}>04</Col>
                <Col md={2}>Standard (750 mL)</Col>
                <Col md={1}> $56.95</Col>
                <Col md={1}> $59.95</Col>
              </Row>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col className="ps-md-4" md={4}>
                <h6>Staglin Family Vineyard...</h6>
                <span className="d-flex">
                  Region:{" "}
                  <p className="mt-1"> United States · California · Blends</p>
                </span>
              </Col>
              <Col md={2}>Vintage: 2010</Col>
              <Col md={{ span: 3, offset: 3 }} className="d-flex text-center">
                <a href="#" className="mt-2 text-dangours me-2">
                  View More
                </a>
                <img className="ps-md-3 edit" src={edit} alt="" />
                <img className="delete" src={deleteicon} alt="" />
              </Col>
            </Row>
            <hr />

            <Row className="ps-md-3">
              <Col md={3}>
                <p className="mt-2">Rating</p>
                <h6 className="text-dark">James Suckling's</h6>
                <span className="rating">JS 95</span>
                <h6 className="text-dark">Wine Spectator Tasting</h6>

                <span className="rating">WS 79</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Robert Parker</h6>
                <span className="rating">RP 80</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Antonio Galloni’s</h6>
                <span className="rating">---</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark"> Possimus</h6>
                <span className="stock-lable">43 units</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Downtown Condo</h6>
                <span className="stock-lable">95 units</span>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header className="mt-3">
            <div className="container-fluid">
              <Row className="investory-items">
                <Col className="d-flex" md={4}>
                  <input className="me-4 mt-3 ms-1" type="checkbox" />
                  <img className="me-2" src={img1} alt="" />
                  <div className="div1">
                    <h6>Staglin Family Vineyard...</h6>
                    <p>United States · California · Blends</p>
                  </div>
                </Col>
                <Col md={2}>
                  <span className="rating">RP 95 </span>{" "}
                  <span className="rating2 rating"> +3 </span>
                </Col>
                <Col md={1}>1950's</Col>
                <Col md={1}>04</Col>
                <Col md={2}>Standard (750 mL)</Col>
                <Col md={1}> $56.95</Col>
                <Col md={1}> $59.95</Col>
              </Row>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col className="ps-md-4" md={4}>
                <h6>Staglin Family Vineyard...</h6>
                <span className="d-flex">
                  Region:{" "}
                  <p className="mt-1"> United States · California · Blends</p>
                </span>
              </Col>
              <Col md={2}>Vintage: 2010</Col>
              <Col md={{ span: 3, offset: 3 }} className="d-flex text-center">
                <a href="#" className="mt-2 text-dangours me-2">
                  View More
                </a>
                <img className="ps-md-3 edit" src={edit} alt="" />
                <img className="delete" src={deleteicon} alt="" />
              </Col>
            </Row>
            <hr />

            <Row className="ps-md-3">
              <Col md={3}>
                <p className="mt-2">Rating</p>
                <h6 className="text-dark">James Suckling's</h6>
                <span className="rating">JS 95</span>
                <h6 className="text-dark">Wine Spectator Tasting</h6>

                <span className="rating">WS 79</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Robert Parker</h6>
                <span className="rating">RP 80</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Antonio Galloni’s</h6>
                <span className="rating">---</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark"> Possimus</h6>
                <span className="stock-lable">43 units</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Downtown Condo</h6>
                <span className="stock-lable">95 units</span>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header className="mt-3">
            <div className="container-fluid">
              <Row className="investory-items">
                <Col className="d-flex" md={4}>
                  <input className="me-4 mt-3 ms-1" type="checkbox" />
                  <img className="me-2" src={img1} alt="" />
                  <div className="div1">
                    <h6>Staglin Family Vineyard...</h6>
                    <p>United States · California · Blends</p>
                  </div>
                </Col>
                <Col md={2}>
                  <span className="rating">RP 95 </span>{" "}
                  <span className="rating2 rating"> +3 </span>
                </Col>
                <Col md={1}>1950's</Col>
                <Col md={1}>04</Col>
                <Col md={2}>Standard (750 mL)</Col>
                <Col md={1}> $56.95</Col>
                <Col md={1}> $59.95</Col>
              </Row>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col className="ps-md-4" md={4}>
                <h6>Staglin Family Vineyard...</h6>
                <span className="d-flex">
                  Region:{" "}
                  <p className="mt-1"> United States · California · Blends</p>
                </span>
              </Col>
              <Col md={2}>Vintage: 2010</Col>
              <Col md={{ span: 3, offset: 3 }} className="d-flex text-center">
                <a href="#" className="mt-2 text-dangours me-2">
                  View More
                </a>
                <img className="ps-md-3 edit" src={edit} alt="" />
                <img className="delete" src={deleteicon} alt="" />
              </Col>
            </Row>
            <hr />

            <Row className="ps-md-3">
              <Col md={3}>
                <p className="mt-2">Rating</p>
                <h6 className="text-dark">James Suckling's</h6>
                <span className="rating">JS 95</span>
                <h6 className="text-dark">Wine Spectator Tasting</h6>

                <span className="rating">WS 79</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Robert Parker</h6>
                <span className="rating">RP 80</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Antonio Galloni’s</h6>
                <span className="rating">---</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark"> Possimus</h6>
                <span className="stock-lable">43 units</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Downtown Condo</h6>
                <span className="stock-lable">95 units</span>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header className="mt-3">
            <div className="container-fluid">
              <Row className="investory-items">
                <Col className="d-flex" md={4}>
                  <input className="me-4 mt-3 ms-1" type="checkbox" />
                  <img className="me-2" src={img1} alt="" />
                  <div className="div1">
                    <h6>Staglin Family Vineyard...</h6>
                    <p>United States · California · Blends</p>
                  </div>
                </Col>
                <Col md={2}>
                  <span className="rating">RP 95 </span>{" "}
                  <span className="rating2 rating"> +3 </span>
                </Col>
                <Col md={1}>1950's</Col>
                <Col md={1}>04</Col>
                <Col md={2}>Standard (750 mL)</Col>
                <Col md={1}> $56.95</Col>
                <Col md={1}> $59.95</Col>
              </Row>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col className="ps-md-4" md={4}>
                <h6>Staglin Family Vineyard...</h6>
                <span className="d-flex">
                  Region:{" "}
                  <p className="mt-1"> United States · California · Blends</p>
                </span>
              </Col>
              <Col md={2}>Vintage: 2010</Col>
              <Col md={{ span: 3, offset: 3 }} className="d-flex text-center">
                <a href="#" className="mt-2 text-dangours me-2">
                  View More
                </a>
                <img className="ps-md-3 edit" src={edit} alt="" />
                <img className="delete" src={deleteicon} alt="" />
              </Col>
            </Row>
            <hr />

            <Row className="ps-md-3">
              <Col md={3}>
                <p className="mt-2">Rating</p>
                <h6 className="text-dark">James Suckling's</h6>
                <span className="rating">JS 95</span>
                <h6 className="text-dark">Wine Spectator Tasting</h6>

                <span className="rating">WS 79</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Robert Parker</h6>
                <span className="rating">RP 80</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Antonio Galloni’s</h6>
                <span className="rating">---</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark"> Possimus</h6>
                <span className="stock-lable">43 units</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Downtown Condo</h6>
                <span className="stock-lable">95 units</span>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header className="mt-3">
            <div className="container-fluid">
              <Row className="investory-items">
                <Col className="d-flex" md={4}>
                  <input className="me-4 mt-3 ms-1" type="checkbox" />
                  <img className="me-2" src={img1} alt="" />
                  <div className="div1">
                    <h6>Staglin Family Vineyard...</h6>
                    <p>United States · California · Blends</p>
                  </div>
                </Col>
                <Col md={2}>
                  <span className="rating">RP 95 </span>{" "}
                  <span className="rating2 rating"> +3 </span>
                </Col>
                <Col md={1}>1950's</Col>
                <Col md={1}>04</Col>
                <Col md={2}>Standard (750 mL)</Col>
                <Col md={1}> $56.95</Col>
                <Col md={1}> $59.95</Col>
              </Row>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col className="ps-md-4" md={4}>
                <h6>Staglin Family Vineyard...</h6>
                <span className="d-flex">
                  Region:{" "}
                  <p className="mt-1"> United States · California · Blends</p>
                </span>
              </Col>
              <Col md={2}>Vintage: 2010</Col>
              <Col md={{ span: 3, offset: 3 }} className="d-flex text-center">
                <a href="#" className="mt-2 text-dangours me-2">
                  View More
                </a>
                <img className="ps-md-3 edit" src={edit} alt="" />
                <img className="delete" src={deleteicon} alt="" />
              </Col>
            </Row>
            <hr />

            <Row className="ps-md-3">
              <Col md={3}>
                <p className="mt-2">Rating</p>
                <h6 className="text-dark">James Suckling's</h6>
                <span className="rating">JS 95</span>
                <h6 className="text-dark">Wine Spectator Tasting</h6>

                <span className="rating">WS 79</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Robert Parker</h6>
                <span className="rating">RP 80</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Antonio Galloni’s</h6>
                <span className="rating">---</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark"> Possimus</h6>
                <span className="stock-lable">43 units</span>
              </Col>
              <Col md={2}>
                <h6 className="text-dark">Downtown Condo</h6>
                <span className="stock-lable">95 units</span>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
