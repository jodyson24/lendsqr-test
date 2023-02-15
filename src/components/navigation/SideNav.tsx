import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {

    const customerNav = [
        { name: "Users", icon: "", path: "/" },
        { name: "Guarantors", icon: "", path: "#" },
        { name: "Loans", icon: "", path: "/" },
        { name: "Decision Models", icon: "", path: "/" },
        { name: "Savings", icon: "", path: "/" },
        { name: "Loan Requests", icon: "", path: "/" },
        { name: "Whitelist", icon: "", path: "/" },
        { name: "Karma", icon: "", path: "/" }
    ]

    const businessNav = [
        { name: "Organization", icon: "", path: "/" },
        { name: "Loan Products", icon: "", path: "/" },
        { name: "Saving Products", icon: "", path: "/" },
        { name: "Fees and Charges", icon: "", path: "/" },
        { name: "Transactions", icon: "", path: "/" },
        { name: "Services", icon: "", path: "/" },
        { name: "Service Account", icon: "", path: "/" },
        { name: "Settlements", icon: "", path: "/" },
        { name: "Reports", icon: "", path: "/" },
    ]

    const settingsNav = [
        { name: "Preferences", icon: "", path: "/" },
        { name: "Fees and Pricing", icon: "", path: "/" },
        { name: "Audit Logs", icon: "", path: "/" },
    ]

    return (
        <>
            <div className='nav'>
                <div className='link-switch'>
                    <Link to="#"> Switch Organization </Link>
                </div>

                <div className='link-switch'>
                    <Link to="/"> Dashboard </Link>
                </div>

                <div className="nav-section">
                    <h6>CUSTOMERS</h6>
                    <ul>
                        {
                            customerNav.map((e, i) => (
                                <li key={i}>
                                    <Link to={e.path}> {e.name} </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="nav-section">
                    <h6>BUSINESS</h6>
                    <ul>
                        {
                            businessNav.map((e, i) => (
                                <li key={i}>
                                    <Link to={e.path} key={i}> {e.name} </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="nav-section">
                    <h6>SETTINGS</h6>
                    <ul>
                        {
                            settingsNav.map((e, i) => (
                                <li key={i}>
                                    <Link to={e.path} key={i}> {e.name} </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SideNav;