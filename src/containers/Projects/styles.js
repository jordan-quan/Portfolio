import { motion } from 'framer-motion'
import styled from 'styled-components'

import AnimatedText from 'components/AnimatedText'

export const Title = styled.h1`
  text-transform: lowercase;
  font-size: 52px;
  font-weight: 600;
`

export const Subtitle = styled.h4`
  text-transform: uppercase;
  margin: 10px auto;
  font-weight: 200;
  font-size: 16px;
  width: 45rem;
`

export const Header = styled.div`
  text-align: center;
  margin: 80px auto;
  color: #363636;
`

export const Image = styled.img`
  width: 450px;
  height: 600px;
  margin: 0px auto;
  object-fit: cover;
`

export const Image2 = styled.img`
  width: 100%;
  margin: auto;
  // box-shadow: 1.5rem 2.5rem 5rem 1rem rgb(0 0 0 / 20%);
`

export const Keyboard = styled.img`
  width: 90%;
  bottom: 0px;
  left: -45px;
  position: absolute;
`

export const Mouse = styled(motion.img)`
  width: 15%;
  bottom: 0px;
  right: -45px;
  position: absolute;
  transform: scaleY(1.2);
`

export const Image2Wrapper = styled(AnimatedText)`
  flex-basis: 100%;
  position: relative;
  margin: auto 50px;
  padding-bottom: 100px;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  padding: 0px 50px;
  margin: 0px 75px 100px;
`

export const ListItem = styled.li`
  color: rgb(153, 153, 153);
  font-weight: 200;
  font-size: 15px;
  line-height: 25px;
  margin: 10px 0px;
`

export const List = styled.ul`
  margin: 0px;
  padding: 0px 15px;
`

export const Text = styled(AnimatedText)`
  color: rgb(153, 153, 153);
  font-weight: 200;
  font-size: 15px;
  line-height: 25px;
`

export const TextHeader = styled(AnimatedText)`
  text-transform: uppercase;
  margin: 30px 0px 6px;
  font-weight: 600;
  font-size: 14px;
  width: fit-content;
`

export const Details = styled.div`
  flex-basis: 100%;
  padding-left: 7%;
  margin-bottom: 5px;
`

export const Jumbotron = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const Container = styled(motion.div)``
