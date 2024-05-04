import React from "react";
import TextField from "@mui/material/TextField";
import { checkSVG, failedSVG } from "../../../SVG/auth-svgs";
import { motion, AnimatePresence } from "framer-motion";

function FormPassword({
  passwordInputRef,
  handlePasswordChange,
  setPasswordFocus,
  passwordFocus,
  isLogin,
  characterLenghtValidation,
  lowerAndUpperCaseValidation,
  numberValidation,
  specialCharacterValidation,
}) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default FormPassword;
