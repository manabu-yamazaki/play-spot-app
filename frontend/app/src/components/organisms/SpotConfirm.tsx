import { Grid, TextField, Typography } from "@mui/material"
import { steps } from "constants/index"
import * as React from "react"

type SpotConfirmProps = {
  activeStep: number
  name: string
  url: string
  summary: string
  prefectureCode: string
  minBudget: string
  maxBudget: string
}

export const SpotConfirm: React.FC<SpotConfirmProps> = (props) => {
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
            InputProps={{
              readOnly: true,
            }}
            value={props.name}
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
            InputProps={{
              readOnly: true,
            }}
            value={props.url}
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
            InputProps={{
              readOnly: true,
            }}
            value={props.summary}
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
            InputProps={{
              readOnly: true,
            }}
            value={props.prefectureCode}
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
            InputProps={{
              readOnly: true,
            }}
            value={props.minBudget}
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
            InputProps={{
              readOnly: true,
            }}
            value={props.maxBudget}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
