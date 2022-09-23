import { motion } from 'framer-motion'
import styled from 'styled-components'

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
  width: 60%;
  margin: 0px auto;
  object-fit: cover;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  padding: 0px 120px;
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

export const Text = styled.p`
  color: rgb(153, 153, 153);
  font-weight: 200;
  font-size: 15px;
  line-height: 25px;
`

export const TextHeader = styled.h4`
  text-transform: uppercase;
  margin: 30px 0px 6px;
  font-weight: 600;
  font-size: 14px;
  width: 45rem;
`

export const Details = styled.div`
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
