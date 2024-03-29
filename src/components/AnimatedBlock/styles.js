import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Conatiner = styled.div`
  position: relative;
  width: fit-content;
`

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #404ba9;
`
