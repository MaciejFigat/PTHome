import styled from 'styled-components'

export const MeatballContainer = styled.div`
  position: relative;
  top: 140px;
  right: -80%;
`
export const MeatballImg = styled.img`
  /* position: absolute; */
  clip-path: url(#metaballOne);
  width: ${(props) => (props.width ? props.width : '20rem')};
  height: ${(props) => (props.height ? props.height : '20rem')}; ;
`
