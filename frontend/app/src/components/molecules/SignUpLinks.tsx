import * as React from "react"
import { Grid, Link } from "@mui/material"

type SignUpLinksProps = {}

export const SignUpLinks: React.FC<SignUpLinksProps> = (props) => {
  return (
    <Grid container justifyContent="flex-end">
      <Grid item>
        <Link href="/sign-in" variant="body2">
          Already have an account? Sign in
        </Link>
      </Grid>
    </Grid>
  )
}
