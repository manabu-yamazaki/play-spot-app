import axios from "axios"
import applyCaseMiddleware from "axios-case-converter"

// applyCaseMiddleware:
// axiosで受け取ったレスポンスの値をスネークケース→キャメルケースに変換
// または送信するリクエストの値をキャメルケース→スネークケースに変換してくれるライブラリ

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true,
}

const client = applyCaseMiddleware(
  axios.create({
    baseURL: `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : "http://35.76.55.169"
    }/api/v1`,
  }),
  options,
)

export default client
