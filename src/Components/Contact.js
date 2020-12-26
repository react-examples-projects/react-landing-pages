import React from "react";
import { Button, Tooltip, Input } from "antd";
import { CheckOutlined } from "@ant-design/icons";

export default function Contact() {
  return (
    <form action="/">
      <div>
        <label htmlFor="name">
          <strong>Nombre</strong>
        </label>
        <Input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">
          <strong>Email</strong>
        </label>
        <Input type="email" name="email" id="email" />
      </div>

      <Tooltip title="Enviar los datos">
        <Button
          type="danger"
          style={{ marginTop: "1rem" }}
          //  loading={true}
          block
          htmlType="submit"
          //shape="round"
        >
          Enviar datos
          <CheckOutlined />
        </Button>
      </Tooltip>
    </form>
  );
}
