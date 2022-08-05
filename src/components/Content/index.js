import { Col, Row } from "antd";
import React from "react";
import "./styles.css";
import Skills from "./Skills/";
import Education from "./Education/";
import Social from "./Social/";
import Experience from "./Experience/";

export default () => {
    return (
        <div className="Content">
            <Row className="about">
                <div>
                    <Row>
                        <h2>About</h2>
                    </Row>
                    <Row>
                        <p>
                        My teammates call me Morteza, a proactive leader, patient teacher, creative thinker, picky on the product, and a good friend.
                        </p>
                    </Row>
                </div>
            </Row>
            <Row className="contents">
                <Col xs={{ span: 24, order: 2 }} md={{ span: 9, order: 1 }} className="right">
                    <Row className="skills">
                        <Skills />
                    </Row>
                    <Row className="education">
                        <Education />
                    </Row>
                    <Row className="social">
                        <Social />
                    </Row>
                </Col>
                <Col xs={{ span: 24, order: 1 }} md={{ span: 15, order: 2 }} className="left">
                    <Experience />
                </Col>
            </Row>
        </div>
    );
};
