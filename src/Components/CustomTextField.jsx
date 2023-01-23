import { TextField } from "@mui/material";
import React from "react";
import theme from "../styles/theme";

const CustomTextField = ({
  label,
  id,
  type,
  placeholder,
  error = false,
  helperText = null,
  fullWidth = true,
  value,
  onChange,
  required = true,
  multiline = false,
  rows=1
}) => {
  return (
    <div>
      <label style={{ color: theme.palette.neutral.gray }} htmlFor={id}>
        {label}
      </label>
      <br />
      <TextField
      rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        error={error}
        size="small"
        id={id}
        type={type}
        placeholder={placeholder}
        multiline={multiline}
        sx={{
          backgroundColor: "white",
          marginTop: "8px",
          "& .MuiOutlinedInput-input": {
            color: theme.palette.neutral.red,
          },
        }}
        helperText={error ? helperText : null}
      />
    </div>
  );
};

export default CustomTextField;
