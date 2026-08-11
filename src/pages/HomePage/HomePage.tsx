import HeroSection from './HeroSection'
import CompanyIntroSection from './CompanyIntroSection'
import ProductsShowcaseSection from './ProductsShowcaseSection'
import AdvantagesSection from './AdvantagesSection'
import MarketsSection from './MarketsSection'
import CtaSection from './CtaSection'


export default function HomePage() {

  return (

    <div className="min-h-screen bg-background">

      <HeroSection />

      <CompanyIntroSection />

      <ProductsShowcaseSection />

      <AdvantagesSection />

      <MarketsSection />

      <CtaSection />

    </div>

  )

}