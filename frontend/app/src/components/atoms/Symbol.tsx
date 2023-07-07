import * as React from "react"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { Avatar, Typography } from "@mui/material"

type SymbolProps = {
  title: string
}

export const Symbol: React.FC<SymbolProps> = (props) => {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {props.title}
      </Typography>
    </>
  )
}
