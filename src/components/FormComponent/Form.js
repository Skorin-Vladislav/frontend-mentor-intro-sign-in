import React from "react";
import "./Form.css";
import Button from "../Button/Button";

function Form() {
  //true if error
  const checkText = (value) => {
    if (value.length < 2) return true;
    return /\W+|\d/gm.test(value);
  };

  const checkFirstName = () => {
    let FName = document.getElementById("FName");
    let FName_error = document.getElementById("FName_error");

    if (checkText(FName.value)) {
      FName.classList.add("error");
      FName_error.innerHTML = "Name is invalid\r\n";
      return true;
    } else {
      FName.classList.remove("error");
      FName_error.innerHTML = "";
      return false;
    }
  };

  const checkSecondName = () => {
    let LName = document.getElementById("LName");
    let LName_error = document.getElementById("LName_error");

    if (checkText(LName.value)) {
      LName.classList.add("error");
      LName_error.innerHTML = "Last name is invalid\r\n";
      return true;
    } else {
      LName.classList.remove("error");
      LName_error.innerHTML = "";
      return false;
    }
  };

  const checkEmail = () => {
    let Email = document.getElementById("Email");
    let Email_error = document.getElementById("Email_error");
    if (!Email.checkValidity() || Email.value.length < 5) {
      Email.classList.add("error");
      Email_error.innerHTML = "Invalid Email\r\n";
      return true;
    } else {
      Email.classList.remove("error");
      Email_error.innerHTML = "";
      return false;
    }
  };

  const checkPassword = () => {
    let Password = document.getElementById("Password");
    let Password_error = document.getElementById("Password_error");

    if (Password.value.length < 5) {
      Password.classList.add("error");
      Password_error.innerHTML = "Invalid Password\r\n";
      return true;
    } else {
      Password.classList.remove("error");
      Password_error.innerHTML = "";
      return false;
    }
  };

  const checkSubmit = () => {
    console.log(
      !checkFirstName() && checkSecondName() && checkEmail() && checkPassword()
    );
    return (
      checkFirstName() && checkSecondName() && checkEmail() && checkPassword()
    );
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={checkSubmit}>
        <div className="inputWrapper">
          <input
            type="text"
            id="FName"
            name="FName"
            placeholder="First Name"
            onChange={checkFirstName}
          ></input>
          <div id="FName_error"></div>
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            id="LName"
            name="LName"
            placeholder="Last Name"
            onChange={checkSecondName}
          ></input>
          <div id="LName_error"></div>
        </div>
        <div className="inputWrapper">
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Email Address"
            onChange={checkEmail}
          ></input>
          <div id="Email_error"></div>
        </div>
        <div className="inputWrapper">
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Password"
            onChange={checkPassword}
          ></input>
          <div id="Password_error"></div>
        </div>
      </form>
      <button onClick={checkSubmit}>claim your free trial</button>
      <div className="terms-servises">
        <p>
          By clicking this button, you are agreeng to our{" "}
          <a href="https://en.wikipedia.org/wiki/Category:Terms_of_service">
            Terms and Servises
          </a>
        </p>
      </div>
    </div>
  );
}

export default Form;
