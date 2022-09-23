import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import AnimatedBlock from 'components/AnimatedBlock'

export const Transition = {
  duration: 0.8,
  ease: [0.03, 0.98, 0.52, 1],
  delay: 0.2
}

export const Link = styled(RouterLink)`
  height: 100%;
  width: 100%;
  display: block;
`

export const Card = styled(motion.div)`
  background: white;
  width: 100%;
  height: 100%;
  margin: auto;
  box-shadow: 1.5rem 2.5rem 5rem 1rem rgb(0 0 0 / 20%);
  margin-bottom: 4rem;
  position: relative;
  background-image: ${({ colours: { primary, secondary } }) =>
    `linear-gradient(0deg, ${primary} 0rem, ${secondary})`};
`

export const PerspectiveWrapper = styled(AnimatedBlock)`
  perspective: 500;
  width: 100%;
  height: 100%;
`

export const CardText = styled(motion.div)`
  width: 100%;
  height: 100%;
  top: 0rem;
  left: 0rem;
  position: relative;
  overflow: hidden;
`

export const Image = styled(motion.img)`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Circle = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border-radius: 50%;
  display: inline-block;
  position: relative;

  :after {
    content: '';
    display: block;
    width: 150%;
    height: 150%;
    // background: radial-gradient(
    //   ellipse at center,
    //   rgba(255, 255, 255, 0) 50%,
    //   rgba(0, 0, 0, 1) 100%,
    //   rgba(0, 0, 0, 0.5) 100%
    // );
    border-radius: 50%;
    position: absolute;
    top: -25%;
    left: -25%;
  }
`

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
`

export const Info = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  text-align: center;
  padding: 3.5rem 5rem;
  width: calc(100% - 10rem);
  height: calc(100% - 7rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
  opacity: 0;
`

export const InfoVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    x: '1rem',
    y: '1rem'
  },
  hover: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0
  }
}

export const Title = styled.h2`
  text-transform: lowercase;
  margin-bottom: 12px;
`

export const Text = styled.h4`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 100;
`
