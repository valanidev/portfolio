import { languages } from '@/constants/all'
import LanguageIcon from './LanguageIcon'

const Technologies = () => {
  return (
    <div className="md:max-w-9/12">
      <h2 className="mb-4 text-2xl font-medium md:text-3xl">Technologies</h2>
      <div className="flex flex-wrap gap-3">
        {languages.map((language, index) => (
          <LanguageIcon key={index} {...language} />
        ))}
      </div>
    </div>
  )
}

export default Technologies
