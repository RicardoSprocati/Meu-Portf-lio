import styled from 'styled-components'
import { Breakpoints, Colors } from '../../styles/index'

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 40px;
    background: linear-gradient(to right, ${Colors.Pink}, ${Colors.ciano});
    box-shadow: 0px 0px 10px ${Colors.Pink}, 0px 0px 20px ${Colors.ciano};
  }
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr ));
  gap: 50px;
  max-width: 660px;
  width: 100%;
  justify-content: center;
  position: relative;

  @media (max-width: ${Breakpoints.tablet}) {
    width: 80%;
  }
`

export const ProjectCard = styled.div`
  height: 100%;
  background: ${Colors.DarkGray};
  border-radius: 10px;
  box-shadow: 0 0 10px ${Colors.ciano}, 0 0 20px ${Colors.Pink};
  transition: transform 0.3s ease;
  position: relative;
  margin-top: 30px;

  &:hover {
    transform: translateY(-5px);
  }
`

export const ProjectNumber = styled.div`
  position: absolute;
  top: -10px;
  left: -35px;
  width: 60px;
  height: 60px;
  background: ${Colors.DarkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 10px ${Colors.ciano}, 0 0 20px ${Colors.ciano};

  &:hover {
    box-shadow: 0 0 15px ${Colors.Pink}, 0 0 30px ${Colors.Pink};
  }
`

export const ProjectNumberText = styled.span`
  font-size: 45px;
  font-weight: bold;
  background: linear-gradient(25deg, ${Colors.ciano}, ${Colors.Pink});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px ${Colors.ciano};
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const ProjectTitle = styled.h3`
  font-size: 24px;
  color: ${Colors.white};
  margin-bottom: 10px;
`

export const ProjectDescription = styled.p`
  font-size: 16px;
  color: ${Colors.LightGray};
  margin-bottom: 20px;
  text-align: center;
`

export const ProjectButton = styled.a`
  background: ${Colors.ciano};
  color: ${Colors.white};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: ${Colors.Pink};
  }
`

export const LerMais = styled.button`
  background: ${Colors.DarkGray};
  color: ${Colors.LightGray};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${Colors.ciano};
  }
`
