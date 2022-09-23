import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import * as styles from './styles'

// the interface needs to explicitly declare which strings are safe to pass
interface HeadingProps {
  children: React.ReactNode
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'div' | 'path'
  offset?: string
  onAnimated?: () => void
}

const AnimatedBlock = ({ children, offset, tag, onAnimated, ...props }: HeadingProps) => {
  const textRef = useRef(null)
  const [isDone, setIsDone] = useState(false)
  const isTextInView = useInView(textRef, {
    margin: `0px 0px ${offset || '-200px'} 0px`,
    once: true
  })
  const controls = useAnimation()

  const Component = motion[tag]

  const sequence = async () => {
    await controls.start({
      x: '0',
      transition: {
        duration: 0.5
      }
    })
    await controls.start({
      x: '101%',
      transition: {
        delay: 0.25,
        duration: 0.5
      }
    })
    setIsDone(true)
  }

  useEffect(() => {
    if (isTextInView) {
      sequence()
      onAnimated && onAnimated()
    }
  }, [isTextInView])

  return (
    <styles.Conatiner
      style={{
        overflowX: isDone ? 'visible' : 'hidden'
      }}>
      <Component
        ref={textRef}
        initial={{ opacity: 0 }}
        animate={isTextInView && { opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        {...props}>
        {children}
      </Component>
      {!isDone && (
        <styles.Overlay
          initial={{
            x: '-101%'
          }}
          animate={controls}
        />
      )}
    </styles.Conatiner>
  )
}

export default AnimatedBlock
