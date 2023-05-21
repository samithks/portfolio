'use client'

import { useCallback, useEffect } from 'react'

/** This is a TypeScript React component for displaying an error message and logging the error to a reporting service. */
export default function ErrorPage({ error, _reset }: { error: Error; _reset: () => void }) {
  const logError = useCallback(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  useEffect(() => {
    logError()
  }, [logError])

  return (
    <div className="flex flex-none justify-center">
      <p>Oh no, something went wrong... maybe refresh?</p>
    </div>
  )
}
