import { Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

type LinkButtonProps = {
  children: React.ReactNode
  link?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => {}
}

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return props.link ? (
    <Button
      component={Link}
      color="inherit"
      sx={{ textTransform: "none" }}
      to={props.link}
    >
      {props.children}
    </Button>
  ) : (
    <Button
      color="inherit"
      sx={{ textTransform: "none" }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}
