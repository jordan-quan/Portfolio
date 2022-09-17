import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Button = styled(motion.div)`
  position: relative;
  border: none;
  cursor: pointer;
  height: 60px;
  width: ${({ width }) => width}px;
  color: black;
  background: transparent;
  font-size: 20px;

  margin: 0;
  text-transform: uppercase;
`

export const CircleWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

export const Text = styled.h3`
  font-size: 15px;
`

export const Content = styled.div`
  position: absolute;
  display: flex;
  top: 20px;
  left: 23px;
  z-index: 10;
`

export const ArrowWrapper = styled.div`
  margin: -3px 0px 0px 13px;
`
