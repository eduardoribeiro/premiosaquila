import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PartnersLogos } from '../content/partners';


const Partners = ({ image, width = 48, quality = 100, alt = "" }: PartnersLogos) => <StaticImage
    src={image}
    loading="eager"
    width={width}
    quality={quality}
    formats={["auto", "webp", "avif"]}
    alt={alt}
    style={{ marginBottom: `var(--space-3)` }}
/>;

export default Partners;