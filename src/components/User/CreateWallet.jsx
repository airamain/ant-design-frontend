import React, { useState, useContext } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import userContext from '../../context/user/userContext';
import { WalletOutlined } from "@ant-design/icons";
import axios from 'axios';

export default function CreateWallet({ darkMode }) {
  const emptyForm = { wallet_name: "", wallet_coint: "" },
  [visible, setVisible] = useState(false),
  [form, setForm] = useState(emptyForm),
  {user} = useContext(userContext),

  handleChange = ({ target }) => setForm({ ...form, [target.id]: target.value }),
  handleSubmit = e => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: '/wallet',
      headers: { "x-access-token": user.token},
      data: form
    }).then(() => {
      message.success('Hecho!');
      setVisible(false);
      setForm(emptyForm);
    }).catch(e => {
      console.log('e :>> ', e);
      message.error('Hubo un error. Volvé a intentarlo.');
    })
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

  return (
    <>
      {darkMode === false ? (
        <div className="whitemode">
          <Button type="link" className="whitemode btnpink" shape="round" onClick={() => setVisible(true)}>
          <WalletOutlined />
            Crear Billetera
          </Button>
          <Modal
            centered
            title="Crear Billetera"
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={null}
          >
            <Form
              onSubmit={handleSubmit}
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                label="Nombre de Billetera"
                name="wallet_name"
                rules={[
                  {
                    required: true,
                    message: "Campo obligatorio!",
                  },
                ]}
              >
                <Input value={form.wallet_name} name="wallet_name" onChange={handleChange} />
              </Form.Item>

              <Form.Item
                label="Código"
                name="wallet_coint"
                rules={[
                  {
                    required: true,
                    message: "Campo obligatorio!",
                  },
                ]}
              >
                <Input value={form.wallet_coint} name="wallet_coint" onChange={handleChange} />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="secondary" shape="round" icon={<WalletOutlined />}>
                  Crear Billetera
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      ) : (
        <div className="darkmode">
          <Button type="link" className="darkmode btnpink" shape="round" onClick={() => setVisible(true)}>
            <WalletOutlined />
            Crear Billetera
          </Button>
          <Modal
            centered
            title="Crear Billetera"
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={null}
          >
            <Form
              onSubmit={handleSubmit}
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                label="Nombre de Billetera"
                name="wallet_name"
                rules={[
                  {
                    required: true,
                    message: "Campo obligatorio!",
                  },
                ]}
              >
                <Input
                  value={form.wallet_name}
                  name="wallet_name"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item
                label="Precio"
                name="wallet_coint"
                rules={[
                  {
                    required: true,
                    message: "Campo obligatorio!",
                  },
                ]}
              >
                <Input value={form.wallet_coint} name="wallet_coint" onChange={handleChange} />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="secondary" shape="round" icon={<WalletOutlined />}>
                  Crear Billetera
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      )}
    </>
  );
}