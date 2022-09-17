import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'
import * as styles from './styles'

interface ButtonProps {
  text: string
  link: string
}

const Button = ({ text, link }: ButtonProps) => {
  const width = text.length * 12 + 60

  console.log(text.length, text)

  const variants = {
    initial: { pathLength: 0 },
    hover: { pathLength: 1 }
  }

  const buttonVariants = {
    initial: { x: 0 },
    hover: { x: '20px' }
  }

  const Circle = () => (
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
  )

  const ArrowSvg = () => (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd">
      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
    </svg>
  )

  return (
    <Link to={link}>
      <styles.Button
        width={width}
        variants={buttonVariants}
        transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}>
        <styles.Content>
          <styles.Text>{text}</styles.Text>
          <styles.ArrowWrapper>
            <ArrowSvg />
          </styles.ArrowWrapper>
        </styles.Content>
        <styles.CircleWrapper>
          <Circle />
        </styles.CircleWrapper>
      </styles.Button>
    </Link>
  )
}

export default Button
