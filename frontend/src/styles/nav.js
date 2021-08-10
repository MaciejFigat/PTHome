import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: grid;
  place-items: center;
  position: sticky;
  top: 0;
  height: fit-content;
  max-width: 100%;
  background: var(--background-tertiary5);
  box-shadow: inset 6px 6px 31px #5c171c, inset -6px -6px 31px #ff5b70;
  z-index: 22;
`
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  padding: 0;
`
export const ListItem = styled.li`
  margin-right: 1rem;
  font-size: 1.75rem;
  font-weight: 700;

  @media (max-width: 740px) {
    font-size: 1rem;
    margin-right: 0.25rem;
  }
`
