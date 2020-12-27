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
