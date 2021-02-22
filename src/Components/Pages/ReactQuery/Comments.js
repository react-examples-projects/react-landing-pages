import { useQuery } from "react-query";
import { memo } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";


function Comments() {
   const {isLoading, isError, data} = useQuery("comments");
  
}

export default memo(Comments)
