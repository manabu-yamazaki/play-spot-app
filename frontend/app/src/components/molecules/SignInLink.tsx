import * as React from "react"
import { Grid, Link } from "@mui/material"

type SignInLinkProps = {}

export const SignInLink: React.FC<SignInLinkProps> = (props) => {
  return (
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid>
  )
}
