import Header from '@/components/Header'
import MainContent from '@/components/MainContent'

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 px-10 md:px-16">
      <div className="flex h-[calc(100dvh-6rem)] w-full max-w-5xl flex-col rounded-3xl border-2 border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:h-[calc(100dvh-20rem)] md:p-14">
        <Header />

        <MainContent />
      </div>
    </div>
  )
}

export default Home
