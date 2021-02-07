import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { getMemes } from "./https";

export default function MemeList({ memeId, setMemeId }) {
  const [memesId, setMemesId] = useState([]);

  useEffect(() => {
    const cancelToken = new AbortController();
    getMemes(cancelToken.signal)
      .then((memesIds) => {
        setMemesId(memesIds?.data.memes);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => cancelToken.abort();
  }, []);

  return (
    <ListGroup
      className="overflow-auto mb-4 mt-4 mt-lg-0"
      style={{ height: "500px" }}
      variant="flush"
    >
      {memesId.map(({ id, name, url }) => {
        return (
          <ListGroup.Item
            key={id}
            className="text-dark"
            onClick={() => setMemeId(id)}
            action={id === memeId}
          >
            <Image src={url} width="100" height="100" className="mr-2" fluid />
            <p className="mt-2 mb-0">{name}</p>
            {id === memeId && (
              <Badge variant="success" className="font-weight-light">
                Selected
              </Badge>
            )}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
