import styled from 'styled-components'

import { motion } from 'framer-motion'
import AnimatedBlock from 'components/AnimatedBlock'
import AnimatedText from 'components/AnimatedText'

export const MobileConatiner = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  height: 100vh;
  background: #f6f6f6;
  position: relative;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 130px 40px 140px;

  @media (min-width: 600px) {
    padding: 130px 12% 140px;
  }
`

export const Message = styled(AnimatedText)`
  margin: 40px 0px;
  font-weight: 200;
  font-size: 14px;
  width: 45rem;
  color: #b85353;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`

export const CircleWrapper = styled(motion.div)`
  position: absolute;
  width: ${({ width }) => width * 3.5}px;
  left: ${({ width }) => width}px;
  top: calc(20% - ${({ width }) => width / 2}px);
  z-index: 1;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - ${({ width }) => width / 2}px);
    top: 75px;
  }
`

export const ButtonWrapper = styled(motion.div)`
  margin-left: -2rem;
  width: 23rem;
`

export const HeaderContent = styled.div`
  flex-direction: column;
  color: #363636;
  z-index: 2;
  width: 100%;
`

export const Title = styled(AnimatedBlock)`
  text-transform: lowercase;
  width: fit-content;
  height: 100%;
  font-size: 40px;
  font-weight: 600;
  line-height: 65px;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    font-size: 50px;
  }
`

export const ColorText = styled.span`
  color: #404ba9;
`

export const Subtitle = styled(AnimatedText)`
  margin: 40px 0px;
  font-weight: 200;
  font-size: 16px;
  width: 45rem;

  @media (max-width: 600px) {
    font-size: 14px;
    width: 100%;
  }
`

export const Icons = styled(AnimatedText)`
  margin-left: -10px;
`

export const Footer = styled(motion.div)`
  width: 100%;
  height: ${({ height }) => height}px;
  background: black;
  z-index: 2;
  position: absolute;
  bottom: 0px;
`
