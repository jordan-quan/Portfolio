import styled from 'styled-components'
import {COLORS} from 'constants/colors'

export const AbilityWrapper = styled.div`
  width: clamp(80rem, 70%, 100rem);
  padding: 5rem 0rem;
	background: white;
	box-shadow: 0rem 0rem 10rem -2.0rem #3395ff2b;
	border-radius: 0.5rem;
  margin: auto;
  margin-bottom: 4rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;


  h4 {
    color: ${COLORS.main};
  }

  ul{
    list-style: none;
    padding: 0rem;
    margin: 1rem auto;
  }

`
export const ColumnWrapper = styled.div`
  text-align: center;

  display: grid;
  grid-auto-rows: 1fr 1fr;

  padding: 2rem 4rem;
  ${({border}) => border && 'border-left: 0.2rem solid #e5e5e5;'}
`

export const Header = styled.div``

export const IconWrapper = styled.div`
  color: ${COLORS.main};
  font-size: 7.5rem;
  height: 6.5rem;
`

export const List = styled.div``