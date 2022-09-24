import styled from 'styled-components'

import { motion } from 'framer-motion'
import AnimatedBlock from 'components/AnimatedBlock'
import AnimatedText from 'components/AnimatedText'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 170px 0px 200px;
  background: #f6f6f6;
  gap: 0rem 10%;
`

export const CircleWrapper = styled.div`
  position: absolute;
  width: ${({ width }) => width}px;
  left: calc(50% - ${({ width }) => width / 2}px);
  top: calc(50% - ${({ width }) => width / 2}px);
  z-index: 1;
`

export const AnimateButton = styled(AnimatedText)``

export const ButtonWrapper = styled(motion.div)`
  margin-left: -2rem;
  width: 23rem;
`

export const HeaderContent = styled.div`
  margin-left: 12%;
  flex-direction: column;
  font-size: 20px;
  color: #363636;
  z-index: 2;
`

export const Title = styled(AnimatedBlock)`
  text-transform: lowercase;
  width: fit-content;
  height: 100%;
  font-size: 50px;
  font-weight: 600;
  line-height: 65px;
  margin-bottom: 10px;
`

export const ColorText = styled.span`
  color: #404ba9;
`

export const Subtitle = styled(AnimatedText)`
  margin: 40px 0px;
  font-weight: 200;
  font-size: 16px;
  width: 45rem;
`
