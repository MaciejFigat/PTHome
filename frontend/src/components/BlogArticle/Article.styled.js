import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  color: var(--background2-main);
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
  margin: 2rem auto 3.5rem;
  margin-bottom: 1.2rem;
  font-weight: 800;
  padding: var(--padding);
  color: var(--background3-main);
`
export const ArticleSection = styled.div`
  padding: var(--padding);
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 900px;
`
