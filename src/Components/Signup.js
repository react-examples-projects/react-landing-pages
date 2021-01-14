import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const app_id = "737A31DB-7B9A-7085-FFC4-3471C6A66300";
const api_key = "7BE2CF34-EECF-4F33-B5AB-98125A2022D4";
const api = `https://api.backendless.com/${app_id}/${api_key}/users/register`;

const css = {
  labels: { marginBottom: ".5rem", display: "block" },
  form: {
    marginTop: "1rem",
    width: "100%",
    maxWidth: "350px",
    margin: "15rem auto auto auto",
  },

  title: {
    marginBottom: "1rem",
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
  const [show, setShow] = useState(true);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setRegister(false);
    setShow(true);

    try {
      const xhr = await fetch(api, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      const res = await xhr.json();

      if (isMounted.current) {
        if ("code" in res) {
          setError(res.message);
        } else {
          setError(false);
          setRegister(true);
          history.push("/login");
        }
      }
    } catch (e) {
      console.log(e);
      isMounted.current && setError("Connection error, check your internet");
    }
    isMounted.current && setLoading(false);
  };

  return (
    <Container fluid="md">
      {isRegister && <h5>{"User registrered!"}</h5>}

      {error && (
        <Alert
          show={show}
          variant="danger"
          dismissible
          className="rounded-0"
          onClose={() => setShow(false)}
        >
          {error}
        </Alert>
      )}
      {isRegister && (
        <Alert
          show={show}
          variant="success"
          dismissible
          onClose={() => setShow(false)}
        >
          {"User registrered!"}
        </Alert>
      )}

      <Form action="/" onSubmit={handleSubmit} style={css.form}>
        <h3 className="title" style={css.title}>
          Register your account
        </h3>

        <Form.Group>
          <Form.Control
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
            placeholder="Password"
          />
        </Form.Group>

        <Button
          type="submit"
          style={{ marginTop: "1rem" }}
          block
          disabled={isLoading}
        >
          Registrar
          {isLoading && (
            <Loader
              type="Oval"
              color="#fff"
              height={15}
              width={15}
              className="d-inline-block ml-2"
            />
          )}
        </Button>
      </Form>
    </Container>
  );
}
