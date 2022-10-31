// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Homepage: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => (
  <Layout>
    <h1>
      Gatsby supports <b>TypeScript by default</b>
    </h1>
    
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
