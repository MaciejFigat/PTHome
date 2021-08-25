/*variables for styling */
/* for color #3C3B3D */

interface StyleVariant {
  background: string
  boxShadow: string
  boxShadowHover: string
  color: string
  containerBackground: string
}

export const primaryStyle: StyleVariant = {
  background: `linear-gradient(145deg, #363537, #403f41);`,
  boxShadow: `5px 5px 10px #2b2a2b, -5px -5px 10px #4d4c4f;`,
  boxShadowHover: `10px 10px 20px #2b2a2b, -10px -10px 20px #4d4c4f;`,
  color: `var(--background5-main);`,
  containerBackground: `var(--background2-main);`,
}

/* for color #CBC9CF */
export const secondaryStyle: StyleVariant = {
  background: `var(--background5-main);`,
  boxShadow: `inset 5px 5px 10px #9a999d, inset -5px -5px 10px #fcf9ff;`,
  boxShadowHover: `inset 16px 16px 32px #9e9da1, inset -16px -16px 32px #f8f5fd;`,
  color: `var(--background1-main);`,
  containerBackground: `var(--background5-main);`,
}
/* for color #A2A1A6 */
export const lightStyle: StyleVariant = {
  background: `linear-gradient(145deg, #adacb2, #929195);`,
  boxShadow: `6px 6px 12px #7b7a7e, -6px -6px 12px #c9c8ce;`,
  boxShadowHover: `15px 15px 30px #7b7a7e, -15px -15px 30px #c9c8ce;`,
  color: `var(--background1-main);`,
  containerBackground: `var(--background4-main);`,
}
/* for color #1E1E1F */
export const darkStyle: StyleVariant = {
  background: `linear-gradient(145deg, #1b1b1c, #202021);`,
  boxShadow: `5px 5px 10px #131313, -5px -5px 10px #29292b;`,
  boxShadowHover: `10px 10px 20px #131313, -10px -10px 20px #29292b;`,
  color: `var(--background4-main);`,
  containerBackground: `var(--background1-main);`,
}

export const handleCardContainerColor: (props: any) => {} = (props: any) => {
  switch (props.variant) {
    case 'primary':
      return {
        containerBackground: `background-color: ${primaryStyle.containerBackground}`,
        boxShadow: `box-shadow: ${primaryStyle.boxShadow}`,
        boxShadowHover: `box-shadow: ${primaryStyle.boxShadowHover}`,
        color: `color: ${primaryStyle.color}`,
        cardBackground: `background-color: ${primaryStyle.background}`,
      }
    case 'secondary':
      return {
        containerBackground: `background-color: ${secondaryStyle.containerBackground}`,
        boxShadow: `box-shadow: ${secondaryStyle.boxShadow}`,
        boxShadowHover: `box-shadow: ${secondaryStyle.boxShadowHover}`,
        color: `color: ${secondaryStyle.color}`,
        cardBackground: `background-color: ${secondaryStyle.background}`,
      }
    case 'dark':
      return {
        containerBackground: `background-color: ${darkStyle.containerBackground}`,
        boxShadow: `box-shadow: ${darkStyle.boxShadow}`,
        boxShadowHover: `box-shadow: ${darkStyle.boxShadowHover}`,
        color: `color: ${darkStyle.color}`,
        cardBackground: `background-color: ${darkStyle.background}`,
      }
    case 'light':
      return {
        containerBackground: `background-color: ${lightStyle.containerBackground}`,
        boxShadow: `box-shadow: ${lightStyle.boxShadow}`,
        boxShadowHover: `box-shadow: ${lightStyle.boxShadowHover}`,
        color: `color: ${lightStyle.color}`,
        cardBackground: `background-color: ${lightStyle.background}`,
      }
    default:
      return {
        containerBackground: `red;`,
        boxShadow: `green;`,
        boxShadowHover: `limegreen;`,
        color: `brown;`,
        cardBackground: `grey;`,
      }
  }
}
