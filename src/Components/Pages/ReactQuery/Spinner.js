import Spinner from "react-bootstrap/Spinner";
import { memo } from "react";

function Loader({ isLoading, variant = "secondary", ...props }) {
  if (isLoading) {
    return (
      <Spinner animation="border" role="status" variant={variant} {...props}>
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return null;
}
export default memo(Loader);
