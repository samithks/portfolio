import TheCommandMenu from '@/components/TheCommandMenu'
import TheLogo from '@/components/TheLogo'

/**
 * This is a TypeScript React component that renders a navigation bar with a logo and a command menu.
 *
 * @returns A React component that renders a navigation bar with a logo and a command menu.
 */
export default function TheNavBar() {
  return (
    <nav>
      <div className="w-full pb-4 pt-6">
        <div className="flex flex-row items-center justify-between">
          {/* Logo */}
          <TheLogo />
          {/* Command menu */}
          <div className="flex flex-row items-center gap-2">
            <TheCommandMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
