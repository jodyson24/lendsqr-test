import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { GlobalState } from '../GlobalState';
import { loginUser } from '../api/auth';

import page_img from '../images/pablo-sign-in 1signin.svg'
import logo from '../images/Grouplogo.svg'

const initialState = {
    email: "",
    password: ""
}

type user = {
    email: string,
    password: string | any
}

const Login = () => {
    const [user, setUser] = useState<user>(initialState)
    const { email, password } = user;

    const state = useContext(GlobalState)
    const auth = state.auth

    const handleChange = (event: React.ChangeEvent) => {
        const { name, value } = event.target as HTMLInputElement;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        await loginUser(user.email, user.password)
        window.location.href = "/";
    }

    return (
        <>
            <div className='page' style={{ width: auth ? '85%' : '100% !important' }}>
                <div className='' style={{ margin: '0 auto', width: '85%'}}>
                    <Container className='px-5'>
                        <Row className='py-5'>
                            <Col lg={6}>
                                <img src={logo} className="mb-5" alt="logo" />

                                <div className='mt-5'>
                                    <img src={page_img} alt="logo" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <Card className='p-5' style={{ height: '700px' }}>
                                    <Form onSubmit={handleSubmit} style={{ marginTop: '105px', width: '450px' }}>
                                        <h6 className='login-text mb-3' >Welcome!</h6>
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
                                            <h6 className='mb-4 forgot-pass'>FORGOT PASSWORD?</h6>
                                            <Button style={{ background: '#39CDCC' }} className='btn-sm p-2 w-100' type="submit">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
           </div>
        </>
    );
}

export default Login;