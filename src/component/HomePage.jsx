import React from "react";

function HomePage() {
  const LogOut = () => {
    localStorage.removeItem("auther");
    window.location.reload();
  };

  const DeleteAccpunt = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div className="d-flex-log-logou">
        <a className="navbar-item" onClick={LogOut}>
          LogOut
        </a>
        <a className="navbar-item" onClick={DeleteAccpunt}>
          Delete Account
        </a>
      </div>
      <div className="container">
        <p className="text-green">Autentication successfuly</p>
        <h1>Home Page</h1>
      </div>
    </>
  );
}

export default HomePage;
