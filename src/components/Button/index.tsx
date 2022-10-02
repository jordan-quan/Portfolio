import { motion } from 'framer-motion'

import { Arrow } from 'assets/svg'
import * as styles from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = ({ text, ...props }: ButtonProps) => {
  const width = text.length * 12 + 64

  const variants = {
    initial: { pathLength: 0 },
    hover: { pathLength: 1 }
  }

  const buttonVariants = {
    initial: { x: 0 },
    hover: { x: '20px' }
  }

  return (
    <styles.Button
      initial="initial"
      whileHover="hover"
      animate="animate"
      width={width}
      variants={buttonVariants}
      transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
      {...props}>
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
  )
}

export default Button
