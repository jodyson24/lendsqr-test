import React from 'react';
import { Link } from 'react-router-dom';

import swo_img from '../../images/briefcase 1swo.svg'
import dsh_img from '../../images/home 1dshhome.svg'

import guarantors_i from '../../images/users 1.svg'
import users_i  from '../../images/user-check 1.svg'
import loans_i from '../../images/sack 1.svg'
import dec_i from '../../images/handshake-regular 1.svg'
import savings_i from '../../images/piggy-bank 1.png'
import loanreq_i from '../../images/Group 104.svg'
import white_i from '../../images/user-check 1 (1).svg'
import karma_i from '../../images/user-times 1.svg'

import org_i from '../../images/briefcase 1.svg'
import lp_i from '../../images/Group 104.svg'
import svp_i from '../../images/np_bank_148501_000000 1.svg'
import fees_i from '../../images/coins-solid 1.svg'
import trans_i from '../../images/icon.svg'
import service_i from '../../images/galaxy 1.svg'
import seracc_i from '../../images/user-cog 1.svg'
import sett_i from '../../images/scroll 1.svg'
import rep_i from '../../images/chart-bar 2.svg'

import sliders from '../../images/sliders-h 1.svg'
import feespri_i from '../../images/badge-percent 1.svg'
import clipboard from '../../images/clipboard-list 1.svg'

const SideNav = () => {

    const customerNav = [
        { name: "Users", icon: users_i, path: "/" },
        { name: "Guarantors", icon: guarantors_i, path: "#" },
        { name: "Loans", icon: loans_i, path: "/" },
        { name: "Decision Models", icon: dec_i, path: "/" },
        { name: "Savings", icon: savings_i, path: "/" },
        { name: "Loan Requests", icon: loanreq_i, path: "/" },
        { name: "Whitelist", icon: white_i, path: "/" },
        { name: "Karma", icon: karma_i, path: "/" }
    ]

    const businessNav = [
        { name: "Organization", icon: org_i, path: "/" },
        { name: "Loan Products", icon: lp_i, path: "/" },
        { name: "Saving Products", icon: svp_i, path: "/" },
        { name: "Fees and Charges", icon: fees_i, path: "/" },
        { name: "Transactions", icon: trans_i, path: "/" },
        { name: "Services", icon: service_i, path: "/" },
        { name: "Service Account", icon: seracc_i, path: "/" },
        { name: "Settlements", icon: sett_i, path: "/" },
        { name: "Reports", icon: rep_i, path: "/" },
    ]

    const settingsNav = [
        { name: "Preferences", icon: sliders, path: "/" },
        { name: "Fees and Pricing", icon: feespri_i, path: "/" },
        { name: "Audit Logs", icon: clipboard, path: "/" },
    ]

    return (
        <>
            <div className='nav'>
                <div className='link-switch'>
                    <Link to="#">
                        <span> <img src={swo_img} alt="link" /> </span>
                        Switch Organization
                    </Link>
                </div>

                <div className='link-switch'>
                    <Link to="/">
                        <span> <img src={dsh_img} alt="link" /> </span>
                        Dashboard
                    </Link>
                </div>

                <div className="nav-section">
                    <h6 className='mb-3'>CUSTOMERS</h6>
                    <ul>
                        {
                            customerNav.map(({ i, path, name, icon }: any) => (
                                <li key={i}>
                                    <Link to={path}>
                                        <span> <img src={icon} alt="link" /> </span>
                                        {name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="nav-section">
                    <h6 className='mb-3'>BUSINESS</h6>
                    <ul>
                        {
                            businessNav.map(({ i, path, name, icon }: any) => (
                                <li key={i}>
                                    <Link to={path} >
                                        <span> <img src={icon} alt="link" /> </span>
                                        {name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="nav-section">
                    <h6 className='mb-3'>SETTINGS</h6>
                    <ul>
                        {
                            settingsNav.map(({ i, path, name, icon }: any) => (
                                <li key={i}>
                                    <Link to={path}>
                                        <span> <img src={icon} alt="link" /> </span>
                                        {name}
                                    </Link>
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