import { User } from "interfaces/index"
import { getCurrentUser } from "lib/api/auth"
import React, { createContext, useEffect, useState } from "react"

// グローバルで扱う変数・関数
export const AuthContext = createContext(
  {} as {
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    isSignedIn: boolean
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
    currentUser: User | undefined
    setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
    errorMessage: string
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  },
)

type CommonProviderProps = {
  children: React.ReactNode
}

export const CommonProvider: React.FC<CommonProviderProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()
  const [errorMessage, setErrorMessage] = useState<string>("")

  // 認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (!res?.data.isLogin) {
        console.log("No current user")
        return
      }

      setIsSignedIn(true)
      setCurrentUser(res?.data.data)
      console.log(res?.data.data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser,
        errorMessage,
        setErrorMessage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
