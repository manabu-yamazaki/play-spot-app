import { AuthContext } from "components/common/CommonProvider"
import { Loading } from "components/common/Loading"
import SpotEdit from "components/pages/SpotEdit"
import "index.css"
import { lazy, useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

const SignIn = lazy(() => import("components/pages/SignIn"))
const SignUp = lazy(() => import("components/pages/SignUp"))
const Spots = lazy(() => import("components/pages/Spots"))

export const AppRouter: React.FC = () => {
  const { isSignedIn } = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" Component={Loading}>
        <Route
          path="/signin"
          element={
            !isSignedIn ? <SignIn></SignIn> : <Navigate replace to="/spots" />
          }
        ></Route>
        <Route
          path="/signup"
          element={
            !isSignedIn ? <SignUp></SignUp> : <Navigate replace to="/spots" />
          }
        ></Route>
        <Route
          path="/spots"
          element={
            isSignedIn ? <Spots></Spots> : <Navigate replace to="/signin" />
          }
        ></Route>
        <Route
          path="/spots/new"
          element={
            isSignedIn ? (
              <SpotEdit></SpotEdit>
            ) : (
              <Navigate replace to="/signin" />
            )
          }
        ></Route>
        <Route
          path="/spots/:id"
          element={
            isSignedIn ? (
              <SpotEdit></SpotEdit>
            ) : (
              <Navigate replace to="/signin" />
            )
          }
        ></Route>
      </Route>
    </Routes>
  )
}
