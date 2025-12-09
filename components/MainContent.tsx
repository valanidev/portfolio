'use client'

import { languages } from '@/constants/all'
import LanguageIcon from './LanguageIcon'
import Image from 'next/image'
import { useState } from 'react'
import Technologies from './Technologies'
import Projects from './Projects'

const MainContent = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="flex grow flex-col gap-2 overflow-hidden rounded-3xl bg-white/5 p-6 text-white md:mt-4 md:flex-row md:p-8">
      {showMore ? <Projects /> : <Technologies />}

      <div
        onClick={() => setShowMore(!showMore)}
        className="ml-auto flex w-full grow cursor-pointer items-center justify-center rounded-3xl border-2 border-white/10 bg-white/10 p-4 md:w-auto md:max-w-52"
      >
        <Image src="/next-page.svg" alt="+" width={96} height={96} />
      </div>
    </div>
  )
}

export default MainContent
