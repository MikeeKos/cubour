import React, { useState, useRef, useContext } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import NotificationContext from "../../store/notification-context";
import { AnimatePresence, motion, useInstantTransition } from "framer-motion";
import useMeasure from "react-use-measure";
import Link from "next/link";
import {
  primaryLeafSVG,
  secondaryLeafSVG,
  nextLeafSVG,
  commonLeafSVG,
  lastLeafSVG,
} from "../../SVG/homepage";

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
  const [ref, { height, width }] = useMeasure();
  const notificationCtx = useContext(NotificationContext);
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
        password: enteredPassword
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
          throw new Error("Passwords do not match (Front end)");
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

    if (!response.ok) {
      console.log("API FAIL");
    }

    if (response.ok) {
      console.log("API fired successfully");
      console.log(data.isAvaiable);

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
    }, 2000); // 3000 milliseconds = 3 seconds
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

    console.log(value);
  };

  const handlePasswordChange = (e) => {
    const target = e.target;
    const value = target.value;

    if (!isLogin && (value === confirmPasswordInputRef.current.value)) {
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

  const loadingSVG = (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-6 h-6 text-page2 animate-spin fill-page4 brightness-[60%] saturate-50 "
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );

  const checkSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-6 h-6 stroke-pageMenu brightness-[50%] opacity-80"
    >
      <g>
        <g>
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 12l4.95 4.95L19.557 6.343"
          ></path>
        </g>
      </g>
    </svg>
  );

  const failedSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-6 h-6 stroke-pageMenu brightness-[50%] opacity-80"
    >
      <g stroke="#000" strokeLinecap="round" strokeWidth="2.5">
        <path d="M14.5 9.5l-5 5m0-5l5 5M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"></path>
      </g>
    </svg>
  );

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
        <motion.div
          animate={{
            y: [0, 10],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            type: "tween",
            duration: 1,
          }}
          className="border-4 border-pageMenu mt-5 ml-5 mr-5 right-0 md:left-0 absolute w-24 h-24 md:w-36 md:h-36 bg-page3 rounded-full z-50 shadow-xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 10],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            type: "tween",
            duration: 1,
            delay: 0.5,
          }}
          className="border-4 border-pageMenu mt-5 ml-5 mr-5 right-2 top-2 md:left-2 absolute w-24 h-24 md:w-36 md:h-36 bg-page2 rounded-full z-50 shadow-xl md:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex items-center justify-center"
        >
          <Link
            href={"/"}
            className="flex flex-col items-center hover:scale-110 duration-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-8 h-8 md:w-12 md:h-12 fill-pageMenu"
            >
              <path
                fillRule="evenodd"
                d="M4.297 3.293L.59 7l3.707 3.707a1 1 0 001.414-1.414L4.418 8h7.086a1.5 1.5 0 010 3h-1.5a1 1 0 100 2h1.5a3.5 3.5 0 100-7H4.418l1.293-1.293a1 1 0 10-1.414-1.414z"
              ></path>
            </svg>
            <span className="font-page font-extrabold text-pageMenu text-base md:text-lg border-pageMenu duration-150">
              menu
            </span>
          </Link>
        </motion.div>
        <div
          className={`w-full ${
            height < 710 ? "h-[44rem]" : "h-full"
          } absolute flex justify-center bg-page1 overflow-hidden`}
        >
          <motion.svg
            animate={{
              rotate: [-5, 5],
              y: [-5, 5],
              x: [-150, -100],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 5,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-266 0 544 228"
            className="absolute -top-[48rem] w-[160rem] h-[160rem] fill-pageMenu"
          >
            <path d="M0 0h11v5c0 5 6 4 6 10H-6c0-6 6-5 6-10V0m17 17c0 1 0 1 2 2H-8c2-1 2-1 2-2h23m3 4l5 5h-39l5-5h29m7 7l251 200h-544L-16 28h43"></path>
          </motion.svg>
        </div>
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
                    <div className="">
                      <div className="flex justify-center">
                        <TextField
                          sx={{
                            marginRight: "20px",
                            marginBottom: "10px",
                            marginLeft: "20px",
                            width: "100%",
                          }}
                          required
                          id="outlined-required"
                          label="email"
                          inputRef={emailInputRef}
                          spellCheck="false"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                          onChange={handleEmailChange}
                        />
                      </div>
                      <AnimatePresence>
                        {emailFocus && !isLogin && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="w-full px-5"
                          >
                            <div className="w-full h-full bg-page1 hue-rotate-[-200deg] opacity-80 rounded-2xl py-5 px-4 sm:px-10 md:px-12 lg:px-20">
                              <div className="w-full h-full flex flex-col">
                                <div className="flex flex-row items-center justify-between pb-2">
                                  <span className="font-page font-extrabold text-xs sm:text-base md:text-lg text-pageMenu saturate-0">
                                    Is this email valid?
                                  </span>
                                  <div className="flex items-center justify-end">
                                    {isEmailValid ? (
                                      <div>{checkSVG}</div>
                                    ) : (
                                      <div>{failedSVG}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                  <span className="font-page font-extrabold text-xs sm:text-base md:text-lg text-pageMenu saturate-0">
                                    Is this email avaiable?
                                  </span>
                                  <div className="flex items-center justify-end">
                                    {isEmailCheckLoading ? (
                                      <div>{loadingSVG}</div>
                                    ) : (
                                      <div>
                                        {isEmailAvaiable ? (
                                          <div>{checkSVG}</div>
                                        ) : (
                                          <div>{failedSVG}</div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {!isLogin && (
                        <div className="flex justify-center">
                          <TextField
                            sx={{
                              marginTop: "10px",
                              marginRight: "20px",
                              marginBottom: "10px",
                              marginLeft: "20px",
                              width: "100%",
                            }}
                            required
                            id="outlined-required"
                            label="username"
                            inputRef={usernameInputRef}
                            spellCheck="false"
                          />
                        </div>
                      )}
                      <div className="flex justify-center">
                        <TextField
                          sx={{
                            marginTop: "10px",
                            marginRight: "20px",
                            marginBottom: "10px",
                            marginLeft: "20px",
                            width: "100%",
                          }}
                          required
                          id="outlined-password-input"
                          label="password"
                          type="password"
                          inputRef={passwordInputRef}
                          spellCheck="false"
                          onChange={handlePasswordChange}
                          onFocus={() => setPasswordFocus(true)}
                          onBlur={() => setPasswordFocus(false)}
                        />
                      </div>
                      <AnimatePresence>
                        {passwordFocus && !isLogin && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="w-full px-5"
                          >
                            <div className="w-full h-full bg-page1 hue-rotate-[-200deg] opacity-80 rounded-2xl py-5 px-4 sm:px-10 md:px-12 lg:px-20">
                              <div className="w-full h-full flex flex-col">
                                <div className="flex flex-row items-center justify-between pb-2">
                                  <span className="font-page font-extrabold text-xs sm:text-base md:text-lg text-pageMenu saturate-0">
                                    At least 8 characters:
                                  </span>
                                  <div className="flex items-center justify-end">
                                    {characterLenghtValidation ? (
                                      <div>{checkSVG}</div>
                                    ) : (
                                      <div>{failedSVG}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-between pb-2">
                                  <span className="font-page font-extrabold text-xs sm:text-base md:text-lg text-pageMenu saturate-0">
                                    Lowercase and uppercase character:
                                  </span>
                                  <div className="flex items-center justify-end">
                                    {lowerAndUpperCaseValidation ? (
                                      <div>{checkSVG}</div>
                                    ) : (
                                      <div>{failedSVG}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-between pb-2">
                                  <span className="font-page font-extrabold text-xs sm:text-base md:text-lg text-pageMenu saturate-0">
                                    Number:
                                  </span>
                                  <div className="flex items-center justify-end">
                                    {numberValidation ? (
                                      <div>{checkSVG}</div>
                                    ) : (
                                      <div>{failedSVG}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                  <span className="font-page font-extrabold text-xs sm:text-base md:text-lg text-pageMenu saturate-0">
                                    Special character:
                                  </span>
                                  <div className="flex items-center justify-end">
                                    {specialCharacterValidation ? (
                                      <div>{checkSVG}</div>
                                    ) : (
                                      <div>{failedSVG}</div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {!isLogin && (
                        <div className="flex justify-center">
                          <TextField
                            sx={{
                              marginTop: "10px",
                              marginRight: "20px",
                              marginBottom: "10px",
                              marginLeft: "20px",
                              width: "100%",
                            }}
                            required
                            id="outlined-password-input"
                            label="confirm password"
                            type="password"
                            inputRef={confirmPasswordInputRef}
                            spellCheck="false"
                            onFocus={() => setConfirmPasswordFocus(true)}
                            onBlur={() => setConfirmPasswordFocus(false)}
                            onChange={handlePasswordConfirmChange}
                          />
                        </div>
                      )}
                      <AnimatePresence>
                        {confirmPasswordFocus && !isLogin && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="w-full px-5"
                          >
                            <div className="w-full h-full bg-page1 hue-rotate-[-200deg] opacity-80 rounded-2xl py-5 px-4 sm:px-10 md:px-12 lg:px-20">
                              <div className="w-full h-full flex flex-col">
                                <div className="flex flex-row items-center justify-between">
                                  <span className="font-page font-extrabold text-xs sm:text-base md:text-lg text-pageMenu saturate-0">
                                    Are passwords the same?
                                  </span>
                                  <div className="flex items-center justify-end">
                                    {passwordsAreTheSame ? (
                                      <div>{checkSVG}</div>
                                    ) : (
                                      <div>{failedSVG}</div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
