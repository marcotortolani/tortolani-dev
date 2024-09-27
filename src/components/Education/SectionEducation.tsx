'use client'
import { useEffect, useRef } from 'react'
import useStateStore from '@/app/store/useStateStore'

export default function SectionEducation() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  //const sectionNav = useStateStore((state) => state.sectionNav)
  const setSectionNav = useStateStore((state) => state.setSectionNav)

  useEffect(() => {
    // Crear el IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Actualizar el estado según la visibilidad de la sección
        if (entry.isIntersecting) {
          setSectionNav('education')
        }
      },
      {
        // Opciones del observer
        root: null, // El viewport actual
        rootMargin: '0px',
        threshold: 0.75, // Cambia el valor de este umbral si necesitas ajustar la cantidad visible
      }
    )

    // Vincular el observer a la referencia de la sección
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  return (
    <section
      id="education"
      ref={sectionRef}
      className=" h-[100svh] flex items-center"
    >
      <h2>Education & Training</h2>
    </section>
  )
}
