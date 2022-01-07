import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  color: var(--background2-main);
  @media (max-width: 880px) {
    padding-top: 1rem;
  }
`
export const ArticleImage = styled.img`
  max-width: 100%;
  max-height: 550px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
`
export const ArticleTitle = styled.h2`
  font-size: 3.4rem;
  line-height: 1.2;
  letter-spacing: -0.075rem;
  text-align: center;
  width: 80%;
  margin: 0rem auto 0.5rem;
  font-weight: 800;
  padding: var(--padding);
  color: var(--background3-main);
  @media (max-width: 880px) {
    font-size: 1.4rem;
    padding: 1.5rem;
    margin: 0;
  }
`
export const ArticleTopline = styled.h4`
  letter-spacing: 0.75px;
  margin: 1rem;
  margin-bottom: 2rem;
`
export const ArticleSection = styled.div`
  padding: var(--padding);
  font-size: 1.3rem;
  line-height: 1.9;
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 900px;
  @media (max-width: 880px) {
    padding: 1rem;
    margin-top: 1rem;
  }
`
