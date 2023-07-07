import * as React from "react"
import { Grid, TextField } from "@mui/material"

type NameFieldAreaProps = {
  children: React.ReactNode
}

export const NameFieldArea: React.FC<NameFieldAreaProps> = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="given-name"
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="family-name"
        />
      </Grid>
      <Grid item xs={12}>
        {props.children}
      </Grid>
    </Grid>
  )
}
