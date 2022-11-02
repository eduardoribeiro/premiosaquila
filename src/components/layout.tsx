/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer";
import TopLayout from "./top-layout";
import theme from "../theme";

export interface LayoutProps {
  noHeader?: boolean;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  noFooter?: boolean;
  children: React.ReactElement | React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ noHeader = false, header, noFooter = false, footer, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <TopLayout theme={theme}>
      {header ? header : !noHeader && <Header siteTitle={data.site.siteMetadata?.title || `Title`} />}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main style={{minHeight: '80vh'}}>{children}</main>
        {footer ? footer : !noFooter && <Footer />}
      </div>
    </TopLayout>
  )
};

export default Layout
