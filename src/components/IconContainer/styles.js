import styled from 'styled-components'

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: fit-content;
  max-width: 375px;
`

export const Icon = styled.a`
  width: 48px;
  height: 48px;

  svg {
    transform: scale(0.8);
  }
`

export const GithubIcon = styled.a`
  width: 48px;
  height: 48px;

  svg {
    transform: scale(0.9);
  }
`
