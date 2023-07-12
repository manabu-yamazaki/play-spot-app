import { Grid, TextField } from "@mui/material"
import * as React from "react"

type NameFieldAreaProps = {
  children: React.ReactNode
  onChangeLastName: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePasswordConfirmation: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const NameFieldArea: React.FC<NameFieldAreaProps> = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="lastName"
          label="苗字"
          name="lastName"
          autoComplete="family-name"
          onChange={props.onChangeLastName}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="given-name"
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="名前"
          autoFocus
          onChange={props.onChangeFirstName}
        />
      </Grid>
      <Grid item xs={12}>
        {props.children}
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="password"
          label="Password Confirmation"
          type="password"
          id="passwordConfirmation"
          autoComplete="current-password"
          onChange={props.onChangePasswordConfirmation}
        />
      </Grid>
    </Grid>
  )
}
