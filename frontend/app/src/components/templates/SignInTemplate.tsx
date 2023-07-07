import * as React from "react"
import { Box, Container, CssBaseline } from "@mui/material"

import { Symbol } from "../atoms/Symbol"
import { SignInForm } from "../organisms/SignInForm"
import { SignInLink } from "../molecules/SignInLink"

type SignInTemplateProps = {
  title: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
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
        <SignInForm handleSubmit={props.handleSubmit}>
          <SignInLink />
        </SignInForm>
      </Box>
    </Container>
  )
}
