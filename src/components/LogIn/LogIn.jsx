import React, { useState, useContext } from "react";
import userContext from '../../context/user/userContext';
import { Modal, Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from 'axios';

export default function LogIn() {
  const [visible, setVisible] = useState(false),
  [user, setUser] = useState({ userName: "", password: "" }),
  {iniciarSesion} = useContext(userContext),
  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 14,
    },
  },
  tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  },
  handleChange = ({ target }) => setUser({ ...user, [target.name]: target.value }),
  login = () => {
    axios.post("auth/login", user)
    .then(response => {
      localStorage.setItem('user-token', response.data.token);
      iniciarSesion(response.data);
      setVisible(false);
      setUser({ userName: '', password: '' });
    }).catch(e => console.log('error :>> ', e));
  };

  return (
    <>
      <Button type="link" onClick={() => setVisible(true)}>
        <UserOutlined />
        Iniciar Sesión
      </Button>
      <Modal
        centered
        title="Iniciar Sesión"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={[]}
      >
        <Form {...layout} onSubmit={e => e.preventDefault()}>
          <Form.Item
            label="Nombre de Usuario"
            name="userName"
            rules={[
              {
                required: true,
                message: "Campo obligatorio!",
              },
            ]}
          >
            <Input value={user.userName} name="userName" onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Campo obligatorio!",
              },
            ]}
          >
            <Input.Password value={user.password} name="password" onChange={handleChange} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="secondary" onClick={login} shape="round" icon={<UserOutlined />}>
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}