import styled from 'styled-components'
import { Colors } from '../../styles'

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
  overflow: hidden;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 32px;
  color: ${Colors.ciano};
  margin-bottom: 36px;
  text-shadow: 0 0 10px ${Colors.ciano}, 0 0 20px ${Colors.ciano};
`

export const Description = styled.p`
  font-size: 24px;
  color: ${Colors.white};
  max-width: 800px;
  line-height: 1.6;
  text-shadow: 0 0 10px ${Colors.Pink}, 0 0 20px ${Colors.Pink};

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  img {
    width: 100px;
    height: auto;
    margin: 10px 0;
  }
`

