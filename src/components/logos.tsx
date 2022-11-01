import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PartnersLogos } from "../content/partners"
import Card from "@mui/material/Card"
import { CardActionArea } from "gatsby-theme-material-ui"
import CardContent from "@mui/material/CardContent"

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
        <StaticImage
          src={image}
          loading="eager"
          width={width}
          quality={quality}
          formats={["auto", "webp", "avif"]}
          alt={alt}
          style={{ marginBottom: `var(--space-3)` }}
        />
      </CardContent>
    </CardActionArea>
  </Card>
)

export default PartnerLogo
