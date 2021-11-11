import styled from 'styled-components'
import { handleCardContainerColor as handleSectionColor } from '../SectionCards/utils'

export const SectionContainer = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: row;
  place-items: center;
  ${(props) => handleSectionColor(props).color}
  ${(props) => handleSectionColor(props).containerBackground}
  justify-content: center;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`

export const SectionTitle = styled.h1`
  font-size: 2rem;
`
export const SectionDescription = styled.p`
  font-size: 1.25rem;
  margin-left: 1rem;
`
