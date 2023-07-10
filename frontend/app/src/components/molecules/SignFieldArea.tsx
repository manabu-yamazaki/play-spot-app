import { TextField } from "@mui/material"
import * as React from "react"

type SignFieldAreaProps = {
  isNotTopField?: boolean
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}

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
        autoFocus={!props.isNotTopField}
        onChange={props.onChangeEmail}
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
        onChange={props.onChangePassword}
      />
    </>
  )
}
