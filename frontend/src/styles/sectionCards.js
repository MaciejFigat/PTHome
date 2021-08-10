import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: center;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`
export const Card = styled.div`
  /* background: var(--background-tertiary3); */
  background: linear-gradient(145deg, #3564ca, #3f77f0);
  box-shadow: 6px 6px 12px #2d55ac, -6px -6px 12px #4989ff;
  height: 400px;
  width: 360px;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.55rem;
  @media (max-width: 880px) {
    max-width: 84vw;
    padding: 0.75rem;
    margin: 0.5rem;
  }
`
export const CardTitle = styled.h1`
  font-size: 2rem;
`
export const CardContent = styled.p`
  font-size: 1.25rem;
`
