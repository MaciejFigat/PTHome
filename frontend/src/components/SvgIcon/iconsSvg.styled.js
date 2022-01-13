import styled from 'styled-components'

export const IconsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;

  a {
    color: var(--bluegreen3);
    &:hover {
      color: var(--bluegreen1);
    }
  }
`
export const IconsItem = styled.li`
  margin-right: 1rem;
  padding: 0;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bluegreen3);
  @media (max-width: 1020px) {
    margin-right: 0.75rem;
    &:last-child {
      margin-right: 0rem;
    }
  }
  &:hover {
    color: var(--bluegreen1);
  }
`
