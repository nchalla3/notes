import { QuartzComponent, QuartzComponentConstructor } from "./types"

const PortfolioLink: QuartzComponent = () => {
  return (
    <a href="https://nchalla3.github.io" class="portfolio-link">
      ← nchalla3.github.io
    </a>
  )
}

PortfolioLink.css = `
.portfolio-link {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--secondary) !important;
  text-decoration: none;
  opacity: 0.75;
  transition: opacity 0.2s ease;
  letter-spacing: 0.02em;
  font-family: var(--bodyFont);
}
.portfolio-link:hover {
  opacity: 1;
  color: var(--tertiary) !important;
}
`

export default (() => PortfolioLink) satisfies QuartzComponentConstructor
