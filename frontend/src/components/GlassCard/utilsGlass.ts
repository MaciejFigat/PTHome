interface StyleVariant {
    cardBackground: string,
    toplineColor: string
    headingColor: string
    subtitleColor: string
    backdropFilter: string
}

const primaryStyle: StyleVariant = {
    cardBackground: `rgba(250, 153, 14, 0.59);`,
    toplineColor: `var(--bluegreen4);`,
    headingColor: `var(--bluegreen4);`,
    subtitleColor: `var(--bluegreen5);`,
    backdropFilter: `blur(11px) saturate(103%);`
}

const secondaryStyle: StyleVariant = {
    cardBackground: `rgba(17, 75, 11, 0.65);`,
    // cardBackground: `rgba(17, 25, 40, 0.7);`,
    toplineColor: `var(--bluegreen3);`,
    headingColor: `var(--bluegreen8);`,
    subtitleColor: `var(--bluegreen3);`,
    backdropFilter: `blur(11px) saturate(123%);`
}
const tertiaryStyle: StyleVariant = {
    cardBackground: `rgba(173, 18, 63, 0.65);`,
    toplineColor: `var(--bluegreen3);`,
    headingColor: `var(--bluegreen10);`,
    subtitleColor: `var(--bluegreen3);`,
    backdropFilter: `blur(11px) saturate(159%);`
}

const lightStyle: StyleVariant = {
    cardBackground: `rgba(0, 194, 225, 0.31);`,
    toplineColor: `var(--bluegreen5);`,
    headingColor: `var(--bluegreen2);`,
    subtitleColor: `var(--bluegreen4);`,
    backdropFilter: `blur(11px) saturate(123%);`
}

const darkStyle: StyleVariant = {
    cardBackground: `rgba(17, 25, 40, 0.7);`,
    toplineColor: `var(--bluegreen1);`,
    headingColor: `var(--bluegreen2);`,
    subtitleColor: `var(--bluegreen1);`,
    backdropFilter: `blur(16px) saturate(180%);`
}
const superDarkStyle: StyleVariant = {
    cardBackground: `rgba(17, 25, 40, 0.75);`,
    toplineColor: `var(--redblue2);`,
    headingColor: `var(--bluegreen3);`,
    subtitleColor: `var(--bluegreen1);`,
    backdropFilter: `blur(16px) saturate(180%);`
}
const defaultStyle: StyleVariant = {
    cardBackground: `var(--bluegreen2);`,
    toplineColor: `var(--bluegreen5);`,
    headingColor: `var(--bluegreen2);`,
    subtitleColor: `var(--bluegreen4);`,
    backdropFilter: `blur(11px) saturate(123%);`
}


export const handleGlassColor: (props: any) => {} = (props: any) => {
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

        case 'dark':
            style = darkStyle
            break;

        case 'light':
            style = lightStyle
            break;

        case 'blue':
            style = lightStyle
            break;

        case 'bluegreen':
            style = lightStyle
            break;

        case 'superDark':
            style = superDarkStyle
            break;

        default:
            style = defaultStyle
            break;

    }


    return {
        cardBackground: `background-color: ${style.cardBackground}`,
        toplineColor: `color: ${style.toplineColor}`,
        headingColor: `color: ${style.headingColor}`,
        subtitleColor: `color: ${style.subtitleColor}`,
        backdropFilter: `backdrop-filter: ${style.backdropFilter}`,
        backdropFilterWebkit: `-webkit-backdrop-filter: ${style.backdropFilter}`
    }


}
