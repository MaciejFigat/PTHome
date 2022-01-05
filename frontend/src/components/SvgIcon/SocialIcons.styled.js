import styled from 'styled-components'

export const IconsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: left;
  flex-direction: row;
  font-size: 1.8rem;
  min-width: fit-content;
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`
export const IconsItemDiv = styled.div`
  border: 1px solid var(--background-tertiary1);
  border-radius: 50%;
  margin-right: 1rem;
  padding: 0.75rem;
  width: 4vh;
  height: 4vh;
  min-width: 40px;
  min-height: 40px;
  &:hover {
    background: var(--background-tertiary2);
  }
`

export const IconsItem = styled.li`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  a {
    ${(props) =>
      props.variant && props.variant === 'light'
        ? `color: var(--background-tertiary3);`
        : `color: var(--background-tertiary2);`}
    /* color: var(--background-tertiary2); */
    ${IconsItemDiv}:hover & {
      color: var(--background-tertiary4) !important;
    }
  }
`
