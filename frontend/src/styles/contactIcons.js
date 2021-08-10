import styled from 'styled-components'

export const IconsWrapper = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: row;
  padding-right: 0.5rem;
  &:first-child {
    margin-left: 1.25rem;
  }
`
export const IconsItem = styled.li`
  margin-right: 1rem;
  @media (max-width: 740px) {
    margin-right: 0.5rem;
  }
`
