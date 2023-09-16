import "./Style.css";
import React from "react";

function Login() {
  return (
    <>
      <div className="form-main">
        <div className="main-wrapper">
          <h2 className="form-head">Login</h2>
          <form className="form-wrapper">
            <div className="form-card">
              <input
                className="form-input"
                type="text"
                name="full_name"
                required="required"
              />
              <label className="form-label" for="full_name">
                username or email
              </label>
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="email"
                name="email"
                required="required"
              />
              <label className="form-label" for="email">
                Password
              </label>
            </div>

            <div className="d-flex">
              <div className="btn-wrap">
                <button> Submit </button>
              </div>
              <div className="btn-wrap-singup">
                <button> Sign up </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
