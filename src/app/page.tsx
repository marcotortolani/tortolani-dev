import { SpotlightPreview } from '../components/SpotlightPreview'
import SectionWorks from '../components/Works/SectionWorks'

export default function Home() {
  return (
    <main className="flex relative scroll-smooth overflow-x-hidden min-h-screen flex-col items-center px-24">
      <SpotlightPreview />

      <SectionWorks />
      <section className=" h-[100svh] flex items-center" id="education">
        <h2>Education & Training</h2>
      </section>
      <section className=" h-[100svh] flex items-center" id="about">
        <h2>About me</h2>
      </section>
      <section className=" h-[100svh] flex items-center" id="testimonials">
        <h2>Testimonials</h2>
      </section>
      <section className=" h-[100svh] flex items-center" id="contact">
        <h2>Contact</h2>
      </section>
    </main>
  )
}
