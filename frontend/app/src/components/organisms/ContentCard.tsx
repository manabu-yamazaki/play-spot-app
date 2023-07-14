import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import { LinkButton } from "components/atoms/LinkButton"
import * as React from "react"

type ContentCardProps = {
  id: string
  title: string
  comment: string
}

export const ContentCard: React.FC<ContentCardProps> = (props) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: "56.25%",
        }}
        image="https://source.unsplash.com/random?wallpapers"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography>{props.comment}</Typography>
      </CardContent>
      {/* TODO コンポーネント化した方かいいかな？ */}
      <CardActions>
        <FavoriteIcon />
        <FavoriteBorderIcon />
        <LinkButton link={`/spots/${props.id}`}>edit</LinkButton>
      </CardActions>
    </Card>
  )
}
