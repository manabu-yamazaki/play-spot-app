import axios, { AxiosError } from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { SignInTemplate } from "../templates/SignInTemplate"

const URL = "http://localhost:3001/api/v1/auth/sign_in"

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  })
}

const SignIn: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setEmail(value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setPassword(value)
  }

  const fetchData = async () => {
    try {
      await axios
        .post(URL, { email: email, password: password })
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            navigate("/spot")
          }
        })
    } catch (err) {
      console.log(err)
      setErrorMessage((err as AxiosError).message)
    }
  }

  return (
    <SignInTemplate
      title="Sign in"
      handleSubmit={handleSubmit}
      onClick={fetchData}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      errorMessage={errorMessage}
    ></SignInTemplate>
  )
}

export default SignIn
