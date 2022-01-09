import styled from 'styled-components'

export const CardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px auto;
  max-width: 80%;
`

export const CardH2 = styled.h2`
  margin: 0px 0px 1.45rem;
  padding: 0px;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizelegibility;
  font-size: 1.62671rem;
  line-height: 1.1;
`
export const CardImage2 = styled.img`
  object-fit: contain !important;
`

export const CardP = styled.p`
  /* color: rgb(135, 135, 135); */
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1.6;
  color: rgb(247, 78, 161);
  margin-bottom: 1.5rem;
`
export const CardImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  opacity: 1;
  transition: opacity 500ms ease 0s;
  font-family: 'object-fit: cover; object-position: 50% 50%';
`
