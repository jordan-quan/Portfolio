import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Back = styled(Link)`
  position: absolute;
  top: 10px;
  left: 52px;
  letter-spacing: -2px;
  text-decoration: none;
  text-transform: lowercase;
  font-size: 55px;
  font-weight: 300;
  color: rgb(153, 153, 153);
`

export const BackWrapper = styled.div`
  position: fixed;
  z-index: 1000;
`
