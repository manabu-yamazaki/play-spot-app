import { Grid, TextField, Typography } from "@mui/material"
import { UploadButton } from "components/atoms/UploadButton"
import { steps } from "constants/index"
import * as React from "react"

type SpotUploadProps = {
  activeStep: number
  name: string
  url: string
  imageUrl: string
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SpotUpload: React.FC<SpotUploadProps> = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {steps[props.activeStep]}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="firstName"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={props.name}
            onChange={props.onChangeName}
          />
        </Grid>
        <Grid item xs={12}>
          <UploadButton
            imageUrl={props.imageUrl}
            onChangeImage={props.onChangeImage}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
