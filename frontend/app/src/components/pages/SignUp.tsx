import * as React from "react"

import { SignUpTemplate } from "../templates/SignUpTemplate"

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  })
}

type SignInProps = {}

export const SignUp: React.FC<SignInProps> = (props) => {
  return (
    <SignUpTemplate
      title="Sign Up"
      handleSubmit={handleSubmit}
    ></SignUpTemplate>
  )
}

export default SignUp
