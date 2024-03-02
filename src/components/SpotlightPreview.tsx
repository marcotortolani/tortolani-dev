import React from 'react';
import { cn } from '@/utils/cn';
import { Spotlight } from './ui/Spotlight';

const SpotlightData = {
  title: 'Marco Tortolani',
  subtitle: 'Frontend Developer',
  descriptionShort: 'Apasionado - Creativo - Detallista',
  descriptionLong:
    'Comprometido por el trabajo en equipo, siempre buscando mejorar la experiencia de usuario, un poco nerd, un poco chill. Buena música, trekking en montaña, Star Wars y videojuegos no pueden faltar.',
};

export function SpotlightPreview() {
  return (
    <section id="home" className="h-[100svh] pointer-events-none w-screen rounded-md flex flex-col justify-between gap-10 md:items-center md:justify-center bg-white dark:bg-black/[0.96] antialiased dark:bg-grid-white/[0.03] bg-grid-black/[0.03] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 from-neutral-400 to-neutral-800   bg-opacity-50">
          {SpotlightData.title} <br />
          <span></span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-extralight text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 from-neutral-500 to-neutral-950 bg-opacity-50">
          {SpotlightData.subtitle}
        </h2>
        <p className="mt-4 font-bold text-base dark:text-neutral-300 text-neutral-600 max-w-lg text-center mx-auto">
          {SpotlightData.descriptionShort}
        </p>
      </div>
      <p className="mt-4 font-light text-base dark:text-neutral-300 text-neutral-800 max-w-md text-center mx-auto">
        {SpotlightData.descriptionLong}
      </p>
    </section>
  );
}
