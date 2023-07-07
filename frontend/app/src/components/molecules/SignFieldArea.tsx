import * as React from "react"
import { TextField } from "@mui/material"

type SignFieldAreaProps = {}

export const SignFieldArea: React.FC<SignFieldAreaProps> = (props) => {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
    </>
  )
}