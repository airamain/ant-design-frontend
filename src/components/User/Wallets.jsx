import React, { useContext, useEffect, useState } from "react";
import { DollarCircleOutlined, BankOutlined } from "@ant-design/icons";
import userContext from '../../context/user/userContext';
import CreateWallet from './CreateWallet';
import { useHistory } from "react-router";
import { Card, Row, Col } from "antd";
import axios from 'axios';
import "./Wallets.css";

export default function Wallet({ darkMode }) {
  const {user} = useContext(userContext),
  [wallets, setWallets] = useState([]),
  [total, setTotal] = useState('-'),
  history = useHistory();

  useEffect(() => {
    if (user && user.token) {
      axios({
        method: "GET",
        url: "user",
        headers: { "x-access-token": user.token}
      }).then(({data}) => {
        setTotal(data.send_user.total.total_1);
        setWallets(data.send_user.total.data);
      }).catch(e => console.log('error :>> ', e));
    } else history.push("/");
    // eslint-disable-next-line
  }, [user]);

  return (
    <div style={{ paddingBottom: "30px" }}>
      {darkMode === false ?
        <div className="whitemode">
          <CreateWallet />
          <Row justify="center" align="center" style={{ margin: "30px 0px 0px 0px" }}>
            <Col xs={{ span: 8 }} md={{ span: 4 }} lg={{ span: 2 }}>
              <div className="circle">
                <h3 className="whitemode">Total</h3>
                <h4 className="whitemode overhidden" style={{ marginBottom: "0px" }}>${total}</h4>
              </div>
            </Col>
          </Row>
          <Row justify="center" align="center">
            {wallets.length > 0 ?
            <Col xs={{ span: 23 }} lg={{ span: 10 }}>
              {wallets.map(w =>
              <Card className="bgwhitecard margincard" key={w._id}>
                <Row>
                  <Col xs={{ span: 6 }}>
                    <h3 className="whitemode">
                      <DollarCircleOutlined style={{ marginRight: "5px" }} />
                      Moneda
                    </h3>
                  </Col>
                  <Col xs={{ span: 12 }}>
                    <h3 className="whitemode">ETH</h3>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ span: 6 }}>
                    <h3 className="whitemode">
                      <BankOutlined style={{ marginRight: "5px" }} />
                      Cuenta
                    </h3>
                  </Col>
                  <Col xs={{ span: 16 }}>
                    <h3 className="whitemode overhidden1">{w.account}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ span: 6 }}>
                    <h3 className="whitemode">Total</h3>
                  </Col>
                  <Col xs={{ span: 12 }}>
                    <h3 className="whitemode">${w.balance}</h3>
                  </Col>
                </Row>
              </Card>
              )}
            </Col> : <h3 style={{paddingBottom: "48.2vh"}}>No se encontraron billeteras</h3>
            }
          </Row>
        </div>
      :
      <div className="darkmode">
        <CreateWallet />
        <Row justify="center" align="center" style={{ margin: "30px 0px 0px 0px" }}>
          <Col xs={{ span: 8 }} md={{ span: 4 }} lg={{ span: 2 }}>
            <div className="circle">
              <h3 className="darkmode">Total</h3>
              <h4 className="darkmode overhidden" style={{ marginBottom: "0px" }}>${total}</h4>
            </div>
          </Col>
        </Row>
        <Row justify="center" align="center">
          {wallets.length > 0 ?
          <Col xs={{ span: 23 }} lg={{ span: 10 }}>
            {wallets.map(w =>
            <Card className="bgdarkcard" key={w._id}>
              <Row>
                <Col xs={{ span: 6 }}>
                  <h3 className="darkmode">
                    <DollarCircleOutlined style={{ marginRight: "5px" }} />
                    Moneda
                  </h3>
                </Col>
                <Col xs={{ span: 12 }}>
                  <h3 className="darkmode">ETH</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={{ span: 6 }}>
                  <h3 className="darkmode">
                    <BankOutlined style={{ marginRight: "5px" }} />
                    Cuenta
                  </h3>
                </Col>
                <Col xs={{ span: 16 }}>
                  <h3 className="darkmode overhidden1">{w.account}</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={{ span: 6 }}>
                  <h3 className="darkmode">Total</h3>
                </Col>
                <Col xs={{ span: 12 }}>
                  <h3 className="darkmode">${w.balance}</h3>
                </Col>
              </Row>
            </Card>
            )}
          </Col> : 
            <h3 className="darkmode" style={{paddingBottom: "48.2vh"}}>No se encontraron billeteras</h3>
          }
        </Row>
      </div>
      }
    </div>
  );
}