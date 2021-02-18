import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { listGroup } from "./style.module.css";
import { memo } from "react";

function MemeLasts({ memes }) {
  if (!memes?.length) {
    return null;
  }
  return (
    <>
      <h6 className="mt-5 mb-3">Last five memes created:</h6>
      <ListGroup
        className={`${listGroup} overflow-auto`}
        variant="flush"
        style={{ height: "500px" }}
      >
        {memes?.map((memeUrl) => {
          return (
            <ListGroup.Item className="bg-transparent pl-0" key={memeUrl}>
              <Image
                src={memeUrl}
                width="100%"
                height="100"
                className="mr-2"
                loading="lazy"
                fluid
              />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

export default memo(MemeLasts);
