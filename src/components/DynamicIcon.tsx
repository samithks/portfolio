import { IconType } from 'react-icons'

interface Props {
  icon: IconType
}

/**
 * This is a TypeScript React component that renders a dynamic icon based on the props passed in.
 *
 * @param {Props} - The above code defines a functional component named `DynamicIcon` that takes in a single prop named
 *   `icon` of type `Props`.
 */
const DynamicIcon = ({ icon: Icon }: Props) => {
  return <Icon size={24} />
}

export default DynamicIcon
