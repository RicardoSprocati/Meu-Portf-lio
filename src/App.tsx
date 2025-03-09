
import AboutMe from './components/AboutMe'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import { AppContainer, GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <Carousel />
        <AboutMe />
        <Projects />
        <Footer />
      </AppContainer>
    </>
  )
}

export default App
