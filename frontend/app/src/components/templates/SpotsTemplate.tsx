import { Container } from "@mui/material"
import { PageTitle } from "components/molecules/PageTitle"
import { ContentsViewer } from "components/organisms/ContentsViewer"
import { Content, SpotParams } from "interfaces/index"
import * as React from "react"

type SpotsTemplateProps = {
  title: string
  spots: SpotParams[]
}

export const SpotsTemplate: React.FC<SpotsTemplateProps> = (props) => {
  return (
    <main>
      <PageTitle title={props.title} context="説明文書こうかな〜" />
      <Container sx={{ py: 8 }} maxWidth="md">
        <ContentsViewer
          contents={props.spots.map((spot) => {
            return {
              id: spot.id,
              title: spot.name,
              comment: spot.summary,
            } as Content
          })}
        />
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
