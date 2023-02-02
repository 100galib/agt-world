import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import register from '../../assets/register/register-img.png';

const LoginForm = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-success fs-6' id="contained-modal-title-vcenter">
            Let's Learn, Share & inspire each other with our passion for computer engineering. Sign Up!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='d-flex justify-content-between'>
                <div>
                    <h3 className='my-2'>Log into Account</h3>
                <form className='w-100'>
                    <input   className='w-100 mb-2' type="text" placeholder='First Name' name="First-Name" id="" />
                    <input  className='w-100 mb-2' type="text" placeholder='Last Name' name="Last-Name" id="" />
                    <input className='w-100 mb-2' type="email" placeholder='Email' name="email" id="" />
                    <input className='w-100 mb-2' type="password" placeholder='password' name="password" id="" />
                    <input className='w-100 mb-2' type="password" placeholder='Re-Enter password' name="email" id="" />
                    <Button className='rounded p-0 border-0 w-100 py-2' variant="primary">Login</Button>
                </form>
                <Button className='w-100 mt-3' variant="outline-secondary">Google</Button>
                </div>
                <div className='d-block'>
                    <Link to={'/register'}>Register</Link>
                    <img src={register} alt="" />
                </div>
            </div>
        </Modal.Body>
      </Modal>
    );
};

export default LoginForm;