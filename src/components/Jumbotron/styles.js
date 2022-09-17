import styled from 'styled-components'

import { motion } from 'framer-motion'

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

export const ButtonWrapper = styled(motion.div)`
  margin-left: -2rem;
  width: 23rem;
`

export const HeaderContent = styled.div`
  // margin-left: 19rem;
  margin-left: 12%;
  flex-direction: column;
  font-size: 20px;
  color: #363636;
  z-index: 2;
`

export const Title = styled.h1`
  text-transform: lowercase;
  font-size: 50px;
  font-weight: 600;
`

export const ColorText = styled.span`
  color: #404ba9;
`

export const Subtitle = styled.h4`
  margin: 20px 0px 50px;
  font-weight: 200;
  font-size: 16px;
  width: 45rem;
`
