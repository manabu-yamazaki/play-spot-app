import * as React from "react"

import { SignInTemplate } from "../templates/SignInTemplate"

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  })
}

const SignIn: React.FC = () => {
  return (
    <SignInTemplate
      title="Sign in"
      handleSubmit={handleSubmit}
    ></SignInTemplate>
  )
}

export default SignIn
