import styled from 'styled-components'
import { motion } from 'framer-motion'

export const InputWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: fit-content;
  margin: 0px 0px 40px 0px;
`

export const Underline = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: #363636;
  bottom: 0px;
  left: 0px;
  z-index: 2;
`
export const LightUnderline = styled.div`
  position: absolute;
  height: 2px;
  width: 100%;
  background: #e5e5e5;
  z-index: 1;
  bottom: 0px;
  left: 0px;
`

export const FieldWrapper = styled.div`
  ${({ tag }) => tag} {
    margin: 15px 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #363636;
    width: 100%;
    font-size: 18px;
    border: none;
    background: transparent;
    outline: none;
  }
`
