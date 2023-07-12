import { AxiosError } from "axios"
import { AuthContext } from "components/common/CommonProvider"
import Cookies from "js-cookie"
import { signIn } from "lib/api/auth"
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { setIsSignedIn, setCurrentUser, setErrorMessage } =
    useContext(AuthContext)

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.target.value)

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.target.value)

  const fetchData = async () => {
    try {
      await signIn({ email: email, password: password }).then((res) => {
        console.log(res)
        if (res.status === 200) {
          // ログインに成功した場合はCookieに各値を格納
          Cookies.set("_access_token", res.headers["access-token"])
          Cookies.set("_client", res.headers["client"])
          Cookies.set("_uid", res.headers["uid"])

          setIsSignedIn(true)
          setCurrentUser(res.data.data)

          navigate("/spot")

          console.log("Signed in successfully!")
        } else {
          setErrorMessage("Error")
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
    ></SignInTemplate>
  )
}

export default SignIn
