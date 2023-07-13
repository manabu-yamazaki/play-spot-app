import client from "lib/api/client"

// 認証済みのユーザーを取得
export const getSpots = () => {
  return client.get("spots")
}

// 認証済みのユーザーを取得
export const getSpot = (id: number) => {
  return client.get(`spots/${id}`)
}
