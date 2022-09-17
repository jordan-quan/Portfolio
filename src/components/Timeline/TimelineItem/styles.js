import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

export const Link = styled(RouterLink)`
  position: relative;
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: block;
`

export const CardWrapper = styled(motion.div)`
  min-width: 1200px;
  width: 100%;
  height: 100%;
`

export const Card = styled(motion.div)`
  position: relative;
  border-bottom: 1px solid #e8e8e8;
  width: 100%;
  height: 28rem;
`

export const SquareVariants = {
  initial: {
    width: '0rem'
  },
  hover: {
    width: '45rem'
  }
}

export const SquareTransition = {
  duration: 0.5,
  ease: [0.77, 0, 0.175, 1],
  delay: 0.1
}

export const Square = styled(motion.div)`
  z-index: 1;
  position: absolute;
  top: 14rem;
  right: 10rem;
  width: 0rem;
  height: 23rem;
  object-fit: cover;
  background-image: ${({ colours: { primary, secondary } }) =>
    `linear-gradient(0deg, ${primary} 0rem, ${secondary})`};
`

export const ImageVariants = {
  initial: {
    x: 0
  },
  hover: {
    x: '-45rem'
  }
}

export const ImageTransition = {
  duration: 0.5,
  ease: [0.77, 0, 0.175, 1]
}

export const Image = styled(motion.div)`
  z-index: 2;
  position: absolute;
  margin-top: -2rem;
  top: 0;
  right: -45rem;
  width: 45rem;
  height: 32rem;
`

export const CardInfo = styled(motion.div)`
  position: absolute;
  top: calc(25% - 20px);
  padding: 20px 20px 20px 0px;
  left: 25rem;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 20px;
  color: #999999;
  z-index: 4;
  background: #f8f8f8;
`

export const BranchWrapperVariants = {
  initial: {
    scale: 1,
    x: 0
  },
  hover: {
    scaleX: 1.5,
    x: '37.5px'
  }
}

export const CardInfoVariants = {
  initial: {
    scale: 1,
    x: 0,
    y: 0
  },
  hover: {
    scale: 1.1,
    x: '60px',
    y: '5.5px',
    color: '#363636',
    background: 'white'
  }
}

export const BranchVariants = {
  initial: { pathLength: 0, display: 'none' },
  animate: { pathLength: 0.8, display: 'block' }
}

export const Backdrop = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
`

export const BranchWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 10rem;
  z-index: 10;
`

export const Title = styled.h1`
  text-transform: lowercase;
  font-size: 40px;
  font-weight: 600;
  margin: 7px 0px 8px 0px;
`

export const YearVariants = {
  initial: { color: '#d1d0d0' },
  hover: { color: '#ff8474' }
}

export const Year = styled(motion.h3)`
  font-weight: 600;
  color: #d1d0d0;
  font-size: 15px;
`

export const Subtitle = styled.h4`
  font-weight: 200;
  font-size: 15px;
`

export const Content = styled.div`
  height: 100%;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 40%;
  right: 11rem;
`
