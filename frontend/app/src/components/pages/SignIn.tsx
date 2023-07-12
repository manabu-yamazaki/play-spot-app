import { AuthContext } from "components/common/CommonProvider"
import { SignInParams } from "interfaces"
import Cookies from "js-cookie"
import { signIn } from "lib/api/auth"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SignInTemplate } from "../templates/SignInTemplate"

const SignIn: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [canSubmit, setCanSubmit] = useState<boolean>(false)
  const { setIsSignedIn, setCurrentUser, setErrorMessage } =
    useContext(AuthContext)

  useEffect(() => {
    setCanSubmit(email && password ? true : false)
  }, [email, password])

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.target.value)

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.target.value)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const params: SignInParams = {
      email: email,
      password: password,
    }
    try {
      await signIn(params).then((res) => {
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
          setErrorMessage("認証エラー")
        }
      })
    } catch (err) {
      console.log(err)
      setErrorMessage("認証エラー")
    }
  }

  return (
    <SignInTemplate
      title="Sign in"
      handleSubmit={handleSubmit}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      canSubmit={canSubmit}
    ></SignInTemplate>
  )
}

export default SignIn
