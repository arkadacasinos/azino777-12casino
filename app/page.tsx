import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { BonusSection } from '@/components/bonus-section'
import { GamesSection } from '@/components/games-section'
import { MobileSection } from '@/components/mobile-section'
import { RegistrationSection } from '@/components/registration-section'
import { AdvantagesSection } from '@/components/advantages-section'
import { SeoContent } from '@/components/seo-content'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <BonusSection />
        <GamesSection />
        <MobileSection />
        <RegistrationSection />
        <AdvantagesSection />
        <SeoContent />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  )
}
