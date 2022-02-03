import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./Departments.css"
const Departments = () => {
    return (
        <>
            <div className='academicUnit'>
                <div id="department_features">
                    <div class="department_feature">
                        <div class="main-text">
                            <p>Departments</p>
                        </div>
                    </div>
                </div>
                <div className='academic'>
                    <Row>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <i className="fas fa-tv"></i>
                            <h2>COMPUTER DEPARTMENT</h2>

                        </Col>
                        <Col className='unit box-2' md={3} xs={6} sm={6}>
                            <i className="fas fa-broadcast-tower"></i>
                            <h2>ELECTRONICS AND TELECOMMUNICATION DEPARTMENT</h2>

                        </Col>
                        <Col className='unit box-3' md={3} xs={6} sm={6}>
                            <i className="fas fa-cogs"></i>
                            <h2>MECHANICAL DEPARTMENT</h2>

                        </Col>
                        <Col className='unit box-4' md={3} xs={6} sm={6}>
                            <i className="fas fa-building"></i>
                            <h2>CIVIL DEPARTMENT</h2>

                        </Col>

                        <Col className='unit box-4' md={3} xs={6} sm={6}>
                            <i className="fas fa-car"></i>
                            <h2>AUTOMOBILE DEPARTMENT</h2>

                        </Col>
                        <Col className='unit box-4' md={3} xs={6} sm={6}>
                            <i className="fas fa-bolt"></i>
                            <h2>INSTRUMENTATION AND CONTROL DEPARTMENT</h2>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Departments;