import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
`
export const Footer = styled.div`
  background: black;
  height: 400px;
  padding-top: 10px;
`

export const Line = styled.div`
  margin: 0px 100px;
  border-bottom: solid #e9e9e9 0.5px;
`

export const FooterText = styled.h1`
  font-weight: 600;
  text-transform: lowercase;
  font-size: 32px;
  display: block;
  color: white;
  margin: 100px auto;
  width: fit-content;
`

export const ColorText = styled(Link)`
  color: #5a64bd;
  text-decoration: underline;
  text-underline-offset: 5px;
`

export const FooterLinks = styled.div`
  margin-top: 50px;
  position: relative;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 13px;
  color: white;
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
  color: white;
`
