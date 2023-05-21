'use client'

import Lottie from 'lottie-react'
import codingBoy from '~/animations/coding-boy.json'

/** The AboutHero function returns a React component that displays a Lottie animation of a coding boy. */
const AboutHero: React.FC = () => {
  const animeOptions = {
    loop: true,
    autoplay: true,
    animationData: codingBoy,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className="flex flex-row items-center justify-center py-3">
      <div className="w-3/5">
        <Lottie {...animeOptions} />
      </div>
    </div>
  )
}

export default AboutHero
