import React, { Suspense, useReducer } from "react";
import { Link } from "react-router-dom";
import { fetchProfileData } from "../fakeApi";
import { Layout, Button, Typography, List } from "antd";
import { LoadingProfilePage, LoadingProfileTime } from "./LoadingsComponents";
import ErrorBoundary from "./ErrorBoundary";
import userReducer from "./reducers/userReducer";
import { RedditOutlined } from "@ant-design/icons";

// ¡Comienza a cargar los datos con antelación!
const resource = fetchProfileData();
const { Header, Content } = Layout;

export default function ProfilePage() {
  const [state, dispatch] = useReducer(userReducer, {});

  const update = () => {
    dispatch({
      type: "set",
      payload: {
        name: "libardo",
        create_at: new Date().toLocaleString(),
        token: "SAI3489R93IUWE",
      },
    });

    console.log(state);
  };

  return (
    <ErrorBoundary>
      <Layout>
        <Header>
          <Link to="/signup" style={{ marginRight: "1rem" }}>
            <Button type="primary">
              <Typography.Text style={{ color: "#fff" }} strong>
                Registrarse
              </Typography.Text>
            </Button>
          </Link>

          <Link to="/login">
            <Button type="primary">
              <Typography.Text style={{ color: "#fff" }} strong>
                Iniciar sesión
              </Typography.Text>
            </Button>
          </Link>
        </Header>

        <Content style={{ padding: "2rem 4rem", background: "#fff" }}>
          <ErrorBoundary message="Error en ProfileDetails">
            <Suspense fallback={<LoadingProfilePage />}>
              <ProfileDetails />

              <ErrorBoundary message="Error en ProfileTimeLine">
                <Suspense fallback={<LoadingProfileTime />}>
                  <ProfileTimeline />
                </Suspense>
              </ErrorBoundary>
            </Suspense>
          </ErrorBoundary>

          <Button
            type="danger"
            onClick={update}
            style={{ marginTop: "2rem" }}
            block
            ghost
            size="large"
          >
            Cambiar estado
          </Button>

          <Typography.Paragraph style={{ marginTop: "2rem" }}>
            <Typography.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis enim, voluptatem dolor delectus, nisi laborum itaque
              error placeat consectetur iusto, labore iste sed facere eveniet
              earum odio assumenda amet magnam.
            </Typography.Text>
          </Typography.Paragraph>

          <Button
            type="primary"
            onClick={() => alert("Cliked")}
            icon={<RedditOutlined />}
            shape="round"
          >
            Agregar más
          </Button>
        </Content>
      </Layout>
    </ErrorBoundary>
  );
}

function ProfileDetails() {
  // Intenta leer la información del usuario, aunque puede no haberse cargado aún
  const user = resource.user.read();
  console.log("user:", user);
  return <Typography.Title level={3}>{user.title}</Typography.Title>;
}

function ProfileTimeline() {
  // Intenta leer las publicaciones, aunque puede que no se hayan cargado aún
  const posts = resource.posts.read();
  const render = (post) => {
    return (
      <List.Item>
        <Typography.Text>{post.name}</Typography.Text>
      </List.Item>
    );
  };
  return <List bordered dataSource={posts} renderItem={render} />;
}
