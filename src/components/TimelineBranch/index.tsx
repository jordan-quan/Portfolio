import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

// the interface needs to explicitly declare which strings are safe to pass
interface HeadingProps {
  index: number
  onAnimated?: () => void
}

const TimelineBranch = ({ index, onAnimated }: HeadingProps) => {
  const ref = useRef(null)
  const isTextInView = useInView(ref, {
    margin: `0px 0px ${index === 1 ? '-475px' : '-425px'} 0px`,
    once: true
  })

  useEffect(() => {
    if (isTextInView) {
      onAnimated && onAnimated()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTextInView])

  return (
    <div ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100%">
        <motion.path
          d={index === 0 ? 'M 85 80 H 17' : 'M 30 80 H 100'}
          fill="transparent"
          strokeWidth="10"
          stroke="#e5e5e5"
          strokeLinecap="round"
          initial={{ pathLength: 0, display: 'none' }}
          animate={isTextInView && { pathLength: 0.8, display: 'block' }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </div>
  )
}

export default TimelineBranch
