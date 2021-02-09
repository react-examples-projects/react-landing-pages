import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { listGroup } from "./style.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getMemes } from "./https";

export default function MemeList({ memeId, setMemeId }) {
  const [memesId, setMemesId] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const cancelToken = new AbortController();
    getMemes(cancelToken.signal)
      .then((memesIds) => {
        setMemesId(memesIds?.data.memes);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setLoading(false);
        }
      });

    return () => cancelToken.abort();
  }, []);

  if (isLoading) {
    return (
      <SkeletonTheme color="#CDCDCD" highlightColor="#FFFFFF">
        <Skeleton count={4} height={100} color="red" />
      </SkeletonTheme>
    );
  }
  return (
    <>
      <h6 className="mt-5 mb-3">Memes template:</h6>

      <ListGroup
        className={`${listGroup} overflow-auto mb-4 mt-4 mt-lg-0`}
        style={{ height: "500px" }}
        variant="flush"
      >
        {memesId?.map(({ id, name, url }) => {
          return (
            <ListGroup.Item
              key={id}
              className="text-dark bg-transparent pl-0"
              onClick={() => setMemeId(id)}
              action={id === memeId}
            >
              <Image
                src={url}
                width="100%"
                height="100"
                className="mr-2"
                loading="lazy"
                fluid
              />
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
    </>
  );
}
