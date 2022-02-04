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

}
const tertiaryStyle: StyleVariant = {
    bubbleBackground: `radial-gradient(circle at 100%, var(--background-blue1), var(--background-blue2) 50%, var(--bluegreen1) 75%, var(--bluegreen1) 75%);`,
    bubbleShadow: `inset -10px -10px 50px var(--background-blue3), inset -10px -10px 30px var(--background-blue6), 10px 10px 20px var(--background-blue6), inset 0px 0px 10px var(--background-blue1);`,
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



