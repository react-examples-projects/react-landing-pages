import React, { Suspense } from "react";
import "./App.css";
import { fetchProfileData } from "./fakeApi";
import Skeleton from "react-loading-skeleton";

// ¡Comienza a cargar los datos con antelación!
const resource = fetchProfileData();

function LoadingProfilePage() {
  return (
    <>
      <Skeleton width={150} />
      <Skeleton count={5} />
    </>
  );
}

function ProfilePage() {
  return (
    <Suspense fallback={<LoadingProfilePage />}>
      <ProfileDetails />
      <Suspense fallback={<Skeleton count={5} />}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}

function ProfileDetails() {
  // Intenta leer la información del usuario, aunque puede no haberse cargado aún
  const user = resource.user.read();
  return <h1>{user.title}</h1>;
}

function ProfileTimeline() {
  // Intenta leer las publicaciones, aunque puede que no se hayan cargado aún
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <ProfilePage />
    </div>
  );
}

export default App;
