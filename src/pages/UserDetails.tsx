import React, { useContext, useEffect, useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import backarrow from '../images/Vectorbackarrow.svg'
import avatar from '../images/avatarbig.svg'
import { GlobalState } from '../GlobalState';

const UserDetails = () => {
    const params = useParams()
    const state = useContext(GlobalState)
    const [data] = state.data
    const [userDetails, setUserDetails] = useState<any>([])

    useEffect(() => {
        if (params) {
            data.customers?.forEach((customer: any) => {
                if (customer.id === params.id) 
                setUserDetails(customer)
            })
        }
    }, [params, data])

    if (userDetails.length === 0) return null;

    return (
        <>
            <div className='app-page pt-4'>
                <Container fluid className="p-4 mt-2">
                    <Row className='mb-4'>
                        <Link to="/">
                            <img src={backarrow} alt="back" className='me-2' />
                            Back to users
                        </Link>
                    </Row>
                    <Row className='mb-4'>
                        <Col>
                            <h6 className="user-title">User Details</h6>
                        </Col>
                        <Col>
                            <div className='d-flex justify-content-end'>
                                <Button variant="outline-danger" size="sm" className='me-3'>BLACKLIST USER</Button>
                                <Button variant="outline-primary" size="sm" >ACTIVATE USER</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card border='light' className='mb-4 px-4 pt-4 pb-2 user-overview-card'>
                                <Row className='mb-4'>
                                    <Col xl={4} className=''>
                                        <div className='d-flex'>
                                            <div>
                                                <img src={avatar} alt="profile-icon" />
                                            </div>
                                            <div className='pt-4 ms-3'>
                                                <h6 className='username'> {userDetails.fullname} </h6>
                                                <p className='user-id'> {userDetails.id} </p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={2} className='p-4 text-center border-start border-end'>
                                        <h6>User's Tier</h6>
                                    </Col>
                                    <Col className='p-3 ps-4'>
                                        <h6 className='acc-bal'> {userDetails.account_balance} </h6>
                                        <p className='acc-num'> {userDetails.account_number}/{userDetails.bank_name} </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        General Details
                                    </Col>
                                    <Col>
                                        Documents
                                    </Col>
                                    <Col>
                                        Bank Details
                                    </Col>
                                    <Col>
                                        Loans
                                    </Col>
                                    <Col>
                                        Savings Details
                                    </Col>
                                    <Col>
                                        App and System
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card border='light' className='p-4 details-box'>
                                <div className='mb-3 border-bottom pb-3'>
                                    <h6 className='setion-title mb-4'>Personal Information</h6>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='txt-uppercase'>Full name</p>
                                            <h6>{userDetails.full_name}</h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Phone number</p>
                                            <h6> {userDetails.phone_number} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Email Address</p>
                                            <h6> {userDetails.email} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>BVN</p>
                                            <h6> {userDetails.bvn} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Gender</p>
                                            <h6> {userDetails.gender} </h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className='txt-uppercase'>Marital status</p>
                                            <h6> {userDetails.marital_status} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Children</p>
                                            <h6> {userDetails.children} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Type of residence</p>
                                            <h6> {userDetails.type_of_residence} </h6>
                                        </Col>
                                        <Col>
                                            {/* <p className='txt-uppercase'>Full name</p>
                                            <h6>Grace Effiom</h6> */}
                                        </Col>
                                        <Col>
                                            {/* <p className='txt-uppercase'>Full name</p>
                                            <h6>Grace Effiom</h6> */}
                                        </Col>
                                    </Row>
                                </div>

                                <div className='mb-3 border-bottom pb-3'>
                                    <h6 className='setion-title mb-4'>Education and Employment</h6>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='txt-uppercase'>Level of Education</p>
                                            <h6> {userDetails.education_employment.level_of_education} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Employment status</p>
                                            <h6> {userDetails.education_employment.employment_status} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Sector of employment</p>
                                            <h6> {userDetails.education_employment.sector_of_employment} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Duration of employment</p>
                                            <h6> {userDetails.education_employment.duration_of_employment} </h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className='txt-uppercase'>Office email</p>
                                            <h6> {userDetails.education_employment.office_email} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Monthly income</p>
                                            <h6> {userDetails.education_employment.monthly_income} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Loan repayment</p>
                                            <h6> {userDetails.education_employment.loan_repayment} </h6>
                                        </Col>
                                        <Col>
                                            {/* <p className='txt-uppercase'>Full name</p>
                                            <h6>Grace Effiom</h6> */}
                                        </Col>
                                    </Row>
                                </div>

                                <div className='mb-3 border-bottom pb-3'>
                                    <h6 className='setion-title mb-4'>Socials</h6>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='txt-uppercase'>Twitter</p>
                                            <h6> {userDetails.socials.twitter} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Facebook</p>
                                            <h6>  {userDetails.socials.facebook} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>Instagram</p>
                                            <h6>  {userDetails.socials.instagram} </h6>
                                        </Col>
                                        <Col>
                                            {/* <p className='txt-uppercase'>BVN</p>
                                            <h6>Grace Effiom</h6> */}
                                        </Col>
                                        <Col>
                                            {/* <p className='txt-uppercase'>Gender</p>
                                            <h6>Grace Effiom</h6> */}
                                        </Col>
                                    </Row>
                                </div>

                                <div className='mb-3 pb-3'>
                                    <h6 className='setion-title mb-4'>Guarantor</h6>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='txt-uppercase'>Full name</p>
                                            <h6>  {userDetails.guarantor.full_name} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>phone number</p>
                                            <h6> {userDetails.guarantor.phone_number} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>email address</p>
                                            <h6> {userDetails.guarantor.email_address} </h6>
                                        </Col>
                                        <Col>
                                            <p className='txt-uppercase'>relationship</p>
                                            <h6> {userDetails.guarantor.relationship} </h6>
                                        </Col>
                                        <Col>
                                            {/* <p className='txt-uppercase'>Gender</p>
                                            <h6>Grace Effiom</h6> */}
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default UserDetails;