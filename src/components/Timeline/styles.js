import styled from 'styled-components'

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div``
export const Header = styled.div`
  position: relative;
  // border-bottom: 1px solid #dbdbdb;
  width: 100%;
  height: 28rem;
`

export const HeaderContent = styled.div`
  position: absolute;
  top: 30%;
  left: 12%;
  flex-direction: column;
  font-size: 20px;
  color: #363636;
`

export const Title = styled.h1`
  text-transform: lowercase;
  font-size: 40px;
  font-weight: 600;
  margin: 7px 0px 15px 0px;
`

export const Subtitle = styled.h4`
  font-weight: 200;
  font-size: 16px;
`

export const Gallery = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
`

export const LineWrapper = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 10rem;
  z-index: 5;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
