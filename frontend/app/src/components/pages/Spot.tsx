import * as React from "react"

import { SpotTemplate } from "../templates/SpotTemplate"

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  })
}

const Spot: React.FC = () => {
  return (
    <SpotTemplate title="Sign in" handleSubmit={handleSubmit}></SpotTemplate>
  )
}

export default Spot
