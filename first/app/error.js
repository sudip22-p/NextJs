'use client';

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#333]">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Oops! Something went wrong</h2>
      <p className="text-lg text-white mb-6">An unexpected error occurred.</p>
      <button
        onClick={() => reset()}
        className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-semibold transition duration-200 ease-in-out shadow-lg"
      >
        Try Again
      </button>
    </div>
  )
}
