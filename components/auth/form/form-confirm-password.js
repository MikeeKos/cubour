import React from "react";
import TextField from "@mui/material/TextField";
import { motion, AnimatePresence } from "framer-motion";
import { checkSVG, failedSVG } from "../../../SVG/auth-svgs";

function FormConfirmPassword({isLogin, confirmPasswordInputRef, setConfirmPasswordFocus, confirmPasswordFocus, passwordsAreTheSame, handlePasswordConfirmChange}) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default FormConfirmPassword;
