import ListGroup from "react-bootstrap/ListGroup";
import Check from "react-bootstrap/FormCheck";
import css from "../css/todo.module.css";
import { useState } from "react";

export default function TodoItem({ name, isCompleted }) {
  const [isComplete, setIsComplete] = useState(isCompleted);
  const [isFavorite, setFavorite] = useState(false);
  const toggleComplete = () => {
    setIsComplete(!isComplete);
  };

  const toggleFavorite = () => {
    setFavorite(!isFavorite);
  };

  return (
    <ListGroup.Item
      className="bg-transparent d-flex align-content-center"
      action
    >
      <Check
        type="checkbox"
        checked={isComplete}
        onChange={toggleComplete}
        custom
      />
      <span
        className={isComplete ? "text-muted" : "text-dark"}
        style={{
          textDecoration: isComplete ? "line-through" : "none",
        }}
      >
        {name}
      </span>
      <i
        className={`fa fa-star align-self-center ml-auto ${css.starFavorite} ${
          isFavorite ? "text-warning" : "text-dark"
        }`}
        onClick={toggleFavorite}
      />
    </ListGroup.Item>
  );
}
