import { IconType } from 'react-icons'

interface Props {
  icon: IconType
  size?: number
}

/**
 * This is a TypeScript React component that renders a dynamic icon based on the props passed in.
 *
 * @param {Props} - The above code defines a functional component named `DynamicIcon` that takes in a single prop named
 *   `icon` of type `Props`.
 */
const DynamicIcon = ({ icon: Icon, size = 24 }: Props) => {
  return <Icon size={size} />
}

export default DynamicIcon
