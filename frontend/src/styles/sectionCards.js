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
  /* for color #A2A1A6 */
  background: linear-gradient(145deg, #adacb2, #929195);
  box-shadow: 6px 6px 12px #7b7a7e, -6px -6px 12px #c9c8ce;
  color: var(--background1-main);
  height: 400px;
  width: 360px;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.55rem;
  transition: 0.3s;
  &:hover {
    box-shadow: 15px 15px 30px #7b7a7e, -15px -15px 30px #c9c8ce;
    transition: 0.3s;
  }
  @media (max-width: 880px) {
    max-width: 84vw;
    padding: 0.75rem;
    margin: 0.5rem;
  }
`
export const CardSecondary = styled.div`
  /* for color #A2A1A6 */
  background: linear-gradient(145deg, #adacb2, #929195);
  box-shadow: 6px 6px 12px #7b7a7e, -6px -6px 12px #c9c8ce;
  color: var(--background1-main);
  height: 400px;
  width: 360px;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.55rem;
  transition: 0.3s;
  &:hover {
    box-shadow: 15px 15px 30px #7b7a7e, -15px -15px 30px #c9c8ce;
    transition: 0.3s;
  }
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
