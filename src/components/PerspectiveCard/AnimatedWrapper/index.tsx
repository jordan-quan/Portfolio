import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import * as styles from './styles'

interface HeadingProps {
  children: React.ReactNode
}

const AnimatedWrapper = ({ children, ...props }: HeadingProps) => {
  const textRef = useRef(null)
  const isTextInView = useInView(textRef, {
    margin: `0px 0px -200px 0px`,
    once: true
  })
  const controls = useAnimation()

  const Component = motion.div

  const sequence = async () => {
    await controls.start({
      scaleX: 1,
      transition: {
        duration: 0.5
      }
    })

    await controls.start({
      originX: 1,
      transition: {
        duration: 0.25
      }
    })
    await controls.start({
      scaleX: 0,
      transition: {
        duration: 0.5
      }
    })
  }

  useEffect(() => {
    if (isTextInView) {
      sequence()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTextInView])

  return (
    <styles.Conatiner>
      <Component
        ref={textRef}
        initial={{ opacity: 0 }}
        animate={isTextInView && { opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.5 }}
        {...props}>
        {children}
      </Component>

      <styles.Overlay
        initial={{
          originX: 0,
          scaleX: 0
        }}
        animate={controls}
      />
    </styles.Conatiner>
  )
}

export default AnimatedWrapper
