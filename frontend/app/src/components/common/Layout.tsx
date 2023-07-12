import CameraIcon from "@mui/icons-material/PhotoCamera"
import {
  Alert,
  AppBar,
  CssBaseline,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material"
import { LinkButton } from "components/atoms/LinkButton"
import { AuthContext } from "components/common/CommonProvider"
import Cookies from "js-cookie"
import React, { useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

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
      <LinkButton link="https://mui.com/">Play Spot App</LinkButton>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const {
    loading,
    isSignedIn,
    setIsSignedIn,
    errorMessage,
    setErrorMessage,
    currentUser,
  } = useContext(AuthContext)
  const navigate = useNavigate()
  const sampleLocation = useLocation()

  useEffect(() => {
    setErrorMessage("")
  }, [sampleLocation, setErrorMessage])

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      // サインアウト時には各Cookieを削除
      Cookies.remove("_access_token")
      Cookies.remove("_client")
      Cookies.remove("_uid")

      setIsSignedIn(false)
      navigate("/signin")
    } catch (err) {
      console.log("Failed in sign out", err)
    }
  }

  const renderLinkButtons = () => {
    return !loading ? (
      isSignedIn ? (
        <>
          <LinkButton link="/">{currentUser?.email}</LinkButton>
          <LinkButton link="/spot">Spot</LinkButton>
          <LinkButton onClick={handleSignOut}>Sign out</LinkButton>
        </>
      ) : (
        <>
          <LinkButton link="/signin">Sign in</LinkButton>
          <LinkButton link="/signup">Sign up</LinkButton>
        </>
      )
    ) : (
      <></>
    )
  }

  const renderAlert = () => {
    return errorMessage !== "" ? (
      <Alert severity="error" sx={{ width: "100%" }}>
        {errorMessage}
      </Alert>
    ) : (
      <></>
    )
  }

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
            {renderLinkButtons()}
          </Stack>
        </Toolbar>
      </AppBar>
      {renderAlert()}
      {props.children}
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </ThemeProvider>
  )
}
