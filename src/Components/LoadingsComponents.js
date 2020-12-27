import React from "react";
import Skeleton from "react-loading-skeleton";

export function LoadingProfilePage() {
  return (
    <>
      <Skeleton width={170} height="30px" />
      <Skeleton count={10} height="25px" />
    </>
  );
}

export function LoadingProfileTime() {
  return <Skeleton count={10} height="25px" />;
}

export function LoadingSignup() {
  const styles = {
    width: "100%",
    maxWidth: "300px",
    margin: "15rem auto auto auto",
  };

  return (
    <div style={styles}>
      <Skeleton count={4} height="25px" />
    </div>
  );
}

export function LoadingMain() {
  const styles = {
    nav: {
      marginBottom: "5rem",
    },

    content: {
      width: "100%",
      maxWidth: "1200px",
      margin: "auto",
    },
  };
  return (
    <>
      <div style={styles.nav}>
        <Skeleton height={50} />
      </div>
      <div style={styles.content}>
        <Skeleton height={500} />
      </div>
    </>
  );
}
