// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Grid from "@mui/material/Grid"
import { partners } from "../content/partners"
import Partners from "../components/Homepage/Partners"
import theme from "../theme"
import { Typography } from "@mui/material"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Homepage: React.FC<PageProps<DataProps>> = ({ data, location }) => (
  <Layout noHeader>
    <StaticImage
      src="../images/logo_landing.png"
      loading="eager"
      width={800}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    />
    <Partners partnersData={partners} />
  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Prémios Áquila" />

export default Homepage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
