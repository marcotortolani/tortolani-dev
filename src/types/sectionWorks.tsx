export interface itemCard {
  id: number
  title: string
  description: string
  developmentDescription: string
  desktopImg: string
  mobileImg: string
  techStack: { link: string; icon: string; name: string }[]
  urlSite: string
  urlDemo: string
  urlRepo: string
}
