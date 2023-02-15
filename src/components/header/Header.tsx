import React from 'react';
import { Row, Col, Form, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../images/Grouplogo.svg'

const Header = () => {
    return (
        <>
            <div className='header'>
                <Row>
                    <Col>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col>
                        <FormGroup>
                            <Form.Control className='form-control-sm p-2' type="search" placeholder="Search for anything" name="search"  />
                        </FormGroup>
                    </Col>
                    <Col>
                        <ul className='header-nav-list'>
                            <li>Docs</li>
                            <li>Alerts</li>
                            <li>Users</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Header; 