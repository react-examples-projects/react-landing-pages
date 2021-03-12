import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "./Spinner";
import { useMutation } from "react-query";
import { createUser } from "./Api";
import { useState, memo } from "react";

function FormUserCreate({ setUsers }) {
  const [auth, setAuth] = useState({
    name: "",
    email: "",
    gender: "Male",
    status: "Active",
  });

  const [isInvalid, setIsInvalid] = useState(false);
  const { isLoading, isError, isSuccess, mutateAsync } = useMutation((body) =>
    createUser(body)
  );

  const onChange = ({ target }) => {
    const { id, value } = target;
    setAuth((state) => ({ ...state, [id]: value }));
  };

  const onSubmit = async () => {
    const userCreated = await mutateAsync(auth);
    setUsers((users) => [...users, userCreated]);
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      setIsInvalid(true);
      return;
    }
    onSubmit();
  };

  return (
    <Form noValidate validated={isInvalid} onSubmit={validateForm}>
      <div className="my-2">
        {isError && <span className="text-danger">A error ocurred</span>}
        {isSuccess && <span className="text-success">User created</span>}
      </div>

      <Spinner isLoading={isLoading} />
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          onChange={onChange}
          value={auth.name}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          onChange={onChange}
          value={auth.email}
          required
        />
      </Form.Group>

      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          onChange={onChange}
          value={auth.gender}
          custom
          required
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Button variant="success" type="submit" block>
          Crear
        </Button>
      </Form.Group>
    </Form>
  );
}

export default memo(FormUserCreate);
