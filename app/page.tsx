import LanguageIcon from '@/components/LanguageIcon'
import SocialMedia from '@/components/SocialMedia'
import { languages, Socials } from '@/constants/all'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 px-10 md:px-16">
      <div className="flex h-[calc(100dvh-6rem)] w-full max-w-5xl flex-col rounded-3xl border-2 border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:h-[calc(100dvh-20rem)] md:p-14">
        <div className="flex flex-col items-center justify-between py-2 md:flex-row">
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
        </div>

        <div className="flex grow flex-col gap-2 overflow-hidden rounded-3xl bg-white/5 p-6 text-white md:mt-4 md:flex-row md:p-8">
          <div className="md:max-w-9/12">
            <h2 className="mb-4 text-2xl font-medium md:text-3xl">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {languages.map((language, index) => (
                <LanguageIcon key={index} {...language} />
              ))}
            </div>
          </div>
          <div className="flex w-full grow cursor-pointer items-center justify-center rounded-3xl border-2 border-white/10 bg-white/10 p-4 md:w-auto">
            <Image src="/next-page.svg" alt="+" width={96} height={96} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
