import styled from 'styled-components'

export const MeatballContainer = styled.div`
  /* position: relative; */
  /* top: 140px; */
  /* right: -80%; */
`
export const SvgMeatball = styled.svg``
export const MeatballImg = styled.img`
  object-fit: cover;
  /* display: block; */
  /* clip-path: ${(props) => props.id && `url(#${props.id})`}; */

  /* clip-path: url(${(props) => props.id}); */
  /* clip-path: url(${(props) => props.id}); */
  /* ${(props) => props.id && `clip-path: url(#${props.id});`} */
  /* ${(props) => props.id && `clip-path: url(#meatballTwo);`} */
  clip-path: url(#meatballTwo);
  /* -webkit-clip-path: url(#metaballOne); */
  width: ${(props) => (props.width ? props.width : '20rem')};
  height: ${(props) => (props.height ? props.height : '20rem')};
  /* max-width: 12rem;
  max-height: 12rem; */
`

export const MeatballImgHeader = styled(MeatballImg)`
  clip-path: url(#meatballHeader);
  -webkit-clip-path: url(#meatballHeader);
`
export const MeatballImgThree = styled(MeatballImg)`
  clip-path: url(#meatballThree);
  -webkit-clip-path: url(#meatballThree);
`
