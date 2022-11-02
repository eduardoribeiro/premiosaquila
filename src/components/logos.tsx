import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PartnersLogos } from "../content/partners"
import Card from "@mui/material/Card"
import { CardActionArea } from "gatsby-theme-material-ui"
import CardContent from "@mui/material/CardContent"
import theme from "../theme"

export interface PartnersLogosButton extends PartnersLogos {
  onClick: () => void;
}

const PartnerLogo = ({
  image,
  width = 100,
  quality = 100,
    alt = "",
  onClick
}: PartnersLogosButton) => (
  <Card>
    <CardActionArea sx={{ height: 100 }} title={alt} onClick={onClick}>
      <CardContent sx={{display: 'flex', maxHeight: 96, justifyContent: 'center', alignItems: 'center', padding: theme.spacing(2)}}>
        <img src={image} alt={alt} title={alt} style={{maxHeight: 100}} />
      </CardContent>
    </CardActionArea>
  </Card>
)

export default PartnerLogo
