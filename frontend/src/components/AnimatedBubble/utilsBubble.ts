interface StyleVariant {
    bubbleBackground: string
    bubbleShadow: string
}

const primaryStyle: StyleVariant = {
    bubbleBackground: `radial-gradient(ellipse at top, var(--bluegreen1), transparent),
    radial-gradient(ellipse at bottom, var(--bluegreen5), transparent);`,
    bubbleShadow: `inset -10px -10px 100px var(--bluegreen5),
    10px 10px 20px var(--bluegreen5), inset 0px 0px 10px var(--bluegreen5);`,

}


const secondaryStyle: StyleVariant = {
    bubbleBackground: `radial-gradient(ellipse at top, var(--bluegreen1), transparent),
    radial-gradient(ellipse at bottom, var(--bluegreen11), transparent);`,
    bubbleShadow: `inset -10px -10px 30px var(--bluegreen7),
    10px 10px 20px var(--bluegreen7), inset 0px 0px 10px var(--bluegreen11);`,
    // bubbleShadow: `inset -10px -10px 100px var(--bluegreen7),
    // 10px 10px 20px var(--background7-main), inset 0px 0px 10px var(--background7-main);`,

    // bubbleShadow: `none`,
}
const tertiaryStyle: StyleVariant = {
    bubbleBackground: `radial-gradient(circle at 100%, var(--bluegreen10), var(--bluegreen10) 50%, var(--bluegreen10) 75%, var(--bluegreen10) 75%);`,
    bubbleShadow: `inset -10px -10px 100px var(--bluegreen10),
    10px 10px 20px var(--background3-main), inset 0px 0px 10px var(--background2-main);`,
}




const defaultStyle: StyleVariant = {
    bubbleBackground: 'none;',
    bubbleShadow: 'none;',

}
// closest-side, - for radiant gradient
// background: radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%);
// background: radial-gradient(ellipse at top, #e66465, transparent),
//             radial-gradient(ellipse at bottom, #4d9f0c, transparent);

export const handleBubbleColor: (props: any) => {} = (props: any) => {
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


        default:
            style = defaultStyle
            break;

    }
    return {
        bubbleBackground: `background: ${style.bubbleBackground}`,
        bubbleShadow: `box-shadow: ${style.bubbleShadow}`,

    }
}



