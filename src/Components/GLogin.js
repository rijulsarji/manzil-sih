import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import "../CSS/Components/GLogin.css";

const clientId =
  "416912370993-gc39fictntnm2oj6j073tpo6c1it87ki.apps.googleusercontent.com";

function Login() {

  const navigate = useNavigate();
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj.name);
    navigate("/ngo/dataInput")
    sessionStorage.setItem("loginData", JSON.stringify(res.profileObj.name));
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <div className="abc">
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          className="xyz"
        />

    </div>
  );
}
export default Login;
