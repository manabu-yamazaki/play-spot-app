import { Box, Button, Checkbox, FormControlLabel } from "@mui/material"
import * as React from "react"

import { SignFieldArea } from "../molecules/SignFieldArea"

type SignInFormProps = {
  children: React.ReactNode
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  canSubmit: boolean
}

export const SignInForm: React.FC<SignInFormProps> = (props) => {
  return (
    <Box
      component="form"
      onSubmit={props.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <SignFieldArea
        onChangeEmail={props.onChangeEmail}
        onChangePassword={props.onChangePassword}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={!props.canSubmit}
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
      {props.children}
    </Box>
  )
}
