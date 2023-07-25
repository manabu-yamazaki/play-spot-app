import { Grid, TextField, Typography } from "@mui/material"
import { steps } from "constants/index"
import * as React from "react"

type SpotInputProps = {
  activeStep: number
  name: string
  url: string
  summary: string
  prefectureCode: string
  minBudget: string
  maxBudget: string
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeUrl: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSummary: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePrefectureCode: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeMinBudget: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeMaxBudget: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SpotInput: React.FC<SpotInputProps> = (props) => {
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
          <TextField
            required
            id="url"
            name="url"
            label="Url"
            fullWidth
            autoComplete="url"
            variant="standard"
            value={props.url}
            onChange={props.onChangeUrl}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="summary"
            name="summary"
            label="Summary"
            fullWidth
            autoComplete="summary"
            variant="standard"
            multiline
            rows={4}
            value={props.summary}
            onChange={props.onChangeSummary}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="prefecture-code"
            name="prefecture-code"
            label="Prefecture Code"
            fullWidth
            autoComplete="prefecture-code"
            variant="standard"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={props.prefectureCode}
            onChange={props.onChangePrefectureCode}
          />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="min-budget"
            name="min-budget"
            label="Min Budget"
            fullWidth
            autoComplete="min-budget"
            variant="standard"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={props.minBudget}
            onChange={props.onChangeMinBudget}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="max-budget"
            name="max-budget"
            label="Max Budget"
            fullWidth
            autoComplete="max-budget"
            variant="standard"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={props.maxBudget}
            onChange={props.onChangeMaxBudget}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
