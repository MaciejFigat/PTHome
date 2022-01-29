import styled from 'styled-components'

export const MeatballContainer = styled.div`
  position: absolute;
  top: ${(props) => (props.top ? props.top : '-62px')};
  right: ${(props) => (props.right ? props.right : '-55%')};
`
export const SvgMeatball = styled.svg``
export const MeatballBackground = styled.div`
  transform: ${(props) =>
    props.translate ? props.translate : 'translate(0px, 0%)'};
  clip-path: url(#meatballTwo);
  width: ${(props) => (props.width ? props.width : '20rem')};
  height: ${(props) => (props.height ? props.height : '20rem')};
`
export const MeatballImg = styled.img`
  object-fit: cover;
  opacity: 0.85;
  transform: ${(props) =>
    props.translate ? props.translate : 'translate(0px, 0%)'};
  clip-path: url(#meatballTwo);
  width: ${(props) => (props.width ? props.width : '20rem')};
  height: ${(props) => (props.height ? props.height : '20rem')};
  @media (max-width: 340px) {
    max-width: 95%;
  }
`

export const MeatballImgHeader = styled(MeatballImg)`
  clip-path: url(#meatballHeader);
  -webkit-clip-path: url(#meatballHeader);
`
export const MeatballImgThree = styled(MeatballImg)`
  clip-path: url(#meatballThree);
  -webkit-clip-path: url(#meatballThree);
`
export const MeatballImgFour = styled(MeatballImg)`
  clip-path: url(#meatballFour);
  -webkit-clip-path: url(#meatballFour);
`
