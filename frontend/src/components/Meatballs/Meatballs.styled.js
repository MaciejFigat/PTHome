import styled from 'styled-components'

export const MeatballContainer = styled.div`
  /* position: relative; */
  position: absolute;
  top: -72px;
  right: -10%;
`
export const SvgMeatball = styled.svg``
export const MeatballImg = styled.img`
  object-fit: cover;
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
