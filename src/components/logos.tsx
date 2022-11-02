import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PartnersLogos } from "../content/partners"
import Card from "@mui/material/Card"
import { CardActionArea } from "gatsby-theme-material-ui"
import CardContent from "@mui/material/CardContent"
import theme from "../theme"

const PartnerLogo = ({
  image,
  width = 'auto',
  quality = 100,
    alt = "",
  link
}: PartnersLogos) => (
  <Card>
    <CardActionArea sx={{height: 100}}>
      <CardContent sx={{display: 'flex', maxHeight: 96, justifyContent: 'center', alignItems: 'center', padding: theme.spacing(2)}}>
        <img src={image} alt={alt} title={alt} width={width} style={{maxHeight: 100}} />
      </CardContent>
    </CardActionArea>
  </Card>
)

export default PartnerLogo
