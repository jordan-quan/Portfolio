import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Conatiner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #404ba9;
`
