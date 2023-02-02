import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './PostSection.css';
import Form from 'react-bootstrap/Form';
import { FaUserPlus} from "react-icons/fa";
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
                        <Button className='rounded p-0 border-0' variant="primary"><FaUserPlus/> Join Group</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                {
                        post.map((single, id) => <SinglePost key={id} single={single}></SinglePost>)
                    }
                </Col>
                <Col xs={12} md={4}>
                </Col>
            </Row>
        </Container>
    );
};

export default PostSection;