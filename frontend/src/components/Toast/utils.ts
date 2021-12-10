interface StyleVariant {
    toastColor: string
    toastBackground: string
}

export const handlePosition: (position: string) => string | undefined = (position) => {
    if (position === 'show') {
        return `top: 200px;
      right: 100px;
      @media (max-width: 1010px) {
        top: 60px;
        right: 10px;
      }`
    } else if (position === 'hide') {
        return `top: 200px;
      right: 100px;
      transform: translateX(300px);
      @media (max-width: 1010px) {
        top: 60px;
        right: 100px;
        transform: translateX(300px);
      }`
    }
}
const successStyle: StyleVariant = {
    toastColor: 'var(--background-tertiary4);',
    toastBackground: 'var(--success1);',

}
const infoStyle: StyleVariant = {
    toastColor: 'var(--background-blue1);',
    toastBackground: 'var(--background-blue6);',

}
const dangerStyle: StyleVariant = {
    toastColor: 'var(--background-tertiary4);',
    toastBackground: 'var(--background-tertiary5);',

}
const warningStyle: StyleVariant = {
    toastColor: 'var(--background-tertiary3);',
    toastBackground: 'var(--background-tertiary5);',

}
const noneStyle: StyleVariant = {
    toastColor: 'var(--background-tertiary3);',
    toastBackground: 'none;',

}

export const handleToastColor: (props: any) => {} = (props: any) => {
    let style
    switch (props) {

        case 'success':
            style = successStyle
            break;

        case 'info':
            style = infoStyle
            break;

        case 'danger':
            style = dangerStyle
            break;

        case 'warning':
            style = warningStyle
            break;

        case 'none':
            style = noneStyle
            break;

        default:
            style = infoStyle
            break;

    }
    return {
        toastColor: `color: ${style.toastColor}`,
        toastBackground: `background-color: ${style.toastBackground}`,

    }
}
