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

const primaryStyle: StyleVariant = {

    sectionBackground: `var(--background1-main);`,
    color: `var(--background5-main);`,
    subtitleColor: 'var(--background5-main);',
    headingColor: 'var(--background5-main);',
    toplineColor: 'var(--background5-main);',
    buttonColor: 'var(--background5-main);',
    buttonBackground: 'var(--background2-main);',
    buttonBackgroundHover: 'var(--background4-main);',
    buttonColorHover: 'var(--background1-main);'
}


const secondaryStyle: StyleVariant = {

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

const tertiaryStyle: StyleVariant = {

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
const blueStyle: StyleVariant = {

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
const defaultStyle: StyleVariant = {

    color: `color: var(--background-quaternary5);`,
    sectionBackground: `background-color: var(--background-blue5);`,
    // sectionBackground: `background-color: var(--background-quaternary2);`,
    subtitleColor: `color: var(--background-quaternary1);`,
    headingColor: `color: var(--background-quaternary1);`,
    toplineColor: `color: var(--background-quaternary1);`,
    buttonColor: `color: var(--background-quaternary2);`,
    buttonBackground: `background-color: var(--background-quaternary4);`,
    buttonBackgroundHover: `background-color: var(--background-quaternary3);`,
    buttonColorHover: `color: var(--background-quaternary1);`
}


export const handleSectionColor: (props: any) => {} = (props: any) => {
    let style
    switch (props.variant) {
        case 'primary':
            style = primaryStyle
            break;

        case 'secondary':
            style = secondaryStyle
            break;

        case 'tertiary':
            style = tertiaryStyle
            break;

        case 'blue':
            style = blueStyle
            break;

        default:
            style = defaultStyle
            break;

    }
    return {
        color: `color: ${style.color}`,
        sectionBackground: `background-color: ${style.sectionBackground}`,
        subtitleColor: `color: ${style.subtitleColor}`,
        headingColor: `color: ${style.headingColor}`,
        toplineColor: `color: ${style.toplineColor}`,
        buttonColor: `color: ${style.buttonColor}`,
        buttonBackground: `background-color: ${style.buttonBackground}`,
        buttonBackgroundHover: `background-color: ${style.buttonBackgroundHover}`,
        buttonColorHover: `color: ${style.buttonColorHover}`,
    }
}



