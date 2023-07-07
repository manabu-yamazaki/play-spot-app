import * as React from "react"
import { Button, Box, Checkbox, FormControlLabel } from "@mui/material"

import { SignFieldArea } from "../molecules/SignFieldArea"

type SignInFormProps = {
  children: React.ReactNode
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const SignInForm: React.FC<SignInFormProps> = (props) => {
  return (
    <Box
      component="form"
      onSubmit={props.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <SignFieldArea />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      {props.children}
    </Box>
  )
}
