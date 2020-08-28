import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGithub, faCodepen, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col>
                            <ul className="list-unstyled text-left">
                                <h3>Team Members App</h3>
                                <li>About</li>
                                <li>Terms & COnditions</li>
                                <li>Privacy Policy</li>
                                <li>Support 24/7/365</li>
                                <li>Contact Us</li>
                            </ul>
                        </Col>
                        <Col>

                            <ul className="list-unstyled text-left">
                                <h3>Categories</h3>
                                <li>Web Development</li>
                                <li>Ethical Hacking</li>
                                <li>Cyber Security</li>
                                <li>Artificial Intelligence</li>
                                <li>Data Science</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="list-unstyled text-left">
                                <h3>Community</h3>
                                <li>Learners</li>
                                <li>Developers</li>
                                <li>Menotrs</li>
                                <li>Partners</li>
                                <li>Blog</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-left p-2 text-decoration-none">
                            <p>&copy;Copyright 2020. Team Members App LLC. Developed by <a href="https://github.com/bdmostafa">Mostafa</a></p>
                        </Col>
                        <Col className="text-right pr-5">
                            <a href="#"> <FontAwesomeIcon className="text-primary mr-1" icon={faFacebookF} /></a>
                            <a href="#"> <FontAwesomeIcon className="text-info mr-1" icon={faLinkedin} /></a>
                            <a href="#"> <FontAwesomeIcon className="text-dark mr-1" icon={faGithub} /></a>
                            <a href="#"> <FontAwesomeIcon className="text-secondary mr-1" icon={faCodepen} /></a>
                            <a href="#"> <FontAwesomeIcon className="text-danger" icon={faYoutube} /></a>
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>
        </div>
    );
};

export default Footer;