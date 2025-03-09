import styled, { keyframes } from "styled-components";
import { Breakpoints, Colors } from "../../styles";
import IconBrasil from '../../assets/icons/icons8-brasil-48.png'
import IconUsa from '../../assets/icons/icons8-usa-48.png'


interface ToggleProps {
  isActive: boolean
}

interface ImagemProps {
  url: string
}

const rotateBorder = keyframes`
  0% {
    border-color: ${Colors.Pink} ${Colors.ciano} ${Colors.Pink} ${Colors.ciano}
  }
  50% {
    border-color: ${Colors.ciano} ${Colors.Pink} ${Colors.ciano} ${Colors.Pink}
  }
  100% {
    border-color: ${Colors.Pink} ${Colors.ciano} ${Colors.Pink} ${Colors.ciano}
  }
`

export const Background = styled.div`
  position: relative;
  width: 100vw;
  height: 200px;
  overflow: hidden;


  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`

export const TransitionOverlay = styled.div`
  position: absolute;
  bottom: -10px;
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
`;


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0 40px;

`

export const  ProfileImage = styled.div<ImagemProps>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #1a1a1a;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  border: 4px solid;
  animation: ${rotateBorder} 4s linear infinite;
  box-shadow: 0 0 10px ${Colors.ciano}, 0 0 20px ${Colors.Pink};
`

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: ${Breakpoints.tablet}) {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  }
`

export const NavLink = styled.a`
  color: ${Colors.white};
  text-decoration: none;
  font-size: 22px;
  transition: color 0.3s ease;
  font-weight: bold;

  &:hover {
    color: ${Colors.ciano};
  }
`

export const ToggleButton = styled.button`
  position: relative;
  width: 60px;
  height: 30px;
  background-color: #333;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  padding: 2px;
  border: 2px solid ${Colors.ciano};
`

export const ToggleBall = styled.div<ToggleProps>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-image:url(${({ isActive }) => (isActive ? IconUsa : IconBrasil)});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: -0.2px;
  left: ${({ isActive }) => isActive ? 'calc(100% - 28px)' : '0px'};
  transition: left 0.3s ease-in-out;
  border: 2px solid ${Colors.ciano};
`
