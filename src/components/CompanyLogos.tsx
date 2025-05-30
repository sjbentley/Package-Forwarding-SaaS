import anthropologie from '../assets/logos/anthropologie.svg';
import bananaRepublic from '../assets/logos/banana-republic.svg';
import bathBodyWorks from '../assets/logos/bath-body-works.svg';
import bestBuy from '../assets/logos/best-buy.svg';
import costco from '../assets/logos/costco.svg';
import macys from '../assets/logos/macys.svg';
import nike from '../assets/logos/nike.svg';
import nordstrom from '../assets/logos/nordstrom.svg';
import polo from '../assets/logos/polo.svg';
import ross from '../assets/logos/ross.svg';
import saksFifth from '../assets/logos/saks-fifth.svg';
import target from '../assets/logos/target.svg';
import urbanOutfitters from '../assets/logos/urban-outfitters-1.svg';
import walmart from '../assets/logos/walmart.svg';

const logos = [
  { src: anthropologie, alt: 'Anthropologie' },
  { src: bananaRepublic, alt: 'Banana Republic' },
  { src: bathBodyWorks, alt: 'Bath & Body Works' },
  { src: bestBuy, alt: 'Best Buy' },
  { src: costco, alt: 'Costco' },
  { src: macys, alt: 'Macy’s' },
  { src: nike, alt: 'Nike' },
  { src: nordstrom, alt: 'Nordstrom' },
  { src: polo, alt: 'Polo' },
  { src: ross, alt: 'Ross' },
  { src: saksFifth, alt: 'Saks Fifth' },
  { src: target, alt: 'Target' },
  { src: urbanOutfitters, alt: 'Urban Outfitters' },
  { src: walmart, alt: 'Walmart' },
];

export default function CompanyLogos() {
  return (
    <section className="company-logos">
      <p className="company-logos__title">Join 4,000+ companies already growing</p>
      <div className="company-logos__list">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="company-logos__logo"
          />
        ))}
      </div>
    </section>
  );
}
