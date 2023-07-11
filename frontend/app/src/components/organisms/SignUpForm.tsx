import { Box, Button, Checkbox, FormControlLabel } from "@mui/material"
import * as React from "react"

import { NameFieldArea } from "../molecules/NameFieldArea"
import { SignFieldArea } from "../molecules/SignFieldArea"

type SignUpFormProps = {
  children: React.ReactNode
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SignUpForm: React.FC<SignUpFormProps> = (props) => {
  return (
    <Box
      component="form"
      onSubmit={props.handleSubmit}
      noValidate
      sx={{ mt: 3 }}
    >
      <NameFieldArea>
        <SignFieldArea
          isNotTopField={true}
          onChangeEmail={props.onChangeEmail}
          onChangePassword={props.onChangePassword}
        />
      </NameFieldArea>
      <FormControlLabel
        control={<Checkbox value="allowExtraEmails" color="primary" />}
        label="I want to receive inspiration, marketing promotions and updates via email."
      />
      {/* TODO コンポーネント化した方かいいかな？ */}
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
      {props.children}
    </Box>
  )
}
