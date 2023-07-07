import * as React from "react"
import { Box, Container, CssBaseline } from "@mui/material"

import { Symbol } from "../atoms/Symbol"
import { SignUpLinks } from "../molecules/SignUpLinks"
import { SignUpForm } from "../organisms/SignUpForm"

type SignUpTemplateProps = {
  title: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
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
        <SignUpForm handleSubmit={props.handleSubmit}>
          <SignUpLinks />
        </SignUpForm>
      </Box>
    </Container>
  )
}
