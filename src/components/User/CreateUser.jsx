import React, { useEffect, useState } from "react";
import { UserAddOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Button } from "antd";
import axios from 'axios';

export default function CreateUser() {
  const emptyForm = {userName: '', password: ''},
  [success, setSuccess] = useState(false),
  [visible, setVisible] = useState(false),
  [form, setForm] = useState(emptyForm),

  handleChange = ({target}) => setForm({...form, [target.id]: target.value}),

  handleSubmit = () => {
    axios.post("auth", form)
    .then(response => {
      if (response.data.auth) setSuccess(true);
    }).catch(e => console.log('error :>> ', e));
  },
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
  };

  useEffect(() => {
    if (!visible) {
      setForm(emptyForm);
      setSuccess(false);
    }
    // eslint-disable-next-line
  }, [visible]);
  return (
    <>
      <Button type="link" onClick={() => setVisible(true)}>
        <UserAddOutlined />
        Crear Usuario
      </Button>
      <Modal
        centered
        title="Crear Usuario"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={[]}
      >
        <Form onSubmit={handleSubmit} {...layout}>
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
            <Input value={form.userName} name="userName" onChange={handleChange} />
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
            <Input.Password value={form.password} name="password" onChange={handleChange} />
          </Form.Item>
          
          <Form.Item {...tailLayout}>
            {
              success ? <h5>Usuario creado. Ahora puede iniciar sesión</h5> :
              <Button type="secondary" onClick={handleSubmit} shape="round" icon={<UserAddOutlined />}>
                Crear Usuario
              </Button>
            }
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
