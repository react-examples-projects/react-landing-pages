import React, { useState, useRef, useEffect } from "react";
import { Button, Tooltip, Input, Alert, Typography, Form } from "antd";
import { UserOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const app_id = "737A31DB-7B9A-7085-FFC4-3471C6A66300";
const api_key = "7BE2CF34-EECF-4F33-B5AB-98125A2022D4";
const api = `https://api.backendless.com/${app_id}/${api_key}/users/login`;

const css = {
  labels: { marginBottom: ".5rem", display: "block" },
  form: {
    marginTop: "1rem",
    width: "100%",
    maxWidth: "300px",
    margin: "15rem auto auto auto",
  },
};

export default function Contact() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const isMounted = useRef();
  const [isRegister, setRegister] = useState(false);
  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  });

  const handleSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    setError(false);

    try {
      const xhr = await fetch(api, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      isMounted.current && setLoading(false);
      const res = await xhr.json();
      console.log(res);

      if (isMounted.current) {
        if ("code" in res) {
          setError(res.message);
        } else {
          setError(false);
          setRegister(true);
          sessionStorage.setItem("user-token", res["user-token"]);
        }
      }
    } catch (e) {
      console.log(e);
      isMounted.current && setError("Connection error, check your internet");
    }
  };

  return (
    <>
      {error && !isRegister && <Alert type="error" message={error} banner />}
      {isRegister && !error && (
        <Alert type="success" message="Successful login!" banner />
      )}

      <Form
        action="/"
        onFinish={handleSubmit}
        style={css.form}
        initialValues={{ remember: true }}
      >
        <Typography.Title level={3}>login with your account</Typography.Title>
        <Form.Item
          name="login"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            type="email"
            name="login"
            id="login"
            value={email}
            prefix={<UserOutlined />}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            prefix={<SafetyCertificateOutlined />}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
            placeholder="Password"
          />
        </Form.Item>

        <Tooltip title="Enviar los datos">
          <Button
            type="danger"
            style={{ marginTop: "1rem" }}
            //  loading={true}
            block
            htmlType="submit"
            //shape="round"
            loading={isLoading}
          >
            Iniciar
          </Button>
        </Tooltip>
      </Form>
    </>
  );
}
