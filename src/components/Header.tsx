'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useStateStore from '@/app/store/useStateStore'
import { ToggleTheme } from './ToggleTheme'
import { Navbar } from './Navbar'
import { jetBrains } from '@/app/fonts'

const words = [
  'marco',
  'tortolani',
  'frontend',
  'developer',
  'teamwork',
  'professional',
]

export default function Header() {
  // const sectionNav = useStateStore((state) => state.sectionNav)
  // const [currentWordIndex, setCurrentWordIndex] = useState(0)

  // useEffect(() => {
  //   setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
  // }, [sectionNav])

  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0) // Para rastrear la posición del scroll
  const [isThrottled, setIsThrottled] = useState(false)
  const sectionNav = useStateStore((state) => state.sectionNav)

  useEffect(() => {
    const handleScroll = () => {
      if (isThrottled) return // Si está en throttling, salimos de la función

      const scrollY = window.scrollY // Obtener la posición actual del scroll

      if (scrollY > lastScrollY + 50) {
        // Si el scroll es hacia abajo
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length) // Cambia al siguiente índice
      } else if (scrollY < lastScrollY - 50) {
        // Si el scroll es hacia arriba
        setCurrentWordIndex(
          (prevIndex) => (prevIndex - 1 + words.length) % words.length
        ) // Cambia al índice anterior
      }

      setLastScrollY(scrollY) // Actualiza la posición del scroll

      // Activa el throttling
      setIsThrottled(true)
      setTimeout(() => {
        setIsThrottled(false) // Desactiva el throttling después de 500ms
      }, 1500) // Ajusta el tiempo según tus necesidades
    }

    window.addEventListener('scroll', handleScroll) // Agrega el evento de scroll

    return () => {
      window.removeEventListener('scroll', handleScroll) // Limpia el evento al desmontar
    }
  }, [lastScrollY, isThrottled])

  return (
    <header className="w-full flex justify-center">
      <div className="fixed z-50 top-4 py-2 w-5/6 max-w-screen-md flex items-center gap-6 justify-between px-3 dark:bg-black/20 bg-gray-500/30 backdrop-blur-[8px] border-[0.1px] border-gray-500/40 bg-blend-soft-light rounded-full">
        <div className="flex items-center gap-6">
          <ToggleTheme />
          <span className="relative h-full overflow-hidden">
            <motion.span
              key={currentWordIndex}
              initial={{ y: 0, opacity: 1 }}
              animate={
                lastScrollY > window.scrollY
                  ? { y: -100, opacity: 0 }
                  : { y: 100, opacity: 0 }
              } // Animación según scroll
              exit={{
                y: lastScrollY > window.scrollY ? 100 : -100,
                opacity: 0,
              }} // Sale hacia arriba o abajo
              transition={{ duration: 0.5 }}
              className={` ${jetBrains.className} absolute h-full z-20 cursor-default text-neutral-500`}
            >
              {words[currentWordIndex]}
            </motion.span>
            <motion.span
              key={(currentWordIndex + 1) % words.length}
              initial={{
                y: lastScrollY > window.scrollY ? 100 : -100,
                opacity: 0,
              }} // Estado inicial dependiendo de la dirección
              animate={{ y: 0, opacity: 1 }} // Aparece en la posición central
              exit={{ y: 0, opacity: 1 }} // Sin animación de salida
              transition={{ duration: 0.5 }}
              className={` ${jetBrains.className} h-full z-20 cursor-default text-neutral-500`}
            >
              {words[(currentWordIndex + 1) % words.length]}
            </motion.span>
          </span>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

// export default function Header() {
//   const sectionNav = useStateStore((state) => state.sectionNav)

//   return (
//     <header className="w-full flex justify-center">
//       <div className=" fixed z-50 top-4 py-2 w-5/6  max-w-screen-md flex items-center gap-6 justify-between px-3 dark:bg-black/20 bg-gray-500/30 backdrop-blur-[8px] border-[0.1px] border-gray-500/40 bg-blend-soft-light rounded-full">
//         <div className=" flex items-center gap-6">
//           <ToggleTheme />
//           <span className=" h-full relative overflow-hidden">
//             <span
//               className={`${jetBrains.className} ${
//                 sectionNav === 'home' ? '' : ''
//               } absolute left-0 cursor-default leading-3 `}
//             >
//               marco
//             </span>
//             <span
//               className={`${jetBrains.className} absolute left-0 cursor-default leading-3 `}
//             >
//               tortolani
//             </span>
//           </span>
//         </div>
//         <Navbar />
//       </div>
//     </header>
//   )
// }
