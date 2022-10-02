import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { Arrow } from 'assets/svg'
import * as styles from './styles'

interface ButtonProps {
  text: string
  link: string
}

const LinkButton = ({ text, link }: ButtonProps) => {
  const width = text.length * 12 + 60

  const variants = {
    initial: { pathLength: 0 },
    hover: { pathLength: 1 }
  }

  const buttonVariants = {
    initial: { x: 0 },
    hover: { x: '20px' }
  }

  return (
    <Link to={link}>
      <styles.Button
        width={width}
        variants={buttonVariants}
        transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}>
        <styles.Content>
          <styles.Text>{text}</styles.Text>
          <styles.ArrowWrapper>
            <Arrow />
          </styles.ArrowWrapper>
        </styles.Content>
        <styles.CircleWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" width={`${width}px`} height="60px">
            <motion.path
              d={`M 25 29 H ${width * 0.85}`}
              fill="transparent"
              strokeWidth="50"
              stroke="#D9D9D9"
              strokeLinecap="round"
              variants={variants}
              transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            />
          </svg>
        </styles.CircleWrapper>
      </styles.Button>
    </Link>
  )
}

export default LinkButton
