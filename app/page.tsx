import SocialMedia from '@/components/SocialMedia'
import { Socials } from '@/constants/all'

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 px-10 md:px-16">
      <div className="h-[calc(100dvh-8rem)] w-full max-w-5xl rounded-3xl border-2 border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:h-[calc(100dvh-20rem)] md:p-14">
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
      </div>
    </div>
  )
}

export default Home
