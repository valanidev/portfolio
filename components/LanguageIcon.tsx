import Image from 'next/image'

interface LanguageIconProps {
  name: string
  imagePath: string
}

const LanguageIcon = ({ name, imagePath }: LanguageIconProps) => {
  const imgSize = 48

  return (
    <div
      className="flex aspect-square w-12 items-center justify-center overflow-hidden rounded-xl border-2 border-white/10 bg-white/10 md:w-16"
      title={name}
    >
      <Image src={imagePath} alt={name} width={imgSize} height={imgSize} />
    </div>
  )
}

export default LanguageIcon
