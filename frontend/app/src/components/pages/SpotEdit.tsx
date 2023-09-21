import { AuthContext } from "components/common/CommonProvider"
import { SpotsEditTemplate } from "components/templates/SpotEditTemplate"
import { steps } from "constants/index"
import { SpotParams } from "interfaces"
import { getSpot, patchSpot, postSpot } from "lib/api/spots"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const SpotEdit: React.FC = () => {
  const [name, setName] = useState<string>("")
  const [url, setUrl] = useState<string>("")
  const [summary, setSummary] = useState<string>("")
  const [prefectureCode, setPrefectureCode] = useState<string>("0")
  const [minBudget, setMinBudget] = useState<string>("0")
  const [maxBudget, setMaxBudget] = useState<string>("0")
  const [imageUrl, setImageUrl] = useState<string>("")
  const [image, setImage] = useState<File>()
  const [activeStep, setActiveStep] = useState<number>(0)
  const { id } = useParams()
  const { setErrorMessage } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      if (!id) return
      await getSpot(id)
        .then((res) => {
          console.log(res)

          if (res.status !== 200) {
            setErrorMessage(
              "データを取得できませんでした。時間をおいてリロードしてください。",
            )
            return
          }

          setName(res.data.spot.name)
          setUrl(res.data.spot.url)
          setSummary(res.data.spot.summary)
          setPrefectureCode(res.data.spot.prefectureCode)
          setMinBudget(res.data.spot.minBudget)
          setMaxBudget(res.data.spot.maxBudget)
          setImageUrl(res.data.spot.image_url)
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

  const handleNext = async () => {
    setActiveStep(activeStep + 1)
    if (activeStep !== steps.length - 1) return

    const params: SpotParams = {
      id: id,
      name: name,
      url: url,
      summary: summary,
      prefecture_code: prefectureCode,
      min_budget: minBudget,
      max_budget: maxBudget,
      image: image,
    }
    // let formData = new FormData()
    // if (id) formData.append("id", id)
    // formData.append("name", name)
    // formData.append("url", url)
    // formData.append("summary", summary)
    // formData.append("prefecture_code", prefectureCode)
    // formData.append("min_budget", minBudget)
    // formData.append("max_budget", maxBudget)
    // if (image) formData.append("image", image)
    // if (id) formData.append("_method", "PATCH")
    const handleApi = id ? patchSpot : postSpot
    await handleApi(params)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          navigate("/spots")
        } else {
          setErrorMessage("更新に失敗しました。最初からやり直してください。")
        }
      })
      .catch((err) => {
        console.log(err)
        setErrorMessage("更新に失敗しました。最初からやり直してください。")
      })
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setName(e.target.value)

  const onChangeUrl = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setUrl(e.target.value)

  const onChangeSummary = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSummary(e.target.value)

  const onChangePrefectureCode = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => setPrefectureCode(e.target.value)

  const onChangeMinBudget = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setMinBudget(e.target.value)

  const onChangeMaxBudget = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setMaxBudget(e.target.value)

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()

    if (!e.target.files) return
    setImage(e.target.files[0])
    setImageUrl(window.URL.createObjectURL(e.target.files[0]))
  }

  return (
    <SpotsEditTemplate
      title="Spot Edit"
      activeStep={activeStep}
      name={name}
      url={url}
      summary={summary}
      prefectureCode={prefectureCode}
      minBudget={minBudget}
      maxBudget={maxBudget}
      imageUrl={imageUrl}
      handleNext={handleNext}
      handleBack={handleBack}
      onChangeName={onChangeName}
      onChangeUrl={onChangeUrl}
      onChangeSummary={onChangeSummary}
      onChangePrefectureCode={onChangePrefectureCode}
      onChangeMinBudget={onChangeMinBudget}
      onChangeMaxBudget={onChangeMaxBudget}
      onChangeImage={onChangeImage}
    ></SpotsEditTemplate>
  )
}

export default SpotEdit
