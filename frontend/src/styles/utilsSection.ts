interface StyleVariant {
    sectionBackground: string
    color: string
    subtitleColor: string
    headingColor: string
    toplineColor: string
    buttonColor: string
    buttonBackground: string
    buttonBackgroundHover: string
    buttonColorHover: string
}


// --background - secondary1:
// --background - tertiary1:
// --background - quaternary1:
// --background - blue1:
// --background - blue7:

export const primaryStyle: StyleVariant = {
    sectionBackground: `var(--background1-main);`,
    color: `var(--background5-main);`,
    subtitleColor: 'var(--background5-main);',
    headingColor: 'var(--background5-main);',
    toplineColor: 'var(--background5-main);',
    buttonColor: 'var(--background5-main);',
    buttonBackground: 'var(--background1-main);',
    buttonBackgroundHover: 'var(--background2-main);',
    buttonColorHover: 'var(--background2-main);'
}


export const secondaryStyle: StyleVariant = {
    sectionBackground: `var(--secondary3);`,
    color: `var(--background1-main);`,
    subtitleColor: 'var(--secondary1);',
    headingColor: 'var(--secondary5);',
    toplineColor: 'var(--secondary2);',
    buttonColor: 'var(--secondary4);',
    buttonBackground: 'var(--secondary1);',
    buttonBackgroundHover: 'var(--secondary2);',
    buttonColorHover: 'var(--secondary1);'

}

export const tertiaryStyle: StyleVariant = {
    sectionBackground: `var(--background-tertiary1);`,
    color: `var(--background-tertiary2);`,
    subtitleColor: 'var(--background-tertiary4);',
    headingColor: 'var(--background-tertiary5);',
    toplineColor: 'var(--background-tertiary3);',
    buttonColor: 'var(--background-tertiary4);',
    buttonBackground: 'var(--background-tertiary5);',
    buttonBackgroundHover: 'var(--background-tertiary4);',
    buttonColorHover: 'var(--background-tertiary1);'
}
export const blueStyle: StyleVariant = {
    sectionBackground: `var(--background-blue1);`,
    color: `var(--background-blue2);`,
    subtitleColor: 'var(--background-blue5);',
    headingColor: 'var(--background-blue6);',
    toplineColor: 'var(--background-blue4);',
    buttonColor: 'var(--background-blue1);',
    buttonBackground: 'var(--background-blue6);',
    buttonBackgroundHover: 'var(--background-blue7);',
    buttonColorHover: 'var(--background-blue5);'
}


export const handleSectionColor: (props: any) => {} = (props: any) => {
    switch (props.variant) {
        case 'primary':
            return {

                color: `color: ${primaryStyle.color}`,
                sectionBackground: `background-color: ${primaryStyle.sectionBackground}`,
                subtitleColor: `color: ${primaryStyle.subtitleColor}`,
                headingColor: `color: ${primaryStyle.headingColor}`,
                toplineColor: `color: ${primaryStyle.toplineColor}`,
                buttonColor: `color: ${primaryStyle.buttonColor}`,
                buttonBackground: `background-color: ${primaryStyle.buttonBackground}`,
                buttonBackgroundHover: `background-color: ${primaryStyle.buttonBackgroundHover}`,
                buttonColorHover: `color: ${primaryStyle.buttonColorHover}`,
            }
        case 'secondary':
            return {
                color: `color: ${secondaryStyle.color}`,
                sectionBackground: `background-color: ${secondaryStyle.sectionBackground}`,
                subtitleColor: `color: ${secondaryStyle.subtitleColor}`,
                headingColor: `color: ${secondaryStyle.headingColor}`,
                toplineColor: `color: ${secondaryStyle.toplineColor}`,
                buttonColor: `color: ${secondaryStyle.buttonColor}`,
                buttonBackground: `background-color: ${secondaryStyle.buttonBackground}`,
                buttonBackgroundHover: `background-color: ${secondaryStyle.buttonBackgroundHover}`,
                buttonColorHover: `color: ${secondaryStyle.buttonColorHover}`,


            }
        case 'tertiary':
            return {
                color: `color: ${tertiaryStyle.color}`,
                sectionBackground: `background-color: ${tertiaryStyle.sectionBackground}`,
                subtitleColor: `color: ${tertiaryStyle.subtitleColor}`,
                headingColor: `color: ${tertiaryStyle.headingColor}`,
                toplineColor: `color: ${tertiaryStyle.toplineColor}`,
                buttonColor: `color: ${tertiaryStyle.buttonColor}`,
                buttonBackground: `background-color: ${tertiaryStyle.buttonBackground}`,
                buttonBackgroundHover: `background-color: ${tertiaryStyle.buttonBackgroundHover}`,
                buttonColorHover: `color: ${tertiaryStyle.buttonColorHover}`,


            }
        case 'blue':
            return {
                color: `color: ${blueStyle.color}`,
                sectionBackground: `background-color: ${blueStyle.sectionBackground}`,
                subtitleColor: `color: ${blueStyle.subtitleColor}`,
                headingColor: `color: ${blueStyle.headingColor}`,
                toplineColor: `color: ${blueStyle.toplineColor}`,
                buttonColor: `color: ${blueStyle.buttonColor}`,
                buttonBackground: `background-color: ${blueStyle.buttonBackground}`,
                buttonBackgroundHover: `background-color: ${blueStyle.buttonBackgroundHover}`,
                buttonColorHover: `color: ${blueStyle.buttonColorHover}`,


            }

        default:
            return {
                color: `color: var(--background5-main);`,
                sectionBackground: `background-color: var(--background1-main);`,
                subtitleColor: `color: var(--background5-main);`,
                headingColor: `color: var(--background4-main);`,
                toplineColor: `color: var(--background3-main);`,
                buttonColor: `color: var(--background2-main);`,
                buttonBackground: `background-color: var(--background4-main);`,
                buttonBackgroundHover: `background-color: var(--background1-main);`,
                buttonColorHover: `color: var(--background1-main);`,
            }
    }
}
