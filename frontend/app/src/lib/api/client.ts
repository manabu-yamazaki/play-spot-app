import axios from "axios"
import applyCaseMiddleware from "axios-case-converter"

// applyCaseMiddleware:
// axiosで受け取ったレスポンスの値をスネークケース→キャメルケースに変換
// または送信するリクエストの値をキャメルケース→スネークケースに変換してくれるライブラリ

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true,
}

export const client = applyCaseMiddleware(
  axios.create({
    baseURL: `${
      process.env.NODE_ENV === "development"
        ? "http://localhost"
        : "http://35.76.55.169"
    }:3001/api/v1`,
    headers: { "Access-Control-Allow-Origin": "*" },
  }),
  options,
)

export const clientUpload = applyCaseMiddleware(
  axios.create({
    baseURL: `${
      process.env.NODE_ENV === "development"
        ? "http://localhost"
        : "http://35.76.55.169"
    }:3001/api/v1`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
    },
  }),
  options,
)
