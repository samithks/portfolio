import dynamic from 'next/dynamic'
import { Fragment } from 'react'

type Props = {
  children: React.ReactNode
}

/* `const NoSSR` is a functional component that takes in a single prop `children` of type
`React.ReactNode`. It returns a `Fragment` component that wraps around the `children` prop. The
purpose of this component is to prevent rendering of its children on the server-side by returning an
empty fragment. This is useful for components that rely on browser-specific APIs or libraries that
are not compatible with server-side rendering. */
const NoSSR = (props: Props) => <Fragment>{props.children}</Fragment>

// function that takes in a function that returns a `Promise` and an optional object
export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
})
