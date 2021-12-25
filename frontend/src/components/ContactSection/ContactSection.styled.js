import styled from 'styled-components'

export const InfoSec = styled.div`
  padding: 160px 0;
  background: var(--background5-main);
  @media (max-width: 880px) {
    padding: 60px 0;
  }
`
export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  align-items: center;
  flex-direction: 'row-reverse';
  @media (max-width: 860px) {
    flex-direction: column;
  }
`
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  margin-right: 15px;
  padding-left: 15px;
  flex: 1;
  flex-basis: 50%;
  @media screen and (min-width: 770px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`
export const TextWrapper = styled.div`
  color: var(--background-tertiary2);
  max-width: 540px;
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

export const TopLine = styled.div`
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 10px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;

  @media screen and (max-width: 760px) {
    font-size: 36px;
  }
`
export const Subtitle = styled.p`
  color: var(--background-tertiary1);
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 880px) {
    padding-bottom: 20px;
  }
`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`