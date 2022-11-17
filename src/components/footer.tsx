import { Grid, styled } from "@mui/material"
import React from "react"

const FooterElement = styled("footer")(({ theme }) => ({
  paddingTop: theme.spacing(1),
  position: "absolute",
  bottom: 20,
  width: `var(--size-content)`,
}))

const Footer: React.FC<any> = ({ children }) => (
  <FooterElement>
    {children ? (
      children
    ) : (
      <Grid
      container
      sx={{ justifyContent: "space-between", alignItems: "flex-end" }}
    >
      <Grid item>
        © {new Date().getF/Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlullYear()} &middot;
        {` `}
        <a href="https://www.premios-aquila.pt">
          <img
            src="./images/parceiros/fenix.png"
            height={64}
            alt="Fénix - Associação Cinematográfica"
            title="Fénix - Associação Cinematográfica"
          />
        </a>
      </Grid>
      <Grid item></Grid>
    </Grid>
    )}
  </FooterElement>
)

export default Footer
