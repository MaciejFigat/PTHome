interface StyleVariant {
    buttonColor: string
    buttonBackground: string
    buttonBackgroundHover: string
    buttonColorHover: string
    buttonBorder?: string
    buttonBorderHover?: string
    buttonColorActive?: string
    buttonBorderActive?: string
}


// --background - secondary1:
// --background - success1:
// --background - quaternary1:
// --background - info1:
// --background - info7:

const primaryStyle: StyleVariant = {
    buttonColor: 'var(--background5-main);',
    buttonBackground: 'var(--background2-main);',
    buttonBackgroundHover: 'var(--background4-main);',
    buttonColorHover: 'var(--background1-main);'
}
const primaryEmptyStyle: StyleVariant = {
    buttonColor: 'var(--background-tertiary3);',
    buttonBackground: 'transparent;',
    buttonBackgroundHover: 'transparent;',
    buttonColorHover: 'var(--background-secondary4);',
    buttonBorder: '2px solid var(--background-tertiary3);',
    buttonBorderHover: '2px solid var(--background-tertiary4);',
    buttonColorActive: 'var(--background-secondary2);',
    buttonBorderActive: 'var(--background-secondary2);'
}


const secondaryStyle: StyleVariant = {
    buttonColor: 'var(--secondary4);',
    buttonBackground: 'var(--secondary1);',
    buttonBackgroundHover: 'var(--secondary2);',
    buttonColorHover: 'var(--secondary1);'

}
const secondaryEmptyStyle: StyleVariant = {
    buttonColor: 'var(--secondary4);',
    buttonBackground: 'transparent;',
    buttonBorder: '2px solid var(--secondary4);',
    buttonBorderHover: '2px solid var(--secondary5);',
    buttonBackgroundHover: 'transparent;',
    buttonColorHover: 'var(--secondary5);',
    buttonColorActive: 'var(--secondary4);',
    buttonBorderActive: 'var(--secondary4);'

}

const successStyle: StyleVariant = {
    buttonColor: 'var(--background-tertiary4);',
    buttonBackground: 'var(--success1);',
    buttonBackgroundHover: 'var(--success2);',
    buttonColorHover: 'var(--background-tertiary1);'
}
const infoStyle: StyleVariant = {
    buttonColor: 'var(--background-blue1);',
    buttonBackground: 'var(--background-blue6);',
    buttonBackgroundHover: 'var(--background-blue7);',
    buttonColorHover: 'var(--background-blue5);'
}
const dangerStyle: StyleVariant = {
    buttonColor: 'var(--background-tertiary4);',
    buttonBackground: 'var(--background-tertiary5);',
    buttonBackgroundHover: 'var(--background-tertiary4);',
    buttonColorHover: 'var(--background-tertiary1);'
}
const defaultStyle: StyleVariant = {
    buttonColor: 'var(--background-tertiary4);',
    buttonBackground: 'var(--background-tertiary5);',
    buttonBackgroundHover: 'var(--background-tertiary4);',
    buttonColorHover: 'var(--background-tertiary1);'
}


export const handleButtonColor: (props: any) => {} = (props: any) => {
    let style
    switch (props.variant) {
        case 'primary':
            style = primaryStyle
            break;
        case 'primaryEmpty':
            style = primaryEmptyStyle
            break;
        case 'secondaryEmpty':
            style = secondaryEmptyStyle
            break;

        case 'secondary':
            style = secondaryStyle
            break;

        case 'success':
            style = successStyle
            break;

        case 'info':
            style = infoStyle
            break;

        case 'danger':
            style = dangerStyle
            break;

        default:
            style = defaultStyle
            break;

    }
    return {

        buttonColor: `color: ${style.buttonColor}`,
        buttonBackground: `background-color: ${style.buttonBackground}`,
        buttonBackgroundHover: `background-color: ${style.buttonBackgroundHover}`,
        buttonColorHover: `color: ${style.buttonColorHover}`,
        buttonBorder: `border: ${style.buttonBorder}`,
        buttonBorderHover: `border: ${style.buttonBorderHover}`,
        buttonColorActive: `color: ${style.buttonColorActive}`,
        buttonBorderActive: `border: 2px solid ${style.buttonBorderActive}`
    }
}



