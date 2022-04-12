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
  cursor: pointer;
`

export const CardImage = styled.div<{ image: string }>`
  width: 90%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`

export const Date = styled.p`
  font-size: 14px;
`

export const Average = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`
