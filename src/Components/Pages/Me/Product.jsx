import { memo } from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { css } from "@emotion/css";

const breadcrumb = css`
  > .breadcrumb {
    background: transparent;
    padding: 0;
    margin-top: 1rem;

    a {
      color: inherit;
      font-weight: 400;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`;

function Product({ title }) {
  return (
    <Col lg={6} className="mb-5">
      <Image src="https://picsum.photos/300/300" fluid className="w-100" />
      <h4 className="mt-3 font-weight-normal">{title}</h4>
      <Breadcrumb className={breadcrumb}>
        <Breadcrumb.Item>Strategy</Breadcrumb.Item>
        <Breadcrumb.Item>Marks</Breadcrumb.Item>
        <Breadcrumb.Item>Products</Breadcrumb.Item>
      </Breadcrumb>
    </Col>
  );
}

export default memo(Product);
