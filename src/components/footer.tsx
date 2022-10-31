import React from "react"

const Footer: React.FC<any> = ({ children }) => (
  <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
    }}
  >
    {children ? (
      children
    ) : (
      <>
        © {new Date().getFullYear()} &middot;
        {` `}
        <a href="https://www.premios-aquila.pt">Prémios Áquila</a>
      </>
    )}
  </footer>
)

export default Footer
