import styled from 'styled-components'

export const MeatballContainer = styled.div`
  /* position: relative; */
  position: absolute;
  /* top: -62px;
  right: -55%; */
  top: ${(props) => (props.top ? props.top : '-62px')};
  right: ${(props) => (props.right ? props.right : '-55%')};
`
export const SvgMeatball = styled.svg``
export const MeatballImg = styled.img`
  object-fit: cover;
  /* transform: translate(120px, 50%); */
  transform: ${(props) =>
    props.translate ? props.translate : 'translate(0px, 0%)'};
  clip-path: url(#meatballTwo);
  width: ${(props) => (props.width ? props.width : '20rem')};
  height: ${(props) => (props.height ? props.height : '20rem')};
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
