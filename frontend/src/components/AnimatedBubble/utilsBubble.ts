interface StyleVariant {

    bubbleBackground: string
    bubbleShadow: string

}

const primaryStyle: StyleVariant = {

    bubbleBackground: 'var(--background5-main);',
    bubbleShadow: 'var(--background2-main);',

}


const secondaryStyle: StyleVariant = {
    bubbleBackground: 'var(--background5-main);',
    bubbleShadow: 'var(--background2-main);',
}




const defaultStyle: StyleVariant = {
    bubbleBackground: 'var(--background5-main);',
    bubbleShadow: 'var(--background2-main);',
}


export const handleBubbleColor: (props: any) => {} = (props: any) => {
    let style
    switch (props.variant) {
        case 'primary':
            style = primaryStyle
            break;


        case 'secondary':
            style = secondaryStyle
            break;


        default:
            style = defaultStyle
            break;

    }
    return {
        bubbleBackground: `background-color: ${style.bubbleBackground}`,
        bubbleShadow: `shadow: ${style.bubbleShadow}`,

    }
}



