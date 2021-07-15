import { Suspense } from "react";
import Media from "react-bootstrap/Media";
import Badge from "react-bootstrap/Badge";
import { fetchProfileData } from "../../../fakeApi";
import ErrorBoundary from "../../ErrorBoundary";

// ¡Comienza a cargar los datos con antelación!
const resource = fetchProfileData();

export default function Profiles() {
  return (
    <ErrorBoundary message="Error en ProfileDetails">
      <Suspense fallback={"Loading..."}>
        <ProfileDetails />

        <ErrorBoundary message="Error en ProfileTimeLine">
          <Suspense fallback={"Loading..."}>
            <ProfileTimeline />
          </Suspense>
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  );
}

function ProfileDetails() {
  // Intenta leer la información del usuario, aunque puede no haberse cargado aún
  const user = resource.user.read();
  return <h2>{user.title}</h2>;
}

function ProfileTimeline() {
  // Intenta leer las publicaciones, aunque puede que no se hayan cargado aún
  const postsArray = resource.posts.read();
  const render = (post, i) => {
    return (
      <Media as="li" className="mb-2" key={i}>
        <img
          width={40}
          height={40}
          className="mr-3"
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176e23bf254%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176e23bf254%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2214.5625%22%20y%3D%2237.1%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          alt={post.name}
        />
        <Media.Body>
          <p className="float-left mr-1">{post.name}</p>
          {i % 2 === 0 && (
            <Badge pill variant="success">
              Nuevo
            </Badge>
          )}
        </Media.Body>
      </Media>
    );
  };
  const posts = postsArray.map(render);

  return <ul className="list-unstyled">{posts}</ul>;
}
