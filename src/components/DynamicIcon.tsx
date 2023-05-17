import { IconType } from 'react-icons'

interface Props {
  icon: IconType
}

const DynamicIcon = ({ icon: Icon }: Props) => {
  return <Icon size={24} />
}

export default DynamicIcon
