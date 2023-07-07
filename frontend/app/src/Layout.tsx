import React from "react"
import { createTheme, Link, ThemeProvider, Typography } from "@mui/material"

const defaultTheme = createTheme()
// const defaultTheme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#d87274",
//       light: "#ffa2a3",
//       dark: "#a34449",
//     },
//   },
// })

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Play Spot App</h1>
      <Link color="primary" href="/">
        top
      </Link>
      ,
      <Link color="inherit" href="/sign-in">
        sign in
      </Link>
      {props.children}
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </ThemeProvider>
  )
}
