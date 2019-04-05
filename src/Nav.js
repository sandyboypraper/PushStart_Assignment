import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = (props) => {
    return (
        <div  className="mynav">
            <Row>

                <Col sm = "10">

                <span className = "mylogo">
                <FontAwesomeIcon className = "myicon dark" icon = "spinner" />
                
                </span>

                <span className = "mynavsp HED">
                <FontAwesomeIcon className = "myicon" icon = "server" />
                 Data Library
                </span>

                <span className = "mynavsp HED">
                <FontAwesomeIcon className = "myicon rotright" icon = "code-branch" />
                 Workflows
                </span>

                <span className = "mynavsp HED">
                <FontAwesomeIcon className = "myicon" icon = "play-circle" />
                 Scheduler
                </span>

                <span className = "mynavsp HED">
                <FontAwesomeIcon className = "myicon" icon = "bug" />
                 Error Manager
                </span>

                <span className = "mynavsp HED">
                <FontAwesomeIcon className = "myicon" icon = "comment-dots" />
                 Notifications
                </span>

                <span className = "mynavsp HED">
                <FontAwesomeIcon className = "myicon" icon = "chart-line" />
                 Reports
                </span>

                </Col>
                 
                 <Col sm = "2">
              
                <span className = "mynavr8 right">
                <FontAwesomeIcon className = "myicon dark" icon = "info-circle" />
                </span>

                <span className = "right">
                <FontAwesomeIcon className = "myicon dark" icon = "question-circle" />
                </span>

                 </Col>

            </Row>
        </div>

       
    )
};

export default Nav;