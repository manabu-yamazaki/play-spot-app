import { Box, Container, CssBaseline } from "@mui/material"
import * as React from "react"

import { Symbol } from "../atoms/Symbol"
import { SignInLinks } from "../molecules/SignInLinks"
import { SignInForm } from "../organisms/SignInForm"

type SignInTemplateProps = {
  title: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  canSubmit: boolean
}

export const SignInTemplate: React.FC<SignInTemplateProps> = (props) => {
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
        <SignInForm
          handleSubmit={props.handleSubmit}
          onChangeEmail={props.onChangeEmail}
          onChangePassword={props.onChangePassword}
          canSubmit={props.canSubmit}
        >
          <SignInLinks />
        </SignInForm>
      </Box>
    </Container>
  )
}
