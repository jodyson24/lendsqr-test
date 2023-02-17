import React from 'react';
import { Card, Col, Container, Row, } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <>
            <div className='app-page p-4'>
                <Container>
                    <Row>
                        <Col xl={2} >
                            <Card border="light" className='cardicon pt-3 pb-2 px-3'>
                                <h6>Welcome</h6>
                                <h6>App Dashboard</h6>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Dashboard;