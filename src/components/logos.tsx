import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PartnersLogos } from "../content/partners"
import Card from "@mui/material/Card"
import { CardActionArea } from "gatsby-theme-material-ui"
import CardContent from "@mui/material/CardContent"
import Img from "gatsby-image"

const PartnerLogo = ({
  image,
  width = 48,
  quality = 100,
    alt = "",
  link
}: PartnersLogos) => (
  <Card>
    <CardActionArea>
      <CardContent>
        <img src={image} alt={alt} title={alt} />
      </CardContent>
    </CardActionArea>
  </Card>
)

export default PartnerLogo
