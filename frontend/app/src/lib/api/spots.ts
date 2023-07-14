import { SpotParams } from "interfaces"
import client from "lib/api/client"

// 全スポットを取得
export const getSpots = () => {
  return client.get("spots")
}

// 指定のスポットを取得
export const getSpot = (id: string) => {
  return client.get(`spots/${id}`)
}

// 指定のスポットを取得
export const patchSpot = (params: SpotParams) => {
  return client.patch(`spots/${params.id}`, params)
}

// 指定のスポットを取得
export const postSpot = (params: SpotParams) => {
  return client.post("spots", params)
}
