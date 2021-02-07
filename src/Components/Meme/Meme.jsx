import Image from "react-bootstrap/Image";
import { memo } from "react";

function Meme({ meme }) {
  if (meme?.success) {
    return (
      <Image src={meme.data.url} className="w-100" alt="Meme preview" fluid />
    );
  }

  if (meme !== null) {
    return <h5>An network error ocurred while it's creating the image meme</h5>;
  }

  return null;
}

export default memo(Meme);
