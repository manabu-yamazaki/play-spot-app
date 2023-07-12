import { Box, Container, CssBaseline } from "@mui/material"
import * as React from "react"

import { Symbol } from "../atoms/Symbol"
import { SignUpLinks } from "../molecules/SignUpLinks"
import { SignUpForm } from "../organisms/SignUpForm"

type SignUpTemplateProps = {
  title: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChangeLastName: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePasswordConfirmation: (e: React.ChangeEvent<HTMLInputElement>) => void
  canSubmit: boolean
}

export const SignUpTemplate: React.FC<SignUpTemplateProps> = (props) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Symbol title={props.title} />
        <SignUpForm
          handleSubmit={props.handleSubmit}
          onChangeLastName={props.onChangeLastName}
          onChangeFirstName={props.onChangeFirstName}
          onChangeEmail={props.onChangeEmail}
          onChangePassword={props.onChangePassword}
          onChangePasswordConfirmation={props.onChangePasswordConfirmation}
          canSubmit={props.canSubmit}
        >
          <SignUpLinks />
        </SignUpForm>
      </Box>
    </Container>
  )
}
