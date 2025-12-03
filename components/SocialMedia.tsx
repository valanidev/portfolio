import Image from 'next/image'

interface SocialMediaProps {
  url: string
  title: string
  imagePath: string
}

const SocialMedia = ({ url, title, imagePath }: SocialMediaProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={title}>
      <Image src={imagePath} alt={title} width={24} height={24} />
    </a>
  )
}

export default SocialMedia
