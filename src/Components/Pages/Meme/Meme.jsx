import Image from "react-bootstrap/Image";
import { memo } from "react";

function Meme({ meme }) {
  if (meme?.success) {
    return (
      <>
        <a
          href={meme.data.url}
          download="meme"
          className="mb-2 d-block"
          onClick={(e) => e.preventDefault()}
        >
          Descargar imágen <i className="fa fa-download ml-1 mt-3" />
        </a>
        <Image src={meme.data.url} className="w-100" alt="Meme preview" fluid />
      </>
    );
  }

  if (meme !== null) {
    return <h5>An network error ocurred while it's creating the image meme</h5>;
  }

  return null;
}

export default memo(Meme);
