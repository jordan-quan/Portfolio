import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

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
  box-shadow: 1.5rem 2.5rem 5rem 1rem rgb(0 0 0 / 20%);
  margin: auto;
  margin-bottom: 4rem;
  position: relative;
  // background-image: linear-gradient(0deg, rgb(238, 9, 121) 0rem, rgb(255, 106, 0));
  background-image: linear-gradient(0deg, #8a5082 0rem, #ff7b89);
  background-image: linear-gradient(0deg, #ff8474 0rem, #ffc996);
`

export const PerspectiveWrapper = styled.div`
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
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 1) 100%,
      rgba(0, 0, 0, 0.5) 100%
    );
    border-radius: 50%;
    position: absolute;
    top: -25%;
    left: -25%;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  transition: all 800ms cubic-bezier(0.03, 0.98, 0.52, 1) 0.2s;
`

export const Info = styled.div`
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
  transform: translate(1rem, 1rem) scale(0.95);

  transition: all 800ms cubic-bezier(0.03, 0.98, 0.52, 1) 0.2s;

  :hover {
    opacity: 1;
    transform: translate(0rem, 0rem) scale(1);
  }
`
