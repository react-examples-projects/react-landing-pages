import React, { useState } from "react";
import { Button, Tooltip, Input, Alert } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const app_id = "737A31DB-7B9A-7085-FFC4-3471C6A66300";
const api_key = "7BE2CF34-EECF-4F33-B5AB-98125A2022D4";
const api = `https://api.backendless.com/${app_id}/${api_key}/users/register`;

const css = {
  labels: { marginBottom: ".5rem", display: "block" },
  form: {
    marginTop: "1rem",
  },
};

export default function Contact() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const xhr = await fetch(api, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      setLoading(false);
      const res = await xhr.json();
      console.log(res);
      if ("code" in res) {
        setError(res.message);
      } else {
        setError(false);
      }
    } catch (e) {
      console.log(e)
      setError("Connection error, check your internet");
    }
  };

  return (
    <>
      {error && <Alert type="error" message={error} />}
      <form action="/" onSubmit={handleSubmit} style={css.form}>
        <div style={css.labels}>
          <label
            htmlFor="name"
            style={{ marginBottom: ".5rem", display: "block" }}
          >
            <strong>Email</strong>
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password" style={css.labels}>
            <strong>Password</strong>
          </label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </div>

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
            Registrar
            {/* <CheckOutlined /> */}
          </Button>
        </Tooltip>
      </form>
    </>
  );
}
