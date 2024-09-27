import { create } from 'zustand'

export type Theme = 'light' | 'dark'
export type Section =
  | 'home'
  | 'works'
  | 'education'
  | 'about'
  | 'testimonials'
  | 'contact'

type State = {
  theme: Theme
  sectionNav: Section
  toggleTheme: () => void
  setSectionNav: (section: Section) => void
}

const useStateStore = create<State>((set) => ({
  theme: 'light',
  sectionNav: 'home',

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),

  setSectionNav: (section) =>
    set(() => ({
      sectionNav: section,
    })),
}))

export default useStateStore
