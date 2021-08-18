import styled from 'styled-components'

export const IconsWrapper = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  justify-content: center;
  flex-direction: row;
`
export const IconsItem = styled.li`
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--background4-main);
  @media (max-width: 1020px) {
    margin-right: 0.75rem;
    &:last-child {
      margin-right: 0rem;
    }
  }
`
