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

type SignInProps = {}

export const SignIn: React.FC<SignInProps> = (props) => {
  return (
    <SignInTemplate
      title="Sign in"
      handleSubmit={handleSubmit}
    ></SignInTemplate>
  )
}
