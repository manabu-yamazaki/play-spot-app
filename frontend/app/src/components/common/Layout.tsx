import CameraIcon from "@mui/icons-material/PhotoCamera"
import {
  AppBar,
  createTheme,
  CssBaseline,
  Link,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material"
import React from "react"

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
        Play Spot App
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
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Play Spot App
          </Typography>
          <Stack direction="row" spacing={2} m={"0 0 0 auto"}>
            <Link color="inherit" href="/sign-in">
              Sign in
            </Link>
            <Link color="inherit" href="/sign-up">
              Sign up
            </Link>
            <Link color="inherit" href="/spot">
              Spot
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
      {props.children}
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </ThemeProvider>
  )
}
