import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { fetchProfileData } from "../fakeApi";
import { Layout, Button, Typography, List } from "antd";
import { LoadingProfilePage, LoadingProfileTime } from "./LoadingsComponents";

// ¡Comienza a cargar los datos con antelación!
const resource = fetchProfileData();
const { Header, Content } = Layout;

export default function ProfilePage() {
  return (
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
        <Suspense fallback={<LoadingProfilePage />}>
          <ProfileDetails />

          <Suspense fallback={<LoadingProfileTime/>}>
            <ProfileTimeline />
          </Suspense>

        </Suspense>
      </Content>
    </Layout>
  );
}

function ProfileDetails() {
  // Intenta leer la información del usuario, aunque puede no haberse cargado aún
  const user = resource.user.read();
  return <Typography.Title level={3}>{user.title}</Typography.Title>;
}

function ProfileTimeline() {
  // Intenta leer las publicaciones, aunque puede que no se hayan cargado aún
  const posts = resource.posts.read();
  return (
    <List
      bordered
      dataSource={posts}
      renderItem={(post) => (
        <List.Item>
          <Typography.Text>{post.name}</Typography.Text>
        </List.Item>
      )}
    />
  );
}
