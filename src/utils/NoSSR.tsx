import dynamic from 'next/dynamic'
import { Fragment } from 'react'

type Props = {
  children: React.ReactNode
}
const NoSSR = (props: Props) => <Fragment>{props.children}</Fragment>

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
})
