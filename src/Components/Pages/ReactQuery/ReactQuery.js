import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "./Spinner";
import UserList from "./UserList";
import FormUserCreate from "./FormUserCreate";
import { fetchUsers } from "./Api";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { useState, useEffect, useMemo } from "react";

const btn = css`
  --color: #f2a154;
  display: block;
  margin: 1rem 0;
  padding: 0.5rem 1.4rem;
  border: 2px solid var(--color);
  background: transparent;
  color: var(--color);
  font-weight: bolder;
  border-radius: 4px;
  letter-spacing: 1px;
  transition: background 0.2s linear;

  &:hover {
    background: var(--color);
    color: #fff;
  }
`;

const jumbotron = css`
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  color: #fff;
`;

const ButtonMore = styled.button`
  display: ${(props) => props.display || "inline-block"};
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  border: 0;
  text-align: center;
  background: #f875aa;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background: #e84688;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem #e846886b;
  }
`;

const queryClient = new QueryClient();

function ReactQuery() {
  const { isLoading, data } = useQuery("users", fetchUsers, {
    refetchOnWindowFocus: false,
  });

  const [users, setUsers] = useState([]);
  const updateUsers = useMemo(() => setUsers, []);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <Container>
      <Jumbotron className={`${jumbotron} mt-5 mb-4`}>
        <h4>Probando react-query y styled components</h4>
        <ButtonMore>Saber más...</ButtonMore>
      </Jumbotron>

      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        dignissimos voluptate autem assumenda vel maxime in magni velit! Soluta
        consequatur ad aliquid.
      </p>

      <Spinner isLoading={isLoading} />
      <Row>
        <Col>
          <UserList users={users} />
        </Col>
        <Col>
          <FormUserCreate setUsers={updateUsers} />
        </Col>
      </Row>

      <button className={btn}>Aceptar</button>
    </Container>
  );
}

export default function Wrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQuery />
    </QueryClientProvider>
  );
}
