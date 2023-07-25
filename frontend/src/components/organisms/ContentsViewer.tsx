import { Grid } from "@mui/material"
import { ContentCard } from "components/organisms/ContentCard"
import { Content } from "interfaces/index"
import * as React from "react"

type ContentsViewerProps = {
  contents: Content[]
}

export const ContentsViewer: React.FC<ContentsViewerProps> = (props) => {
  return (
    <Grid container spacing={4}>
      {props.contents.map((card, key) => (
        <Grid item key={key} xs={12} sm={6} md={4}>
          <ContentCard id={card.id} title={card.title} comment={card.comment} />
        </Grid>
      ))}
    </Grid>
  )
}
