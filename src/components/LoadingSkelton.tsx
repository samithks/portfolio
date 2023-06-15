const dots = [
  {
    id: '1',
    main: 'loading-dot bg-sky-500',
    animate: 'loading-dot-pong bg-sky-400 animation-delay-200',
  },
  {
    id: '2',
    main: 'loading-dot bg-red-500',
    animate: 'loading-dot-pong bg-red-400 animation-delay-400',
  },
  {
    id: '3',
    main: 'loading-dot bg-yellow-500',
    animate: 'loading-dot-pong bg-yellow-400 animation-delay-600',
  },
  {
    id: '4',
    main: 'loading-dot bg-green-500',
    animate: 'loading-dot-pong bg-green-400 animation-delay-800',
  },
  {
    id: '5',
    main: 'loading-dot bg-purple-500',
    animate: 'loading-dot-pong bg-purple-400 animation-delay-1000',
  },
]

/**
 * This is a React component that renders a set of animated dots used for indicating loading or processing.
 *
 * @returns It is a functional component that renders a set of animated dots using CSS classes.
 */
export const LoadingDots = () => {
  return (
    <div className="flex h-auto w-full items-center justify-center gap-x-3">
      {dots.map((dot) => {
        return (
          <span key={dot.id} className="relative flex h-6 w-6">
            <span className={`${dot.animate}`} />
            <span className={`${dot.main}`} />
          </span>
        )
      })}
    </div>
  )
}

export default function LoadingSkelton() {
  // Or a custom loading skeleton component
  return (
    <div className="z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden opacity-75">
      <LoadingDots />
      <h2 className="mt-3 text-center text-xl font-semibold">Loading...</h2>
      <p className="text-center">This may take a few seconds, please don&apos;t close this page.</p>
    </div>
  )
}
