import { AuthContext } from "components/common/CommonProvider"
import { SpotTemplate } from "components/templates/SpotTemplate"
import { SpotParams } from "interfaces/index"
import { getSpots } from "lib/api/spots"
import React, { useContext, useEffect, useState } from "react"

const Spot: React.FC = () => {
  const [spots, setSpots] = useState<SpotParams[]>([])
  const { setErrorMessage } = useContext(AuthContext)

  useEffect(() => {
    ;(async () => {
      await getSpots()
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            setSpots(res.data.spots)
          } else {
            setErrorMessage(
              "データを取得できませんでした。時間をおいてリロードしてください。",
            )
          }
        })
        .catch((err) => {
          console.log(err)
          setErrorMessage(
            "データを取得できませんでした。時間をおいてリロードしてください。",
          )
        })
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <SpotTemplate title="Play Spot" spots={spots}></SpotTemplate>
}

export default Spot
