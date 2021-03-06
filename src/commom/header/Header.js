import React, { useEffect, useState } from "react";
import "./Header.css";
import ReactLogo from "../../assets/logo.svg";
import { Button } from "@material-ui/core";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import MaterialTabs from "./MaterialTabs";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function Header(props) {
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) ;

  const initialLoginStatus = userDetails&&userDetails.loginStatus
  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [loginStatus, setLoginStatus] = React.useState(initialLoginStatus);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  // function isLoggedIn(){
  //     const login=JSON.parse(localStorage.getItem("userDetails"))
  //     return login&&login.loginStatus
  // }

  function handleLogout() {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    userDetails.loginStatus = false;
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setLoginStatus(false);
  }

  

  function updateLoginStatus() {
    const login = JSON.parse(localStorage.getItem("userDetails"));
    if (login && login.loginStatus) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }

  const bookShowHandler = () => {
   
    if (!loginStatus) {
      
      setIsOpen(true);
      return;
    }
    if (props.movieId && props.history) {
      props.history.push("/bookshow/" + props.movieId);
    }
  };

  useEffect(updateLoginStatus);

  return (
    <div>
      <div>
        <div className="header">
          <img className="logo rotate linear infinite" src={ReactLogo} alt="" />

          <div className="groupingButton">

          {props.movieId && (
            <Button
              variant="contained"
              color="primary"
              id="btnBookShow"
              onClick={bookShowHandler}
            >
              Book Show
            </Button>
          )}

          {!loginStatus && (
            <Button
              variant="contained"
              className="btnLogin"
              onClick={() => {
                openModal();
              }}
            >
              Login
            </Button>
          )}
          {loginStatus && (
            <Button
              variant="contained"
              className="btnLogin"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}

          </div>
         

         
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <MaterialTabs
              {...props}
              setLoginStatus={setLoginStatus}
              setIsOpen={setIsOpen}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Header />, document.getElementById("root"));

export default Header;
