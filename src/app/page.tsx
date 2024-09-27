import SectionEducation from '@/components/Education/SectionEducation'
import { SpotlightPreview } from '../components/SpotlightPreview'
import SectionWorks from '../components/Works/SectionWorks'
import SectionAbout from '@/components/About/SectionAbout'
import SectionContact from '@/components/Contact/SectionContact'
import SectionTestimonials from '@/components/Testimonials/SectionTestimonials'

export default function Home() {
  return (
    <main className="flex relative scroll-smooth overflow-x-hidden min-h-screen flex-col items-center px-24">
      <SpotlightPreview />

      <SectionWorks />
      <SectionEducation />

      <SectionAbout />

      <SectionTestimonials />

      <SectionContact />
    </main>
  )
}
