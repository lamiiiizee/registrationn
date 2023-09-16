import React, { useEffect, useRef, useState } from "react";
import HomePage from "./HomePage";

function SignUp() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [sign, setSign] = useState(false);
  const localSignUp = localStorage.getItem("auther");
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localSignUp) {
      setSign(true);
    }
  });
  const HandleClick = (event) => {
    event.preventDefault();
    if (name.current.value && email.current.value && password.current.value) {
      console.log(
        name.current.value,
        email.current.value,
        password.current.value
      );
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("auther", email.current.value);
      //   alert("account created successfuly");
      window.location.reload();
    }
  };
  return (
    <>
      {showHome ? (
        <HomePage />
      ) : (
        <div class="form-main">
          <div class="main-wrapper">
            <h2 class="form-head">Sign Up</h2>
            <form class="form-wrapper">
              <div class="form-card">
                <input
                  class="form-input"
                  type="text"
                  name="full_name"
                  required="required"
                  ref={name}
                />
                <label class="form-label" for="full_name">
                  Username
                </label>
              </div>

              <div class="form-card">
                <input
                  class="form-input"
                  type="email"
                  name="email"
                  required="required"
                  ref={email}
                />
                <label class="form-label" for="email">
                  Email
                </label>
              </div>

              <div class="form-card">
                <input
                  class="form-input"
                  type="password"
                  name="full_name"
                  required="required"
                  ref={password}
                />
                <label class="form-label" for="full_name">
                  Password
                </label>
              </div>

              {/* <div class="form-card">
              <input
                class="form-input"
                type="password"
                name="full_name"
                required="required"
              />
              <label class="form-label" for="full_name">
                confirm password
              </label>
            </div> */}

              {/* <div class="form-card">
              <textarea
                class="form-textarea"
                maxlength="420"
                rows="3"
                name="phone_number"
                required="required"
              ></textarea>
              <label class="form-textarea-label" for="phone_number">
                Address
              </label>
            </div> */}

              <div className="d-flex">
                <div className="btn-wrap">
                  <button onClick={HandleClick}> Submit </button>
                </div>
                <div className="btn-wrap-singup">
                  <button> Login </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
