import styled from 'styled-components'

export const SectionContainer = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: row;
  place-items: center;
  background: var(--background1-main);
  color: var(--background5-main);
  justify-content: center;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`

export const SectionTitle = styled.h1`
  font-size: 2rem;
`
export const SectionDescription = styled.p`
  font-size: 0.75rem;
`
