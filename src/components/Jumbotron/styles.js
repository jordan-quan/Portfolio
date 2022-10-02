import styled from 'styled-components'
import { motion } from 'framer-motion'

import AnimatedBlock from 'components/AnimatedBlock'
import AnimatedText from 'components/AnimatedText'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${({ height }) => height}px;
  background: #f6f6f6;
  gap: 0rem 10%;
`

export const CircleWrapper = styled(motion.div)`
  position: absolute;
  width: ${({ width }) => width}px;
  left: calc(50% - ${({ width }) => width / 2}px);
  top: calc(46% - ${({ width }) => width / 2}px);
  z-index: 1;
`

export const HeaderContent = styled.div`
  position: absolute;
  top: 25%;
  left: 15%;
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

export const Icons = styled(AnimatedText)`
  margin-left: -8px;
`

export const Subtitle = styled(AnimatedText)`
  margin: 40px 0px;
  font-weight: 200;
  font-size: 16px;
  width: 45rem;
`

export const Frame = styled(AnimatedText)`
  position: absolute;
  top: 17%;
  right: 18%;
  z-index: 10;
  padding: 20px;
  padding-bottom: 50px;
  background: white;
  box-shadow: 1.5rem 2.5rem 5rem 1rem rgb(0 0 0 / 20%);
`

export const Image = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`

export const Tape = styled(motion.div)`
  position: absolute;
  top: 16px;
  left: -48px;
  width: 175px;
  height: 40px;
  background: #7f7f7f3b;
  transform: rotate(317deg);
  z-index: 20;
`
export const TapeRight = styled(motion.div)`
  position: absolute;
  top: 24px;
  right: -54px;
  width: 175px;
  height: 40px;
  background: #7f7f7f3b;
  transform: rotate(226deg);
  z-index: 20;
`
