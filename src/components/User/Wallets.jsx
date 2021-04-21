import React, { useContext, useEffect, useState } from "react";
import { DollarCircleOutlined } from "@ant-design/icons";
import userContext from '../../context/user/userContext';
import { Card, Row, Col } from "antd";
import axios from 'axios';
import "./UserList.css";

export default function Wallet({ darkMode }) {
  const {user} = useContext(userContext),
  [wallets, setWallets] = useState([]),
  [total, setTotal] = useState('-');

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
          <p>ETH {total}</p>
        </Col>
      </Row>
      <Row justify="center" align="center">
      {
        wallets.length > 0 ?
        <Col xs={{ span: 18 }} lg={{ span: 6 }}>
          {wallets.map(w =>
            <Card style={{ marginTop: "40px" }} key={w._id}>
              <Row>
                <Col xs={{ span: 12 }}>
                  <p>Moneda</p>
                </Col>
                <Col xs={{ span: 12 }}>
                  <p>ETH</p>
                </Col>
              </Row>
              <Row>
                <Col xs={{ span: 12 }}>
                  <p>Cuenta</p>
                </Col>
                <Col xs={{ span: 12 }}>
                  <p>{w.account}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={{ span: 12 }}>
                  <p><DollarCircleOutlined style={{ marginRight: "5px" }} />Total</p>
                </Col>
                <Col xs={{ span: 12 }}>
                  <p>${w.balance}</p>
                </Col>
              </Row>
            </Card>
          )} 
        </Col>
        : <h3>No se encontraron billeteras</h3>
      }
      </Row>
    </div>
  );
}