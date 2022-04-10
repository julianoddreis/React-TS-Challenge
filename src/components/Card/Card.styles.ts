import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  color: #333;
  border: solid 1px #333;
  border-radius: 5px;
`

export const CardImage = styled.div<{ image: string }>`
  width: 90%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`
