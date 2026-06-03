import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { Problems } from '@/components/sections/Problems'
import { Services } from '@/components/sections/Services'
import { InteractiveDemo } from '@/components/sections/InteractiveDemo'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Cases } from '@/components/sections/Cases'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { ContactForm } from '@/components/sections/ContactForm'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Problems />
      <Services />
      <InteractiveDemo />
      <HowItWorks />
      <Cases />
      <Pricing />
      <FAQ />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </main>
  )
}
