import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './PostSection.css';
import Form from 'react-bootstrap/Form';
import { FaUserPlus, FaHandPointRight} from "react-icons/fa";
import SinglePost from './SinglePost';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PostSection = () => {
    const[post, getPost] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(doc => getPost(doc))
    },[])
    return (
        <Container className='mt-4'>
            <Row>
                <Col xs={12} md={8}>
                    <div className='d-flex post-category'>
                        <p className='fw-bolder'>All Posts ({post.length})</p>
                        <p>Article</p>
                        <p>Event</p>
                        <p>Education</p>
                        <p>Jobs</p>
                    </div>
                </Col>
                <Col xs={12} md={4} className='post-button d-flex'>
                    <Form.Select className='fw-bold me-3 px-2' aria-label="Default select example">
                            <option >Write A post</option>
                            <option value="1">Edit A post</option>
                            <option value="2">Deleate A post</option>
                        </Form.Select>
                        <Button className='rounded p-0 border-0 ' variant="primary"><FaUserPlus/> Join Group</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                {
                        post.map((single, id) => <SinglePost key={id} single={single}></SinglePost>)
                    }
                </Col>
                <Col className='d-none d-sm-block' xs={12} md={4}>
                    <input placeholder='Enter Your Location' type="text" />
                     <Row className='mt-5'>
                        <Col sm><FaHandPointRight/> <span>Recommended Group</span></Col>
                    </Row>
                     <Row className='mt-2'>
                        <Col><img style={{width: '15px', height:'15px', marginRight: '10px'}}  className="rounded-5" src="https://images.unsplash.com/photo-1575543483595-568b7afb6b9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /> <span>Leisure</span> </Col>
                        <Col><Button variant="secondary" size="sm">Follow</Button></Col>
                    </Row>
                     <Row className='mt-2'>
                        <Col><img style={{width: '15px', height:'15px', marginRight: '10px'}}  className="rounded-5" src="https://images.unsplash.com/photo-1575543483595-568b7afb6b9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /> <span>MBA</span> </Col>
                        <Col><Button variant="secondary" size="sm">
          Follow
        </Button></Col>
                    </Row>
                     <Row className='mt-2'>
                        <Col><img style={{width: '15px', height:'15px', marginRight: '10px'}}  className="rounded-5" src="https://images.unsplash.com/photo-1575543483595-568b7afb6b9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /> <span>Activism</span> </Col>
                        <Col><Button variant="secondary" size="sm">
          Follow
        </Button></Col>
                    </Row>
                     <Row className='mt-2'>
                        <Col><img style={{width: '15px', height:'15px', marginRight: '10px'}}  className="rounded-5" src="https://images.unsplash.com/photo-1575543483595-568b7afb6b9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /> <span>Philosophy</span> </Col>
                        <Col><Button variant="secondary" size="sm">
          Follow
        </Button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default PostSection;