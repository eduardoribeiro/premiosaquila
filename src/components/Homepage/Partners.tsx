import { Typography, Grid, Box } from "@mui/material"
import React from "react"
import { PartnersLogos } from "../../content/partners"
import theme from "../../theme"
import PartnerLogo from "../logos"

export interface PartnersProps {
    partnersData: PartnersLogos[];
}

const Partners = ({partnersData}:PartnersProps) => (
  <Box>
    <Typography variant="h6" sx={{ margin: theme.spacing(8, 0, 1, 0) }}>
      PARCEIROS
    </Typography>
    <Grid container spacing={2} sx={{ padding: theme.spacing(2, 0) }}>
      {partnersData.map(partner => (
        <Grid item xs={2.4}>
          <PartnerLogo
            key={partner.image}
            image={partner.image}
            alt={partner.alt}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default Partners
