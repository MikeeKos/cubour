import React from "react";
import TextField from "@mui/material/TextField";
import { motion, AnimatePresence } from "framer-motion";
import { loadingSVG, checkSVG, failedSVG } from "../../../SVG/auth-svgs";

function FormEmail({
  setEmailFocus,
  emailInputRef,
  handleEmailChange,
  emailFocus,
  isLogin,
  isEmailCheckLoading,
  isEmailValid,
  isEmailAvaiable,
}) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default FormEmail;
