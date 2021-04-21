import React, { useContext, useEffect, useState } from "react";
import { DollarCircleOutlined } from "@ant-design/icons";
import userContext from '../../context/user/userContext';
import { Card, Row, Col } from "antd";
import axios from 'axios';
import "./UserList.css";

export default function Wallet({ darkMode }) {
  const {user} = useContext(userContext),
  [wallets, setWallets] = useState([]);

  useEffect(() => {
    if (user && user.token) {
      // obtener wallets
    } else setWallets([]);
  }, [user]);
  return (
    <div>
      <Row justify="center" align="center">
        <Col xs={{ span: 8 }}>
          <p>
            <DollarCircleOutlined style={{ marginRight: "5px" }} />
            Total
          </p>
        </Col>
        <Col xs={{ span: 8 }}>
          <p>3.7553356120719528e+22 </p>
        </Col>
      </Row>
      <Row justify="center" align="center">
        <Col xs={{ span: 18 }} lg={{ span: 6 }} style={{ marginTop: "40px" }}>
          <Card>
            <Row>
              <Col xs={{ span: 12 }}>
                <p>
                  <DollarCircleOutlined style={{ marginRight: "5px" }} />
                  Moneda
                </p>
              </Col>
              <Col xs={{ span: 12 }}>
                <p>Eht </p>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 12 }}>
                <p>
                  <DollarCircleOutlined style={{ marginRight: "5px" }} />
                  Balance
                </p>
              </Col>
              <Col xs={{ span: 12 }}>
                <p>57099056771678952 </p>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 12 }}>
                <p>Total</p>
              </Col>
              <Col xs={{ span: 12 }}>
                <p> 375533561207195283087</p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={{ span: 24 }}></Col>
        <Col xs={{ span: 18 }} lg={{ span: 6 }} style={{ marginTop: "40px" }}>
          <Card>
            <Row>
              <Col xs={{ span: 12 }}>
                <p>
                  <DollarCircleOutlined style={{ marginRight: "5px" }} />
                  Moneda
                </p>
              </Col>
              <Col xs={{ span: 12 }}>
                <p>Eht </p>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 12 }}>
                <p>
                  <DollarCircleOutlined style={{ marginRight: "5px" }} />
                  Balance
                </p>
              </Col>
              <Col xs={{ span: 12 }}>
                <p>57099056771678952 </p>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 12 }}>
                <p>57099056771678952</p>
              </Col>
              <Col xs={{ span: 12 }}>
                <p> precio total</p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={{ span: 24 }}></Col>
        
      </Row>
    </div>
  );
}