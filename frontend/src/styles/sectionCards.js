import styled from 'styled-components'
/* Light Card styling */
export const CardContainer = styled.div`
  height: fit-content;
  place-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-content: center;
`
// light card
export const Card = styled.div`
  height: 400px;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.55rem;
  transition: 0.3s;
  /* for color #A2A1A6 */
  background: linear-gradient(145deg, #adacb2, #929195);
  box-shadow: 6px 6px 12px #7b7a7e, -6px -6px 12px #c9c8ce;
  color: var(--background1-main);
  &:hover {
    box-shadow: 15px 15px 30px #7b7a7e, -15px -15px 30px #c9c8ce;
    transition: 0.3s;
  }
  @media (max-width: 880px) {
    max-width: 84vw;
    padding: 0.75rem;
    margin: 0.5rem;
    &:hover {
      box-shadow: 6px 6px 12px #7b7a7e, -6px -6px 12px #c9c8ce;
    }
  }
`
/* Dark Card styling */
export const CardContainerDark = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  background-color: var(--background1-main);
  justify-content: center;
  @media (max-width: 880px) {
    display: grid;
    grid-template-columns: none;
  }
`
export const CardDark = styled.div`
  /* for color #1E1E1F */
  background: linear-gradient(145deg, #1b1b1c, #202021);
  box-shadow: 5px 5px 10px #131313, -5px -5px 10px #29292b;
  color: var(--background4-main);
  height: 400px;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.55rem;
  transition: 0.3s;
  &:hover {
    box-shadow: 10px 10px 20px #131313, -10px -10px 20px #29292b;
    transition: 0.3s;
  }
  @media (max-width: 880px) {
    max-width: 84vw;
    padding: 0.75rem;
    margin: 0.5rem;
    &:hover {
      box-shadow: 5px 5px 10px #131313, -5px -5px 10px #29292b;
    }
  }
`
/* Primary Card styling */
export const CardContainerPrimary = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  background-color: var(--background2-main);
  justify-content: center;
`

export const CardPrimary = styled.div`
  /* for color #3C3B3D */
  background: linear-gradient(145deg, #363537, #403f41);
  box-shadow: 5px 5px 10px #2b2a2b, -5px -5px 10px #4d4c4f;
  color: var(--background5-main);
  height: 400px;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.55rem;
  transition: 0.3s;
  &:hover {
    box-shadow: 10px 10px 20px #2b2a2b, -10px -10px 20px #4d4c4f;
    transition: 0.3s;
  }
  @media (max-width: 880px) {
    max-width: 84vw;
    padding: 0.75rem;
    margin: 0.5rem;
    &:hover {
      box-shadow: 5px 5px 10px #2b2a2b, -5px -5px 10px #4d4c4f;
    }
  }
`
/*variables for styling */
const primaryStyle = {
  background: `linear-gradient(145deg, #363537, #403f41);`,
  boxShadow: `5px 5px 10px #2b2a2b, -5px -5px 10px #4d4c4f;`,
  boxShadowHover: `5px 5px 10px #2b2a2b, -5px -5px 10px #4d4c4f;`,
  color: `var(--background5-main);`,
  cardBackground: `var(--background2-main);`,
}
const secondaryStyle = {
  background: `var(--background5-main);`,
  boxShadow: `inset 5px 5px 10px #9a999d, inset -5px -5px 10px #fcf9ff;`,
  boxShadowHover: `inset 16px 16px 32px #9e9da1, inset -16px -16px 32px #f8f5fd;`,
  color: `var(--background1-main);`,
  cardBackground: `var(--background5-main);`,
}
const lightStyle = {
  background: `linear-gradient(145deg, #adacb2, #929195);`,
  boxShadow: `6px 6px 12px #7b7a7e, -6px -6px 12px #c9c8ce;`,
  boxShadowHover: `15px 15px 30px #7b7a7e, -15px -15px 30px #c9c8ce;`,
  color: `var(--background1-main);`,
  cardBackground: `var(--background4-main);`,
}
const darkStyle = {
  background: `linear-gradient(145deg, #1b1b1c, #202021);`,
  boxShadow: `5px 5px 10px #131313, -5px -5px 10px #29292b;`,
  boxShadowHover: `5px 5px 10px #131313, -5px -5px 10px #29292b;`,
  color: `var(--background1-main);`,
  cardBackground: `var(--background4-main);`,
}

const handleCardContainerColor = (props) => {
  switch (props.variant) {
    case 'primary':
      return `background-color: ${primaryStyle.cardBackground}`
    case 'secondary':
      return `background-color: ${secondaryStyle.cardBackground}`
    case 'dark':
      return `background-color: ${darkStyle.cardBackground}`
    case 'light':
      return `background-color: ${lightStyle.cardBackground}`
    default:
      return 'background-color: red'
  }
}

/* Secondary Card styling */
export const CardContainerSecondary = styled.div`
  min-height: 100vh;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: center;
  justify-content: center;
  /*checking if switch will work  */
  ${(props) => handleCardContainerColor(props)}
`

export const CardSecondary = styled.div`
  /* for color #CBC9CF */
  /* background: var(--background5-main);
  box-shadow: inset 5px 5px 10px #9a999d, inset -5px -5px 10px #fcf9ff;
  color: var(--background1-main); */

  background: ${(props) =>
    props.variant === 'primary'
      ? primaryStyle.background
      : secondaryStyle.background};
  box-shadow: ${(props) =>
    props.variant === 'primary'
      ? primaryStyle.boxShadow
      : secondaryStyle.boxShadow};
  color: ${(props) =>
    props.variant === 'primary' ? primaryStyle.color : secondaryStyle.color};
  height: 400px;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.55rem;
  transition: 0.3s;
  &:hover {
    box-shadow: inset 16px 16px 32px #9e9da1, inset -16px -16px 32px #f8f5fd;
    transition: 0.3s;
  }

  @media (max-width: 880px) {
    max-width: 84vw;
    padding: 0.75rem;
    margin: 0.5rem;
    &:hover {
      box-shadow: inset 5px 5px 10px #9a999d, inset -5px -5px 10px #fcf9ff;
    }
  }
`

export const CardTitle = styled.h1`
  font-size: 2rem;
  @media (max-width: 880px) {
    font-size: 1.25rem;
  }
`
export const CardContent = styled.p`
  font-size: 1.25rem;
  @media (max-width: 880px) {
    font-size: 0.95rem;
  }
`
