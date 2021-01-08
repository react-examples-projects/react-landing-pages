import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

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

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setRegister(false);

    try {
      const xhr = await fetch(api, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      const res = await xhr.json();
      console.log(res);

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
    <>
      {error && <h5>{error}</h5>}
      {isRegister && <h5>{"User registrered!"}</h5>}

      <form action="/" onSubmit={handleSubmit} style={css.form}>
        <h1>Register your account</h1>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            placeholder="Email"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
            placeholder="Password"
          />
        </div>

        <button type="submit" style={{ marginTop: "1rem" }}>
          Registrar
        </button>
      </form>
    </>
  );
}
