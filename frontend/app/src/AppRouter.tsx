import { AuthContext } from "components/common/CommonProvider"
import { Loading } from "components/common/Loading"
import "index.css"
import { lazy, useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

const SignIn = lazy(() => import("components/pages/SignIn"))
const SignUp = lazy(() => import("components/pages/SignUp"))
const Spot = lazy(() => import("components/pages/Spot"))

export const AppRouter: React.FC = () => {
  const { isSignedIn } = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" Component={Loading}>
        <Route path="/signin" Component={SignIn}></Route>
        <Route path="/signup" Component={SignUp}></Route>
        <Route
          path="/spot"
          element={
            isSignedIn ? <Spot></Spot> : <Navigate replace to="/signin" />
          }
        ></Route>
      </Route>
    </Routes>
  )
}
