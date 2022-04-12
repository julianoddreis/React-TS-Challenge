import styled from 'styled-components'

export const MovieContainer = styled.div``

export const Title = styled.h1`
  font-weight: lighter;
`

export const Banner = styled.div<{ image: string }>`
  width: 90%;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: lighter;
`

export const Date = styled.p`
  font-size: 14px;
  font-weight: bold;
`
