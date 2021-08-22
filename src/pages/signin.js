import React from "react";
import { Link } from "react-router-dom";

function SignInPage({ history }) {
  const goHome = () => {
    history.push("/");
  };
  return (
    <div>
      <h1>Sign in Page</h1>
      <Link to="/">Go home</Link>
      <button onClick={goHome}>Go home</button>
    </div>
  );
}

export default SignInPage;
