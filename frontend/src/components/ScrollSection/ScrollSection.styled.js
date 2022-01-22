import styled from 'styled-components'

export const ScrollSec = styled.div`
  /* padding: 10px 0; */
  background-image: linear-gradient(
    to bottom,
    #a4dbe4,
    #69e6de,
    #45eeb9,
    #6af07b,
    #a8eb12
  );
  color: var(--bluegreen4);
  @media (max-width: 880px) {
    padding: 0px 0;
  }
`
export const ScrollSectionRow = styled.div`
  display: flex;
  /* align-items: center; */
  /* flex-direction: ${({ imgStart }) =>
    imgStart === true ? 'row-reverse' : 'row'}; */
  /* flex-direction: row-reverse; */
  @media (max-width: 880px) {
    /* flex-direction: ${({ imgStart }) =>
      imgStart === true ? 'column-reverse' : 'column'}; */
    /* flex-direction: column-reverse; */
  }
`

export const SectionColumn = styled.div`
  /* flex: 1; */
  /* margin-bottom: 15px;
  margin-right: 15px;
  padding-left: 15px; */
  /* display: flex; */
  /* flex-direction: column; */
  flex-basis: 80%;
  /* justify-content: flex-start; */
  /* justify-content: center;
  align-items: center; */
  /* max-height: 60vh; */
  /* max-height: 500px; */
  /* align-items: flex-start; */
  /* justify-content: flex-start; */
  /* flex-direction: column; */
  /* @media screen and (min-width: 770px) {
    max-width: 100%;
    justify-content: center;
  } */
`
export const SectionColumnScroll = styled.div`
  /* flex: 1; */
  flex-basis: 20%;
  top: 0;
  position: sticky;
  margin-bottom: 15px;
  max-height: 220vh;
  /* margin-right: 15px; */
  padding-left: 10px;
  /* padding-right: 10px; */
  padding-right: 0;
  /* top: 310px; */
  /* max-width: 340px; */
`

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60;
  @media screen and (max-width: 770px) {
    padding-bottom: 25px;
  }
`
export const Container = styled.div`
  z-index: 1;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`
