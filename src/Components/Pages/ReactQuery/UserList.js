import ListGroup from "react-bootstrap/ListGroup";
import { css } from "@emotion/css";
import UserListItem from "./UserListItem";
import { memo } from "react";

const listCss = css`
  height: 400px;
  overflow-y: auto;
`;

function UserList({ users }) {
  if (!users) return null;

  return (
    <ListGroup variant="flush" className={listCss}>
      {users.map((user) => {
        return <UserListItem user={user} key={user.id}/>;
      })}
    </ListGroup>
  );
}

export default memo(UserList);
