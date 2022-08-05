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
                            It's been about two years since I've introduced to the career of product
                            management and have taken it seriously. I believe time can't be a
                            precise metric to value the quality of an experience based on how
                            hardworking, passionate, and punctilious people are. Love for solving
                            challenges and communicating both helped me with this mission.
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
