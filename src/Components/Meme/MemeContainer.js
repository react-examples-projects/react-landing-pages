import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import createMeme from "./https";
import Meme from "./Meme";
import MemeList from "./MemeList";
import css from "./style.module.css";
import { Link } from "react-router-dom";
export default function MemeContainer() {
  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");
  const [memeId, setMemeId] = useState(438680);
  const [meme, setMeme] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isValid, setValid] = useState(false);
  const cancelToken = useRef(new AbortController());

  const handleSubmit = async (e) => {
    const fd = new FormData(e.target);
    fd.append("template_id", memeId);
    fd.append("username", "znareak");
    fd.append("password", "28001320");
    fd.append("text0", text0);
    fd.append("text1", text1);
    e.preventDefault();

    if (e.target.checkValidity()) {
      setLoading(true);
      try {
        const memeData = await createMeme({
          body: fd,
          signal: cancelToken.current.signal,
        });
        setLoading(false);
        setMeme(memeData);
      } catch (err) {
        if (err.name !== "AbortError") {
          setLoading(false);
        }
      }
    } else {
      setValid(true);
    }
  };

  useEffect(() => () => cancelToken.current.abort(), []);

  return (
    <Container className={css.container}>
      <Link to="/xd">Ir a otra parte</Link>
      <Row>
        <Col lg={8}>
          <h3 className={css.title}>Meme Generator</h3>
          <Form noValidate validated={isValid} onSubmit={handleSubmit}>
            <Form.Group id="text0">
              <Form.Label>First Text:</Form.Label>
              <Form.Control
                type="text"
                className="border-0"
                placeholder="First text..."
                onChange={({ target }) => setText0(target.value)}
                disabled={isLoading}
                required
              />
            </Form.Group>

            <Form.Group id="text1">
              <Form.Label>Second Text:</Form.Label>
              <Form.Control
                type="text"
                className="border-0"
                placeholder="Second text..."
                onChange={({ target }) => setText1(target.value)}
                disabled={isLoading}
              />
            </Form.Group>

            <Form.Group>
              <Button
                variant="success"
                className="rounded-0 d-flex align-items-center"
                type="submit"
                disabled={isLoading}
              >
                Send meme
                {isLoading && (
                  <Spinner
                    className="ml-2"
                    animation="border"
                    role="status"
                    size="sm"
                  />
                )}
              </Button>
            </Form.Group>
          </Form>
          <Meme meme={meme} />
        </Col>

        <Col lg={4}>
          <MemeList setMemeId={setMemeId} memeId={memeId} />
        </Col>
      </Row>
    </Container>
  );
}
