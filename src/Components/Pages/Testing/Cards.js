import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";

export default function Cards() {
  return (
    <>
      <Card body className="mt-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, est.
        </p>
      </Card>

      <Row className="mt-4">
        <Col>
          <Card border="primary">
            <Card.Header>Lorem, ipsum.</Card.Header>
            <Card.Img src="https://picsum.photos/200/100" />
            <Card.Body>
              <Card.Title>Lorem, ipsum dolor.</Card.Title>
              <Card.Subtitle className="mb-4 text-muted">
                Lorem ipsum dolor sit.
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat, eum?
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="link" href="#list-users">
                Ver listas
              </Button>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card border="success">
            <Card.Header>
              <Card.Title>Lorem, ipsum dolor.</Card.Title>
              <Card.Subtitle className="text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum, distinctio.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-transparent">
              <Button variant="success" block>
                Accept
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "3rem" }}>
        <Col>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176e23bf254%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176e23bf254%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2214.5625%22%20y%3D%2237.1%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="Generic placeholder"
            />
            <Media.Body>
              <p>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  eligendi repudiandae ab a iusto! Est aut tempore explicabo
                  blanditiis eaque?
                </small>
              </p>
            </Media.Body>
          </Media>
        </Col>

        <Col>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176e23bf254%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176e23bf254%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2214.5625%22%20y%3D%2237.1%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="Generic placeholder"
            />
            <Media.Body>
              <p>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  eligendi repudiandae ab a iusto! Est aut tempore explicabo
                  blanditiis eaque?
                </small>
              </p>
            </Media.Body>
          </Media>
        </Col>

        <Col>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176e23bf254%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176e23bf254%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2214.5625%22%20y%3D%2237.1%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="Generic placeholder"
            />
            <Media.Body>
              <p>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  eligendi repudiandae ab a iusto! Est aut tempore explicabo
                  blanditiis eaque?
                </small>
              </p>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </>
  );
}
