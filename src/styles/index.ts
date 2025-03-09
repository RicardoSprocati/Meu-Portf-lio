import styled, { createGlobalStyle } from 'styled-components'
import BodyBackground from '../assets/images/BodyBackground.jpg'

export const Colors = {
  white:'#fff',
  ciano:'#0ff',
  purple:'#B026FF',
  Pink:'#FF1E8E',
  DarkGray:' #333333',
  LightGray:' #B0B0B0'
}

export const Breakpoints = {
  tablet: '768px'
}


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }

    body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    }
  }
`

export const AppContainer = styled.div`
  background: url(${BodyBackground}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
`
