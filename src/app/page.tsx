import { SpotlightPreview } from '../components/SpotlightPreview';
import SectionWorks from '../components/SectionWorks';

export default function Home() {
  return (
    <main className="flex relative scroll-smooth overflow-x-hidden min-h-screen flex-col items-center px-24">
      <SpotlightPreview />

      <SectionWorks />
      <section className=" h-[100svh] flex items-center" id="services"><h2>Services</h2></section>
      <section className=" h-[100svh] flex items-center" id="playground"><h2>Playground</h2></section>
      <section className=" h-[100svh] flex items-center" id="content"><h2>Content</h2></section>
      <section className=" h-[100svh] flex items-center" id="random"><h2>Random</h2></section>
    </main>
  );
}
