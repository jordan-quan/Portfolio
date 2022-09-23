import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// the interface needs to explicitly declare which strings are safe to pass
interface HeadingProps {
  children: React.ReactNode
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'div' | 'path'
  initial?: object
  animate?: object
  offset?: string
  onAnimated?: () => void
}

const AnimatedText = ({
  tag = 'p',
  children,
  initial,
  animate,
  offset,
  onAnimated,
  ...props
}: HeadingProps) => {
  const textRef = useRef(null)
  const isTextInView = useInView(textRef, {
    margin: `0px 0px ${offset || '-200px'} 0px`,
    once: true
  })

  const Component = motion[tag]

  useEffect(() => {
    if (isTextInView) {
      onAnimated && onAnimated()
    }
  }, [isTextInView])

  return (
    <Component
      ref={textRef}
      initial={initial || { opacity: 0, y: 25 }}
      animate={isTextInView && (animate || { opacity: 1, y: 0 })}
      transition={{ duration: 1 }}
      {...props}>
      {children}
    </Component>
  )
}

export default AnimatedText
