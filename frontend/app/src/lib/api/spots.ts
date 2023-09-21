import { SpotParams } from "interfaces"
import { client, clientUpload } from "lib/api/client"

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
  return clientUpload.patch(`spots/${params.id}`, { spot: params })
  // return clientUpload.patch(`spots/${params.get("id")}`, params)
  // return clientUpload.patchForm(`spots/${params.get("id")}`, params)
}

// 指定のスポットを取得
export const postSpot = (params: SpotParams) => {
  return clientUpload.post("spots", params)
}
