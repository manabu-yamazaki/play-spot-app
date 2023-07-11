import { Alert, Box, Container, CssBaseline } from "@mui/material"
import * as React from "react"

import { Symbol } from "../atoms/Symbol"
import { SignInLinks } from "../molecules/SignInLinks"
import { SignInForm } from "../organisms/SignInForm"

type SignInTemplateProps = {
  title: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onClick: () => void
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage: string
}

export const SignInTemplate: React.FC<SignInTemplateProps> = (props) => {
  const hasErrorMessage = () => {
    return props.errorMessage === "" ? "none" : ""
  }
  return (
    <>
      <Alert severity="error" sx={{ width: "100%", display: hasErrorMessage }}>
        {props.errorMessage}
      </Alert>
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
            onClick={() => {
              props.onClick()
            }}
            onChangeEmail={props.onChangeEmail}
            onChangePassword={props.onChangePassword}
          >
            <SignInLinks />
          </SignInForm>
        </Box>
      </Container>
    </>
  )
}
