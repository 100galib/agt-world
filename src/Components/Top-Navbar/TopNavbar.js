import React from 'react';
import logo from '../../assets/logo/logo_nav.png';
import { FaSistrix, FaEllipsisV } from "react-icons/fa";
import '../../Components/Top-Navbar/Top-nav.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MyVerticallyCenteredModal from '../Post-section/MyVerticallyCenteredModal';
import LoginForm from '../Post-section/LoginForm';


const TopNavbar = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='d-flex justify-content-around align-items-center mt-2 position-relative'>
            <img className='img-style d-none d-lg-block' src={logo} alt="" />
            <div className='border rounded-pill middle-style-input px-3 py-1  d-none d-sm-block'>
                <FaSistrix />
                <input className='border-0 bg-transparent py-1 fw-bold fs-6 ' type="text" name="" id="" placeholder='Search for your favorite groups in ATG'/>
            </div>
            <p className='fw-bold d-none d-lg-flex'>Create account.<NavDropdown className='text-primary' title="Its free!" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1" onClick={() => setModalShow(true)}>Regsiter</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.1" onClick={() => setModalShow(true)}>login</NavDropdown.Item>
                </NavDropdown></p>
                <NavDropdown className='text-primary d-block d-sm-none position-absolute top-0 end-0 me-5' title={<FaEllipsisV/>} id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1" onClick={() => setModalShow(true)}>Regsiter</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.1" onClick={() => setModalShow(true)}>Login</NavDropdown.Item>
                </NavDropdown>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <LoginForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>

    );
};

export default TopNavbar;