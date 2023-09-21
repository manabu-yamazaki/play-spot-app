import AddAPhotoIcon from "@mui/icons-material/AddAPhoto"
import { IconButton } from "@mui/material"
import { styled } from "@mui/material/styles"
import React from "react"

const Input = styled("input")({
  display: "none",
})

type UploadButtonProps = {
  // children: React.ReactNode
  // link?: string
  imageUrl: string
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const UploadButton: React.FC<UploadButtonProps> = (props) => {
  return (
    <label htmlFor="icon-button-file">
      <img src={props.imageUrl} alt="アップロード画像"></img>
      <Input
        accept="image/*"
        id="icon-button-file"
        type="file"
        onChange={props.onChangeImage}
      />
      <IconButton color="primary" aria-label="upload picture" component="span">
        <AddAPhotoIcon />
      </IconButton>
    </label>
  )
}
