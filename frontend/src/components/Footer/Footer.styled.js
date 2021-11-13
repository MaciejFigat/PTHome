import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterContainer = styled.div`
  display: flex;
  background-color: var(--background2-main);
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
  color: var(--background4-main);
`
export const FooterSectionHeading = styled.p`
  color: var(--background4-main);
  margin-bottom: 24px;
  font-size: 24px;
  @media screen and (max-width: 770px) {
    font-size: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
`
export const FooterSectionText = styled.div`
  color: var(--background5-main);
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
  border: 2px solid var(--background5-main);
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
  color: var(--background4-main);
  @media screen and (max-width: 770px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const FooterLinkTitle = styled.h2`
  margin-bottom: 18px;
`

export const FooterLink = styled(Link)`
  color: var(--secondary4);
  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    transition: all 0.3s ease-out;
    color: var(--secondary5);
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
  color: var(--secondary3);
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
  color: var(--secondary4);
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
  color: var(--secondary4);
  font-size: 18px;
  &:hover {
    transition: all 0.3s ease-out;
    color: var(--secondary2);
  }
`
