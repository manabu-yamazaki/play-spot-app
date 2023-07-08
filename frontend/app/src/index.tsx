import React, { lazy } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
// import { App } from "./App"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Layout } from "./Layout"
import { Loading } from "./Loading"
const SignIn = lazy(() => import("./components/pages/SignIn"))
const SignUp = lazy(() => import("./components/pages/SignUp"))
const Spot = lazy(() => import("./components/pages/Spot"))

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <Layout>
      <Routes>
        <Route path="/" Component={Loading}>
          <Route path="/sign-in" Component={SignIn}></Route>
          <Route path="/sign-up" Component={SignUp}></Route>
          <Route path="/spot" Component={Spot}></Route>
        </Route>
      </Routes>
    </Layout>
  </Router>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
