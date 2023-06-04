import PageTransition from '@/components/PageTransition'

/** This is a React functional component that renders the root layout for the application. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>
}
