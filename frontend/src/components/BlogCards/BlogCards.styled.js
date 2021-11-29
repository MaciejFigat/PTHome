import styled from 'styled-components'

export const BlogWrapper = styled.div`
  display: grid;
  place-items: center;
`
export const BlogCardWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  place-items: center;
  /* column-gap: 0; */
  /* @media screen and (max-width: 970px) and (max-width: 1300px) {
    max-width: 100%;
  } */

  @media screen and (max-width: 470px) {
    margin-top: 1rem;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`
export const BlogCardImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  max-height: 200px;
  overflow: hidden;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
  transition: 200ms transform ease-in-out;
`

export const BlogCardContainer = styled.div`
  /* padding: var(--padding); */
  /* justify-self: last baseline; */
  width: 450px;
  max-width: 100%;
  background-color: var(--secondary2);
  color: var(--background5-main);
  border-radius: 0.25rem;
  border: 1px solid var(--background5-main);
  overflow: hidden;
  &:hover ${BlogCardImg} {
    transform: scale(1.025);
  }
  @media screen and (max-width: 470px) {
    width: 350px;
  }
`
export const CardHeader = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  padding: var(--padding);
  padding-bottom: 0;
`
export const CardBody = styled.div`
  font-size: 1rem;
  padding: 0 var(--padding) 0;
  /* padding-top: 0;
  padding-bottom: 0; */
`
export const CardFooter = styled.div`
  margin-top: 1rem;
  padding: 0 0 var(--padding) var(--padding);
  button + button {
    margin-left: 0.25rem;
  }
`
export const CardButton = styled.button`
  background-color: var(--secondary4);
  border: none;
  padding: 0.5em 0.75em;
  border-radius: 0.25em;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--secondary5);
  }
  a {
    color: inherit;
  }
`
