import 'aos/dist/aos.css'
import AOS from 'aos'
import { AboutSection, Title, Description } from './styles'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'



const AboutMe = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, [])

  return (
    <AboutSection className='container' id="sobre">
      <Title data-aos="fade-up"> {t('aboutMe.welcome')}</Title>
      <Description data-aos="fade-up" data-aos-delay="200">
        <p>{t('aboutMe.introduction')}</p>
        <p> {t('aboutMe.studies')}</p>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXQ4aGw4dWI4bWQwZHg0MnIxYjg2Nm9ndTkyMGU1NXMwMnl4aTYzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LT1Pq74cXuNQxyUmLk/giphy.gif" alt="Multitasking" />
      </Description>
      <Title data-aos="fade-up"> {t('aboutMe.skillsTitle')}</Title>
      <Description data-aos="fade-up" data-aos-delay="200">
        <p> {t('aboutMe.frontend')}</p>
        <p> {t('aboutMe.tools')}</p>
        <p> {t('aboutMe.backend')}</p>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWw5Y2x6cm9ucjJvOGdhazR5M2hhMm84NGlpZGxlc2xmNmtrNjkzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KESIWJc8fUqGLZDNcH/giphy.gif" alt="Multitasking" />
      </Description>
      <Title data-aos="fade-up"> {t('aboutMe.journeyTitle')}</Title>
      <Description data-aos="fade-up" data-aos-delay="200">
        <p> {t('aboutMe.journey1')}</p>
        <p>{t('aboutMe.journey2')}</p>
        <p>{t('aboutMe.journey3')}</p>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWYwaDNvZjE4Zmc4MjZzbnRtdzFmN3RudGVpcWJ6bmZuaWVudzdrZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q5Xw303P9PTKomBqgs/giphy.gif" alt="Multitasking" />
      </Description>
      <Title data-aos="fade-up"> {t('aboutMe.nextStepsTitle')}</Title>
      <Description data-aos="fade-up" data-aos-delay="200">
        <p>{t('aboutMe.step1')}</p>
        <p>{t('aboutMe.step2')}</p>
        <p> {t('aboutMe.step3')}</p>
        <p>{t('aboutMe.step4')}</p>
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXVoYXo1eXh0aWI2Z3d2djhoYnpkOHJldG9yaGt1dWg3MmJ5aDZ4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cge9nG7e7wKWbMm9cY/giphy.gif" alt="Multitasking" />
      </Description>
    </AboutSection>
  );
};

export default AboutMe
