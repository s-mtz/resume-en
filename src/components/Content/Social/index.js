import { Descriptions } from "antd";
import React from "react";
import "./styles.css";

export default () => {
    return (
        <div className="Social">
            <Descriptions title="Social media" column={6}>
                <Descriptions.Item>
                    <a href="https://github.com/s-mtz/">
                        <i class="fa fa-github"></i>
                    </a>
                </Descriptions.Item>
                <Descriptions.Item>
                    <a href="https://t.me/lord_MATATA">
                        <i class="fa fa-telegram"></i>
                    </a>
                </Descriptions.Item>
                <Descriptions.Item>
                    <a href="https://www.linkedin.com/in/s-morteza-hakim/">
                        <i class="fa fa-linkedin"></i>
                    </a>
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
};
