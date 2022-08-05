import { Row, Progress, Col, Descriptions } from "antd";
import React from "react";
import "./styles.css";

export default () => {
    return (
        <div className="Skills">
            <Descriptions title="Skills" column={1} layout="vertical"></Descriptions>
                <h4>
                    <b>Languages :</b>
                </h4>
    
                <Row gutter={20}>
                    <Col>
                        <h4 className="Title">English</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Persian</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Arabic</h4>
                    </Col>
                </Row> 

                <h4>
                    <b>Product Managment :</b>
                </h4>

                <Row gutter={20}>
                    <Col>
                        <h4 className="Title">Scrum</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Kanban</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Scrumban</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">User Story</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">AC & DOD</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">UI & UX</h4>
                    </Col>                    
                    <Col>
                        <h4 className="Title">Figma</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Wireframing</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Roadmap Design</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">PRD</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Google Analytics</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Clarity</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Jira</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Trello</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Clickup</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Critical Thinking</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Communication</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Stakeholders Management</h4>
                    </Col>
                </Row> 

                <h4>
                    <b>Programing :</b>
                </h4>

                <Row gutter={20}>
                    <Col>
                        <h4 className="Title">PHP</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">SQL</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">HTML</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">CSS</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">JavaScript</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Linux</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Git</h4>
                    </Col>
                    <Col>
                        <h4 className="Title">Git flow</h4>
                    </Col>
                </Row>  
        </div>
    );
};
