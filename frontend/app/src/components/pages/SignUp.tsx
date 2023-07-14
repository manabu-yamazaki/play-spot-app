import { AuthContext } from "components/common/CommonProvider"
import { SignUpParams } from "interfaces"
import Cookies from "js-cookie"
import { signUp } from "lib/api/auth"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SignUpTemplate } from "../templates/SignUpTemplate"

export const SignUp: React.FC = () => {
  const navigate = useNavigate()
  const [lastName, setLastName] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
  const [canSubmit, setCanSubmit] = useState<boolean>(false)
  const { setIsSignedIn, setCurrentUser, setErrorMessage } =
    useContext(AuthContext)

  useEffect(() => {
    setCanSubmit(
      lastName && firstName && email && password && passwordConfirmation
        ? true
        : false,
    )
  }, [lastName, firstName, email, password, passwordConfirmation])

  const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setLastName(e.target.value)

  const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFirstName(e.target.value)

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.target.value)

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.target.value)

  const onChangePasswordConfirmation = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => setPasswordConfirmation(e.target.value)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const params: SignUpParams = {
      name: lastName + " " + firstName,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    }
    try {
      await signUp(params).then((res) => {
        console.log(res)
        if (res.status === 200) {
          // アカウント作成と同時にログインさせてしまう
          // 本来であればメール確認などを挟むべきだが、今回はサンプルなので
          Cookies.set("_access_token", res.headers["access-token"])
          Cookies.set("_client", res.headers["client"])
          Cookies.set("_uid", res.headers["uid"])
          setIsSignedIn(true)
          setCurrentUser(res.data.data)
          navigate("/spots")
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
    <SignUpTemplate
      title="Sign Up"
      handleSubmit={handleSubmit}
      onChangeLastName={onChangeLastName}
      onChangeFirstName={onChangeFirstName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePasswordConfirmation={onChangePasswordConfirmation}
      canSubmit={canSubmit}
    ></SignUpTemplate>
  )
}

export default SignUp
