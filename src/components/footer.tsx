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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        © {new Date().getFullYear()} &middot;
        {` `}
        <a href="https://www.premios-aquila.pt">
          <img
            src="./images/parceiros/fenix.png"
            height={64}
            alt="Fénix - Associação Cinematográfica"
            title="Fénix - Associação Cinematográfica"
          />
        </a>
      </div>
    )}
  </footer>
)

export default Footer
