import React, { useState, useRef, useContext } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import NotificationContext from "../../store/notification-context";
import useMeasure from "react-use-measure";
import {
  primaryLeafSVG,
  secondaryLeafSVG,
  nextLeafSVG,
  commonLeafSVG,
  lastLeafSVG,
} from "../../SVG/homepage";
import FloatingBackButton from "./decoration/floating-back-button";
import SwingingReflector from "./decoration/swinging-reflector";
import FormEmail from "./form/form-email";
import FormUsername from "./form/form-username";
import FormPassword from "./form/form-password";
import FormConfirmPassword from "./form/form-confirm-password";

async function createUser(email, password, username, confirmPassword) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, username, confirmPassword }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "something went wrong when signing in");
  }

  if (response.ok) {
    await signIn("credentials", {
      email: email,
      password: password,
    });
  }

  return data;
}

function AuthForm() {
  const notificationCtx = useContext(NotificationContext);
  const [ref, { height, width }] = useMeasure();
  const [isLogin, setIsLogin] = useState(true);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const router = useRouter();

  const [emailFocus, setEmailFocus] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailAvaiable, setIsEmailAvaible] = useState(false);
  const [isEmailCheckLoading, setIsEmailCheckLoading] = useState(false);

  const [passwordFocus, setPasswordFocus] = useState(false);
  const [characterLenghtValidation, setCharacterLengthValidation] =
    useState(false);
  const [lowerAndUpperCaseValidation, setLowerAndUpperCaseValidation] =
    useState(false);
  const [numberValidation, setNumberValidation] = useState(false);
  const [specialCharacterValidation, setSpecialCharacterValidation] =
    useState(false);

  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [passwordsAreTheSame, setPasswordAreTheSame] = useState(false);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //client side validation
    if (isLogin) {
      notificationCtx.showNotification({
        title: "sending your login info...",
        message: "sending login info for verification",
        status: "pending",
      });
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      notificationCtx.showNotification({
        title: "success!",
        message: "successfully logged in",
        status: "success",
      });

      if (result.error) {
        notificationCtx.showNotification({
          title: "Error!",
          message: "email or password wrong",
          status: "error",
        });
      }

      if (!result.error) {
        router.replace("/");
      }
    } else {
      const enteredUsername = usernameInputRef.current.value;
      const enteredConfirmPassword = confirmPasswordInputRef.current.value;
      notificationCtx.showNotification({
        title: "sending your register info...",
        message: "sending register info for verification",
        status: "pending",
      });
      try {
        if (enteredPassword !== enteredConfirmPassword) {
          // Passwords do not match, throw an error
          throw new Error("Passwords do not match");
        }

        const result = await createUser(
          enteredEmail,
          enteredPassword,
          enteredUsername,
          enteredConfirmPassword
        );

        notificationCtx.showNotification({
          title: "success!",
          message: "you are successfully logged in",
          status: "success",
        });
      } catch (error) {
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message,
          status: "error",
        });
      }
    }
  }

  async function checkIfEmailIsInUse(email) {
    const response = await fetch("/api/auth/emailcheck", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      if (data.isAvaiable) {
        setIsEmailAvaible(true);
      } else {
        setIsEmailAvaible(false);
      }
      setIsEmailCheckLoading(false);
    }
  }

  let debounceTimer;
  const handleKeystrokeEmail = (email) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      checkIfEmailIsInUse(email);
    }, 2000);
  };

  const handleEmailChange = (e) => {
    setIsEmailCheckLoading(true);
    const target = e.target;
    const value = target.value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(value);
    if (isValidEmail) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    handleKeystrokeEmail(value);
  };

  const handlePasswordChange = (e) => {
    const target = e.target;
    const value = target.value;

    if (!isLogin && value === confirmPasswordInputRef.current.value) {
      setPasswordAreTheSame(true);
    } else {
      setPasswordAreTheSame(false);
    }

    if (value.length < 8) {
      setCharacterLengthValidation(false);
    } else {
      setCharacterLengthValidation(true);
    }

    function hasLowerCaseAndUpperCase(str) {
      const hasLowerCase = /[a-z]/.test(str);
      const hasUpperCase = /[A-Z]/.test(str);
      return hasLowerCase && hasUpperCase;
    }
    if (hasLowerCaseAndUpperCase(value)) {
      setLowerAndUpperCaseValidation(true);
    } else {
      setLowerAndUpperCaseValidation(false);
    }

    function hasNumericCharacter(str) {
      return /\d/.test(str);
    }
    if (hasNumericCharacter(value)) {
      setNumberValidation(true);
    } else {
      setNumberValidation(false);
    }

    function hasSpecialCharacter(str) {
      return /[^\w\s]/.test(str);
    }
    if (hasSpecialCharacter(value)) {
      setSpecialCharacterValidation(true);
    } else {
      setSpecialCharacterValidation(false);
    }
  };

  const handlePasswordConfirmChange = (e) => {
    const target = e.target;
    const value = target.value;

    if (value === passwordInputRef.current.value) {
      setPasswordAreTheSame(true);
    } else {
      setPasswordAreTheSame(false);
    }
  };

  return (
    <React.Fragment>
      <div
        ref={ref}
        className="relative w-screen h-screen overflow-y-auto bg-page1"
      >
        <div className="w-[20rem] h-full right-0 absolute z-10 mix-blend-difference overflow-hidden">
          {primaryLeafSVG}
          {secondaryLeafSVG}
          {nextLeafSVG}
          {commonLeafSVG}
          {lastLeafSVG}
        </div>
        <FloatingBackButton />
        <SwingingReflector height={height} />
        <div className="w-full h-[42rem] absolute py-10 flex items-center justify-center z-20">
          <div className="w-[80%] md:w-[60%] lg:w-[50%] h-full pt-32">
            <div className="relative w-full h-full bg-page4 border-4 border-pageMenu rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex justify-center">
              <div className="w-[80%] h-[5rem] absolute border-4 border-pageMenu rounded-2xl -top-10 bg-page2 shadow-2xl z-20">
                <span className=" font-page tracking-wide flex items-center justify-center font-extrabold text-pageMenu text-xl sm:text-3xl md:text-4xl w-full h-full">
                  {isLogin ? "login" : "create account"}
                </span>
              </div>
              <div className="w-full h-full p-5">
                <div className="w-full h-full bg-page1 border-4 border-pageMenu rounded-2xl overflow-y-scroll">
                  <form
                    autoComplete="off"
                    onSubmit={submitHandler}
                    className="pt-8 hue-rotate-[-160deg] brightness-50 saturate-[0.8]"
                  >
                    <div>
                      <FormEmail
                        setEmailFocus={setEmailFocus}
                        emailInputRef={emailInputRef}
                        handleEmailChange={handleEmailChange}
                        emailFocus={emailFocus}
                        isLogin={isLogin}
                        isEmailCheckLoading={isEmailCheckLoading}
                        isEmailValid={isEmailValid}
                        isEmailAvaiable={isEmailAvaiable}
                      />
                      <FormUsername
                        isLogin={isLogin}
                        usernameInputRef={usernameInputRef}
                      />
                      <FormPassword
                        passwordInputRef={passwordInputRef}
                        handlePasswordChange={handlePasswordChange}
                        setPasswordFocus={setPasswordFocus}
                        passwordFocus={passwordFocus}
                        isLogin={isLogin}
                        characterLenghtValidation={characterLenghtValidation}
                        lowerAndUpperCaseValidation={
                          lowerAndUpperCaseValidation
                        }
                        numberValidation={numberValidation}
                        specialCharacterValidation={specialCharacterValidation}
                      />
                      <FormConfirmPassword
                        isLogin={isLogin}
                        confirmPasswordInputRef={confirmPasswordInputRef}
                        setConfirmPasswordFocus={setConfirmPasswordFocus}
                        handlePasswordConfirmChange={
                          handlePasswordConfirmChange
                        }
                        confirmPasswordFocus={confirmPasswordFocus}
                        passwordsAreTheSame={passwordsAreTheSame}
                      />
                    </div>
                    <div className="flex flex-row">
                      <div className="flex items-center justify-center">
                        <button
                          type="submit"
                          className="ml-7 sm:ml-14 md:ml-14 p-4 sm:p-5 hover:scale-105 hover:drop-shadow-md duration-75 tracking-tight text-pageMenu text-xl font-extrabold font-page shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full h-1/2 bg-page1 rounded-lg border-4 border-pageMenu flex items-center"
                        >
                          {isLogin ? "login" : "register"}
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          className="tracking-tight text-xs sm:text-sm ml-2 mr-2 md:ml-4 lg:ml-12 text-pageMenu font-page hover:underline"
                          type="button"
                          onClick={switchAuthModeHandler}
                        >
                          {isLogin
                            ? "create new account"
                            : "login with existing account"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AuthForm;
