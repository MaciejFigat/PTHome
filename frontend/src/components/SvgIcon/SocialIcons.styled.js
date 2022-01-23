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
  ${(props) =>
    props.variant && props.variant === 'light'
      ? `border: 2px solid var(--bluegreen1);`
      : `border: 2px solid var(--bluegreen5);`}

  border-radius: 50%;
  margin-right: 1rem;
  padding: 0.75rem;
  width: 4vh;
  height: 4vh;
  min-width: 40px;
  min-height: 40px;
  &:hover {
    ${(props) =>
      props.variant && props.variant === 'light'
        ? `background: var(--bluegreen2);`
        : `background: var(--bluegreen8);`}
    ${(props) =>
      props.variant && props.variant === 'light'
        ? `border: 2px solid var(--bluegreen2);`
        : `border: 2px solid var(--bluegreen7);`}
  }
  @media (max-width: 360px) {
    margin-right: 0.5rem;
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
        ? `color: var(--bluegreen3);`
        : `color: var(--bluegreen5);`}

    ${IconsItemDiv}:hover & {
      ${(props) =>
        props.variant && props.variant === 'light'
          ? `color: var(--bluegreen1);`
          : `color: var(--bluegreen7);`}
    }
  }
`
