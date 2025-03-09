import styled from "styled-components"
import { Colors } from "../../styles"

export const FooterContainer = styled.footer`

  padding: 40px 20px;
  text-align: center;
  color: ${Colors.white};
`

export const FooterTitle = styled.h3`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const SocialItem = styled.a`
  display: flex;
  align-items: center;
  color: ${Colors.white};
  text-decoration: none;
  margin-bottom: 10px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }
`

export const Copyright = styled.p`
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
  opacity: 0.6;
`
