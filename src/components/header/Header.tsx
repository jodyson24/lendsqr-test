import React from 'react';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi'

import logo from '../../images/Grouplogo.svg'

import alertbell from '../../images/np_notification_2425223_000000 1.svg'
import avatar from '../../images/avatar.svg'
import dropdownIcon from '../../images/np_dropdown_615120_000000 1.svg'

const Header = () => {
    
    const logoutUser = () => {
        window.localStorage.removeItem('firstLogin')
        // window.location = "/"
    }

    return (
        <>
            <div className='header'>
                <Row>
                    <Col>
                        <img src={logo} className="logo" alt="logo" />
                    </Col>
                    <Col>
                        <Form>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search for anything"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text className='search-icon' id="basic-addon2"> <FiSearch /> </InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </Col>
                    <Col>
                        <ul className='header-nav-list'>
                            <li>Docs</li>
                            <li>
                                <img src={alertbell} alt="notification-icon" />
                            </li>
                            <li>
                                <img src={avatar} alt="avatar" />
                            </li>
                            <li onClick={logoutUser} style={{ cursor: 'pointer' }}>
                                Adedeji
                                <img src={dropdownIcon} alt="dropdown-icon" />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Header; 