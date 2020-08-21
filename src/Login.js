import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateProviderValue } from "./StateProvider";
function Login() {
  const [{}, dispatch] = useStateProviderValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider) 
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button onClick={signIn}> Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
