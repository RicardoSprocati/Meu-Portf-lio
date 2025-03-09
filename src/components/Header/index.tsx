import { useState } from "react"
import { Background, HeaderContainer, NavLink, NavLinks, ProfileImage, ToggleBall, ToggleButton, TransitionOverlay } from "./styles"
import backgroundHeader from '../../assets/images/background-header3.mp4'
import { useTranslation } from "react-i18next"

const Header = () => {
  const { t,i18n }  = useTranslation()
  const [isActive, setIsActive] = useState(false)

  const toggleLanguage = () => {

    const newLanguage = i18n.language === 'pt' ? 'en' : 'pt'
    i18n.changeLanguage(newLanguage)
  }

  const handleClick = () => {
    setIsActive(!isActive)
    toggleLanguage()
  }

  return (
    <Background>
      <video autoPlay loop muted playsInline>
        <source src={backgroundHeader} type="video/mp4" />
      </video>
      <TransitionOverlay />
      <HeaderContainer className="container">
        <ProfileImage url="https://github.com/RicardoSprocati.png" />
        <NavLinks>
          <NavLink href="#sobre">{t('header.about')}</NavLink>
          <NavLink href="#portfolio">{t('header.portfolio')}</  NavLink>
          <NavLink href="#contatos">{t('header.contacts')}</NavLink>
          <ToggleButton onClick={handleClick}>
            <ToggleBall isActive={isActive}/>
          </ToggleButton>
        </NavLinks>
      </HeaderContainer>
    </Background>
  )
}

export default Header
