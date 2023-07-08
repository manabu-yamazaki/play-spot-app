import { Grid } from "@mui/material"
import * as React from "react"

import { ContentCard } from "./ContentCard"

const cards = [
  { key: 1, title: "ウユニ塩湖", context: "コメント" },
  { key: 2, title: "東京タワー", context: "コメント" },
  { key: 3, title: "銀河鉄道", context: "コメント" },
  { key: 4, title: "title", context: "コメント" },
  { key: 5, title: "title", context: "コメント" },
  { key: 6, title: "title", context: "コメント" },
  { key: 7, title: "title", context: "コメント" },
  { key: 8, title: "title", context: "コメント" },
  { key: 9, title: "title", context: "コメント" },
]

type ContentsViewerProps = {}

export const ContentsViewer: React.FC<ContentsViewerProps> = (props) => {
  return (
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item key={card.key} xs={12} sm={6} md={4}>
          <ContentCard title={card.title} context={card.context} />
        </Grid>
      ))}
    </Grid>
  )
}
