import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
// import { App } from "./App"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Layout } from "./Layout"
import { Top } from "./components/pages/Top"
import { SignIn } from "./components/pages/SignIn"
import { SignUp } from "./components/pages/SignUp"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <Layout>
      <Routes>
        <Route path="/" Component={Top}></Route>
        <Route path="/sign-in" Component={SignIn}></Route>
        <Route path="/sign-up" Component={SignUp}></Route>
      </Routes>
    </Layout>
  </Router>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
