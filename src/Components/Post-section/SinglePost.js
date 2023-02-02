import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaEllipsisH, FaEye, FaShareAlt } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const SinglePost = ({single}) => {
    const{bannerImg, icon, postTitle, blogName, description, websiteLink, view, writerImage, personName, sideIcon1, sideIcon2, otherInformation, location} = single;
    return (
        <Card className='mb-3'>
            <Card.Img style={{height: '18rem'}} variant="top" src={bannerImg ? bannerImg : ''} alt='No Image Porvided' />
            <Card.Body>
            <Card.Title><img style={{width: '20px'}} src={icon} alt="" /> {postTitle}</Card.Title>
            <div className='d-flex justify-content-between'>
            <Card.Title className='pe-2'>{blogName}</Card.Title>
            <NavDropdown title={<FaEllipsisH/>} id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Edit</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Report</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">option3</NavDropdown.Item>
                </NavDropdown>
            </div>
            {sideIcon1 ?
                    <div className='d-flex align-items-center my-3'>
                    <img style={{width: '15px', height:'15px', marginRight: '10px'}} src={sideIcon1} alt="" /> <p className='m-0 me-2'>{otherInformation}</p> <img style={{width: '15px', height:'15px', marginRight: '10px'}} src={sideIcon2} alt="" /> <p  className='m-0'>{location}</p>
                </div> : ''
                }
                <Card.Text className='pe-1'>
                   {description ? description : ''}
                   {websiteLink ? <div className="d-grid">
                    <Button variant="outline-success">{websiteLink}</Button>
                    </div> : ''}
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <img style={{width: '35px', height:'35px'}} className='rounded-circle' src={writerImage} alt="" />
                        <h5 className='ms-3'>{personName}</h5>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye/>
                        <p className='fs-6 m-0 mx-1'>{view}</p>
                        <FaShareAlt className='ms-2'/>
                    </div>
                </div>
            </Card.Body>
      </Card>
    );
};

export default SinglePost;