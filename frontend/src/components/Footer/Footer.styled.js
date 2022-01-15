import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterContainer = styled.div`
  display: flex;

  background-image: linear-gradient(
    180deg,
    hsl(114deg 74% 17%) 0%,
    hsl(108deg 69% 22%) 4%,
    hsl(101deg 64% 26%) 10%,
    hsl(94deg 60% 32%) 17%,
    hsl(98deg 52% 38%) 25%,
    hsl(125deg 39% 49%) 37%,
    hsl(152deg 43% 60%) 50%,
    hsl(179deg 50% 72%) 64%,
    hsl(188deg 54% 77%) 77%,
    hsl(188deg 54% 77%) 87%,
    hsl(188deg 54% 77%) 94%,
    hsl(188deg 54% 77%) 100%
  );
  padding: 4rem 0 2rem 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  max-width: 70%;
  color: var(--background5-main);
`
export const FooterSectionHeading = styled.p`
  color: var(--secondary3);
  margin-bottom: 24px;
  font-size: 24px;
  @media screen and (max-width: 770px) {
    font-size: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
`
export const FooterSectionText = styled.div`
  color: var(--secondary3);
  margin-bottom: 24px;
  font-size: 20px;
`

export const FooterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 770px) {
    flex-direction: column;
    width: 85%;
  }
`
export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 10px;
  border: 2px solid var(--secondary5);
  font-size: 18px;
  outline: none;
  color: var(--secondary1);
  &::placeholder {
    color: var(--secondary5);
  }
  @media screen and (max-width: 770px) {
    margin: 0;
    margin-bottom: 16px;
  }
`

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 770px) {
    padding-top: 32px;
  }
`
export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 620px) {
    flex-direction: column;
  }
`
export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  text-align: left;
  align-items: flex-start;
  margin: 18px;
  box-sizing: border-box;
  color: var(--secondary3);
  @media screen and (max-width: 880px) {
    padding: 0px;
    width: 80%;
    margin: 0px;
    margin-left: 3px;
  }
`
export const FooterLinkTitle = styled.h2`
  margin-bottom: 18px;
`

export const FooterLink = styled(Link)`
  color: var(--bluegreen5);
  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    transition: all 0.3s ease-out;
    color: var(--secondary3);
  }
`
export const FooterMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`

export const FooterMediaWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 770px) {
    flex-direction: column;
  }
`
export const FooterLogo = styled(Link)`
  color: var(--bluegreen5);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`
export const FooterIcon = styled(FontAwesomeIcon)`
  margin-right: 12px;
`
export const FooterRights = styled.div`
  display: flex;
  color: var(--bluegreen5);
  @media screen and (max-width: 770px) {
    margin-bottom: 18px;
  }
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
`
export const SocialIconLink = styled.a`
  color: var(--bluegreen5);
  font-size: 18px;
  &:hover {
    transition: all 0.3s ease-out;
    color: var(--bluegreen1);
  }
`
