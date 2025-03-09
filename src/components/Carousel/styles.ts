import styled from 'styled-components'
import { Breakpoints, Colors } from '../../styles'


export const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 40px;

  .slick-dots li button:before {
    color: ${Colors.Pink};
    font-size: 12px;
  }

  .slick-dots li.slick-active button:before {
    color: ${Colors.ciano};
  }
`

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 0px 15px rgba(0, 255, 255, 0.7)
`

export const Image = styled.img<{isZoomed? : boolean}>`
  width: 100%;
  max-width: 900px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(255, 255, 0, 0.7);

  @media (max-width: ${Breakpoints.tablet}) {
    height: 300px;

    ${({ isZoomed }) =>
      isZoomed &&
      `
      transform: scale(4);
      transform-origin: center;
      `}
  }
`

export const Description = styled.p`
  margin-top: 15px;
  font-size: 22px;
  color: ${Colors.white};
  text-shadow: 0 0 5px ${Colors.ciano};
`

