import styled from 'styled-components'

export const Gallery = styled.div`

  width: 90%;
  height: 150rem;
  display: grid;
  grid-template-rows: repeat(6, 1fr); 
  grid-template-columns: 1fr 2fr;
  margin: 20rem auto;
  gap: 0rem 10%;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const TwoTall = styled.div`
  grid-row: span 2 / auto;
`

export const ThreeTall = styled.div`
  ${({addMargin})=> addMargin && 'margin-top: 15%;'}
  grid-row: span 3 / auto;
`

