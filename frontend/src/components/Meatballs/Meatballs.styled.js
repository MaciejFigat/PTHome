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
  clip-path: url(#metaballOne);
  -webkit-clip-path: url(#metaballOne);
  width: ${(props) => (props.width ? props.width : '20rem')};
  height: ${(props) => (props.height ? props.height : '20rem')};
  /* max-width: 12rem;
  max-height: 12rem; */
`
