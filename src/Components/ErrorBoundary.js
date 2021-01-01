import React from "react";

export default class ErrorBoundary extends React.Component {
  state = {
    isError: null,
    error: null,
  };

  static getDerivedStateFromError(error) {
    return {
      isError: true,
      error,
    };
  }

  render() {
    const message = this.props.message || "Ocurrió un error en la interfaz";
    if (this.state.isError) {
      return <h1>{message}</h1>;
    }

    return this.props.children;
  }
}
