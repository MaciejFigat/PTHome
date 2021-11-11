import styled from 'styled-components'
import { handleCardContainerColor } from './utils'

/* Secondary Card styling */
export const CardContainer = styled.div`
  min-height: 100vh;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: center;
  justify-content: center;
  ${(props) => handleCardContainerColor(props).containerBackground}
`

export const Card = styled.div`
  ${(props) => handleCardContainerColor(props).color}
  ${(props) => handleCardContainerColor(props).background}
  ${(props) => handleCardContainerColor(props).boxShadow}
  height: 400px;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.55rem;
  transition: 0.3s;
  &:hover {
    ${(props) => handleCardContainerColor(props).boxShadowHover}
    transition: 0.3s;
  }

  @media (max-width: 880px) {
    max-width: 84vw;
    padding: 0.75rem;
    margin: 0.5rem;
    &:hover {
      ${(props) => handleCardContainerColor(props).boxShadow}
    }
  }
`

export const CardTitle = styled.h1`
  font-size: 2rem;
  @media (max-width: 880px) {
    font-size: 1.25rem;
  }
`
export const CardContent = styled.p`
  font-size: 1.25rem;
  @media (max-width: 880px) {
    font-size: 0.95rem;
  }
`
