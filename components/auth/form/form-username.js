import React from "react";
import TextField from "@mui/material/TextField";

function FormUsername({isLogin, usernameInputRef}) {
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
            id="outlined-required"
            label="username"
            inputRef={usernameInputRef}
            spellCheck="false"
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default FormUsername;
