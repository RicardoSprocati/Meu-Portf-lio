import { Copyright, FooterContainer, FooterContent, FooterTitle, SocialItem, SocialLinks } from "./styles";
import linkedin from '../../assets/icons/icons8-linkedin-48.png'
import github from '../../assets/icons/icons8-github-64.png'
import whatsapp from '../../assets/icons/icons8-whatsapp-48.png'
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <FooterContainer id="contatos" className="container">
      <FooterTitle>{t('footer.footerTitle')}</FooterTitle>
      <FooterContent>
        <SocialLinks>
          <SocialItem href="https://linkedin.com/in/ricardo-sprocati-desenvolvedor-frontend/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
            linkedin.com/Ricardo Colpani Sprocati de Oliveira
          </SocialItem>
          <SocialItem href="https://github.com/RicardoSprocati" target="_blank">
            <img src={github} alt="GitHub" />
            github.com/RicardoSprocati
          </SocialItem>
          <SocialItem href="https://wa.me/+55489882143" target="_blank">
            <img src={whatsapp} alt="WhatsApp" />
            +55 (48) 98821-4357
          </SocialItem>
        </SocialLinks>
      </FooterContent>
      <Copyright>{t('footer.copyright')}</Copyright>
    </FooterContainer>
  );
};

export default Footer
