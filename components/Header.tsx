import { Socials } from '@/constants/all'
import SocialMedia from './SocialMedia'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between py-2 md:flex-row">
      <h1 className="text-4xl font-semibold text-white md:text-6xl">
        valani.dev
      </h1>
      <div className="flex flex-row gap-2 md:flex-col">
        {Socials.map((social, index) => (
          <SocialMedia
            key={index}
            url={social.url}
            imagePath={social.imagePath}
            title={social.title}
          />
        ))}
      </div>
    </header>
  )
}

export default Header
