import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "./Spinner";
import { memo } from "react";

function UserPosts({ posts, isLoading }) {
  if (isLoading) {
    return <Spinner isLoading={isLoading} size="sm" />;
  }

  if (!posts || !posts.length) {
    return (
      <h6 className="mt-1 text-muted">Not there posts.</h6>
    );
  }

  return (
    <ListGroup variant="flush">
      {posts.map((post) => {
        return (
          <ListGroup.Item>
            <small className="d-block text-muted">{post.title}</small>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default memo(UserPosts);
