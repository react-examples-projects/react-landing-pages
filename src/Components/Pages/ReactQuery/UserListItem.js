import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import UserPosts from "./UserPosts";
import { useState, memo } from "react";
import { useMutation } from "react-query";
import { fetchUserPosts } from "./Api";

function UserListItem({ user }) {
  const { mutate, isError, data, isLoading } = useMutation((id) =>
    fetchUserPosts(id)
  );
  const [isOpen, setOpen] = useState(false);

  const getPostUser = (id) => {
    setOpen((f) => !f);
    !isOpen && mutate(id);
  };

  return (
    <ListGroup.Item key={user.id}>
      <small className="d-block">{user.name}</small>
      <small className="d-block">{user.email}</small>
      <small className="d-block">{user.gender}</small>

      <Accordion>
        <Accordion.Toggle
          eventKey="0"
          as={Button}
          variant="outline-primary"
          size="sm"
          className="my-2"
          onClick={() => getPostUser(user.id)}
        >
          <span>{!isOpen ? "See posts" : "Close posts"}</span>
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <UserPosts posts={data} isLoading={isLoading} />
        </Accordion.Collapse>
      </Accordion>
    </ListGroup.Item>
  );
}

export default memo(UserListItem);
