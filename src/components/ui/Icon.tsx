import {
  NextJSIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
  ReactRouterDomIcon,
  WordpressIcon,
  FramerMotionIcon,
  NpmIcon,
  PnpmIcon,
  SwiperIcon,
  PostCssIcon,
  MailchimpIcon,
  I18nIcon,
  YupIcon,
  ReactHookFormIcon,
  FlowbiteIcon,
  WwwIcon,
  GithubIcon,
  ZustandIcon,
} from '@/utils/icons'

export default function Icon({ name = '' }: { name: string }) {
  switch (name) {
    case 'react':
      return <ReactIcon height="100%" stroke="#d4d4d4" />
    case 'next':
      return <NextJSIcon height="100%" stroke="#d4d4d4" />
    case 'tailwind':
      return <TailwindIcon height="100%" stroke="#d4d4d4" />
    case 'typescript':
      return <TypescriptIcon height="100%" stroke="#d4d4d4" />
    case 'react-router-dom':
      return (
        <ReactRouterDomIcon height="100%" fill="#d4d4d4" stroke="#d4d4d4" />
      )
    case 'wordpress':
      return <WordpressIcon height="100%" stroke="#d4d4d4" />
    case 'framer-motion':
      return <FramerMotionIcon height="100%" stroke="#d4d4d4" />
    case 'npm':
      return <NpmIcon height="100%" stroke="#d4d4d4" />
    case 'pnpm':
      return <PnpmIcon height="100%" stroke="#d4d4d4" />
    case 'swiper':
      return <SwiperIcon height="100%" stroke="#d4d4d4" />
    case 'postcss':
      return <PostCssIcon height="100%" stroke="#d4d4d4" />
    case 'mailchimp':
      return <MailchimpIcon height="100%" stroke="#d4d4d4" />
    case 'i18n':
      return <I18nIcon height="100%" stroke="#d4d4d4" />
    case 'yup':
      return <YupIcon height="80%" stroke="#d4d4d4" />
    case 'react-hook-form':
      return <ReactHookFormIcon height="100%" stroke="#d4d4d4" />
    case 'flowbite':
      return <FlowbiteIcon height="100%" stroke="#d4d4d4" />
    case 'www-icon':
      return <WwwIcon height="100%" stroke="#d4d4d4" />
    case 'github':
      return <GithubIcon height="100%" stroke="#d4d4d4" />
    case 'zustand':
      return <ZustandIcon height="100%" fill="#d4d4d4" />
    default:
      return (
        <div className="h-3/5 min-h-2 mx-1 aspect-square border border-neutral-300 rounded-full" />
      )
  }
}
