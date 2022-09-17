import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Gallery = styled.div`
  width: 90%;
  height: 150rem;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: 1fr 2fr;
  margin: 20rem auto;
  gap: 0rem 10%;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ButtonWrapper = styled(motion.div)``
export const TwoTall = styled.div`
  grid-row: span 2 / auto;
`

export const ThreeTall = styled.div`
  ${({ addMargin }) => addMargin && 'margin-top: 15%;'}
  grid-row: span 3 / auto;
`

export const HeaderContent = styled.div`
  flex-direction: column;
  font-size: 20px;
  color: #363636;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin: 7px 0px 15px 0px;
`

export const Subtitle = styled.h4`
  font-weight: 200;
  font-size: 16px;
`
