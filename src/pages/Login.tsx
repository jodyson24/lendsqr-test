import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';

import page_img from '../images/pablo-sign-in 1signin.svg'
import logo from '../images/Grouplogo.svg'

const initialState = {
    email: "",
    password: ""
}

// interface user {
//     email: String,
//     password: String
// }

const Login = () => {
    const [user, setUser] = useState<any>(initialState)
    const { email, password } = user;

    const handleChange = (event: React.ChangeEvent) => {
        const { name, value } = event.target as HTMLInputElement;
        setUser({ ...user, [name]: value })
    }
    return (
        <>
            <div className='page'>
                <Container>
                    <Row className='py-5'>
                        <Col lg={6}>
                            <img src={logo} className="mb-5" alt="logo" />

                            <div className='mt-5'>
                                <img src={page_img} alt="logo" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Card className='p-5' style={{ height: '700px' }}>
                                <Form style={{marginTop: '105px', width: '450px'}}>
                                    <h6 className='mb-3' style={{fontSize: '40px', fontWeight: '700', color: '#213F7D'}}>Welcome!</h6>
                                    <p className='mb-5'>Enter details to login.</p>

                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control className='form-control-sm p-2' type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>

                                    <Col className='mb-5'>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control className='form-control-sm p-2' type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>

                                    <Col className='mb-3'>
                                        <h6 className='mb-4' style={{fontSize: '12px', color: '#39CDCC'}}>FORGOT PASSWORD?</h6>
                                        <Button style={{background: '#39CDCC'}} className='btn-sm p-2 w-100' type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Login;