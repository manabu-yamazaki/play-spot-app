import { Container } from "@mui/material"
import * as React from "react"

import { PageTitle } from "../molecules/PageTitle"
import { ContentsViewer } from "../organisms/ContentsViewer"

type SpotTemplateProps = {
  title: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const SpotTemplate: React.FC<SpotTemplateProps> = (props) => {
  return (
    <main>
      <PageTitle title="Play Spot" context="説明文書こうかな〜" />
      <Container sx={{ py: 8 }} maxWidth="md">
        <ContentsViewer />
      </Container>
      {/* Footer */}
      {/* <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box> */}
      {/* End footer */}
    </main>
  )
}
