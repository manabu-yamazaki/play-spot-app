import * as React from "react"
import { Box, Container, Typography } from "@mui/material"

type PageTitleProps = {
  title: string
  context: string
}

export const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {props.context}
        </Typography>
      </Container>
    </Box>
  )
}
