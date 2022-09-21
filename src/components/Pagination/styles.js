import styled from 'styled-components'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: relative;
  margin-top: -120px;
  margin-bottom: 120px;
  width: 100vw;
  height: 500px;
`

export const Next = styled(Link)`
  position: absolute;
  right: 0px;
  text-decoration: none;
`

export const ArrowWrapper = styled.div`
  position: absolute;
  left: 100px;
  top: 230px;
  transform: scaleX(-1);
`

export const ArrowWrapperRight = styled.div`
  position: absolute;
  right: 100px;
  top: 230px;
`

export const Previous = styled(Link)`
  position: absolute;
  left: 0px;
  text-decoration: none;
`

export const LinkContent = styled(motion.div)`
  height: 500px;
  position: relative;
`

export const TextWrapper = styled(motion.div)`
  color: #363636;
  position: absolute;
  left: 170px;
  top: 207px;
`

export const TextWrapperRight = styled(motion.div)`
  color: #363636;
  position: absolute;
  right: 170px;
  top: 207px;
  text-align: right;
`

export const Title = styled.h2`
  font-weight: 600;
  text-transform: lowercase;
  font-size: 24px;
  white-space: nowrap;
  margin: 0px 0px 7px;
`

export const Subtitle = styled.h4`
  text-transform: uppercase;
  font-weight: 200;
  white-space: nowrap;
  font-size: 13px;
`

export const Image = styled.img`
  width: 350px;
  height: 500px;
  object-fit: cover;
`

export const ImageWrapper = styled(motion.div)`
  position: absolute;
  left: -350px;
  top: 0px;
`

export const ImageWrapperRight = styled(motion.div)`
  position: absolute;
  right: -350px;
  top: 0px;
`

export const Divider = styled(motion.div)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${({ color }) => color};
  position: absolute;
  top: 230px;
  left: calc(50% - 12.5px);
`

export const Footer = styled.div`
  margin-top: -140px;
  margin-bottom: 100px;
  height: 100px;
`

export const Line = styled.div`
  margin: 0px 100px;
  border-bottom: solid #e9e9e9 2px;
`

export const FooterText = styled.h1`
  font-weight: 600;
  text-transform: lowercase;
  font-size: 32px;
  display: block;
  color: #363636;
  margin: auto;
  margin-bottom: 50px;
  width: fit-content;
`

export const ColorText = styled(Link)`
  color: #404ba9;
  text-decoration: underline;
  text-underline-offset: 5px;
`

export const Block = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 160px;
  background: black;
`

export const FooterLinks = styled.div`
  margin-top: 50px;
  position: relative;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 13px;
  color: #363636;
  font-family: 'Montserrat', sans-serif;
`

export const Trademark = styled.div`
  position: absolute;
  left: 100px;
`

export const SocialSection = styled.div`
  position: absolute;
  right: 100px;
`

export const Social = styled.a`
  margin-left: 30px;
  text-decoration: none;
  color: #363636;
`
