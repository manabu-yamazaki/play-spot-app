export interface SignUpParams {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

// サインイン
export interface SignInParams {
  email: string
  password: string
}

// ユーザー
export interface User {
  id: number
  uid: string
  provider: string
  email: string
  name: string
  nickname?: string
  image?: string
  allowPasswordChange: boolean
  created_at: Date
  updated_at: Date
}

// スポット
export interface SpotParams {
  id: number
  name: string
  url?: string
  summary?: string
  prefecture_code: number
  created_at: Date
  updated_at: Date
}

export interface Content {
  title: string
  comment: string
}
