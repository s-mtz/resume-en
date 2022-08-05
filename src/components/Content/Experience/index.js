import React from "react";
import "./styles.css";
import { Row } from "antd";
export default () => {
    return (
        <div className="Experience">
            <Row>
                <h3>Experience</h3>
            </Row>

            <>
                <Row>
                    <h4 className="Title">Signal</h4>
                    <h4 className="Year">2021 - 2022</h4>
                </Row>
                <Row>
                    <h4 className="JobTitle">Product Manager</h4>
                </Row>
                <Row>
                    <h4>
                        <a className="Projects" href="http://drserita.com/"> Serita CRM </a> & <a className="Projects" href="https://panel.viratracker.ir/"> Viratracker </a>
                    </h4>
                </Row>
                <Row>
                    <p>Led a team of four developers.</p>
                    <p>
                        Defined product vision and KPIs, generated roadmap and backlog, creating new features
                        from scratch and prioritizing them to achieve product growth.
                    </p>
                    <p>
                        Worked closely with users through testing and interviews, with regular
                        feedback loops to incorporate recommendations and improve the product.
                    </p>
                    <p>
                        Prepared requirements for design and tech teams, managed agile process in 
                        product delivery by scrum and scrumban using Trello.
                    </p>
                    <p>
                        Held regular plan review meetings each quarter to align the executive team 
                        on the current stats of the product.
                    </p>
                    <p>
                        Improved conversion rate and reduced bounce rate with the 
                        cooperation of SEO, media, and graphic team through A/B testing.
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Title">Mantiq</h4>
                    <h4 className="Year">2020 - 2021</h4>
                </Row>
                <Row>
                    <h4 className="JobTitle">Associate Product Manager</h4>
                </Row>
                <Row>
                    <h4 className="Projects">
                        <a href="https://emall.market/">Emall.market</a>
                    </h4>
                </Row>
                <Row>
                    <p>
                        Led a team of three, two developers and a designer, managing and
                        prioritizing backlogs using Kanban on ClickUp.
                    </p>
                    <p>
                        Improved user journey through the app and worked closely with the designer on the new design on Figma.
                    </p>
                    <p>Wrote PRD with the expected roadmap.</p>
                </Row>
                <Row>
                    <h4 className="Projects">
                        <a href="https://zanjani.ir/">Zanjani.ir</a>
                    </h4>
                </Row>
                <Row>
                    <p>
                        Communicating with the stakeholders as an adviser and Project manager, and
                        managing a team of two using scrum.
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Title">Self employed</h4>
                    <h4 className="Year">2020</h4>
                </Row>
                <Row>
                    <h4 className="JobTitle">Junior back-end developer</h4>
                </Row>
                <Row>
                    <p>Working in a team of two, developing telegram bots. </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Title">Momtaz institute</h4>
                    <h4 className="Year">2017 - 2019</h4>
                </Row>
                <Row>
                    <h4 className="JobTitle">Executive director</h4>
                </Row>
                <Row>
                    <p>Experiencing class management, financial management, and staff management</p>
                </Row>
            </>
        </div>
    );
};
