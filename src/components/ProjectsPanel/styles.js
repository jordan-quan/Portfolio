import styled from 'styled-components'

export const Cards = styled.div`
  display: flex;
  width: 85%;
  flex-wrap: nowrap;
  margin: 0px auto;
  max-width: 1500px;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`

export const Card = styled.div`
  height: 56rem;
  width: 100%;
  margin: 15px;
  @media (max-width: 1024px) {
    flex: 1;
    flex-basis: 40%;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 12rem auto;
  gap: 0rem 10%;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HeaderContent = styled.div`
  margin: 0px auto;
  margin-bottom: 7rem;
  flex-direction: column;
  font-size: 20px;
  color: #363636;
  text-align: center;
`

export const Title = styled.h1`
  // text-transform: lowercase;
  font-size: 40px;
  font-weight: 600;
  margin: 7px 0px 15px 0px;
`

export const Subtitle = styled.h4`
  font-weight: 200;
  font-size: 16px;
`
