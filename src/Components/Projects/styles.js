import { styled } from 'styled-components'

export const Container = styled.div`
  margin-top: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 150px;
  opacity: ${(props) => (props.isVisible ? '1' : '-2')};
  transition: all ease 1s;
  filter: blur(${(props) => (props.isVisible ? '0' : '5px')});
  transform: translateX(${(props) => (props.isVisible ? '0' : '-100%')});
`
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 150px;
  width: 80%;
`

export const ContainerProject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.p`
  font-size: 32px;
  width: 150px;
  margin-bottom: 10px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
  border-bottom: 4px solid #1053e4;
`
export const ProjectTitle = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
  border-bottom: 4px solid #1053e4;
`

export const Text = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
`
export const Link = styled.a`
  cursor: pointer;
  font-size: 26px;
  margin-bottom: 10px;
  font-weight: 600;
  background: -webkit-linear-gradient(#1cffe1, #08f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow-animation 1000s linear infinite;
  @keyframes rainbow-animation {
    to {
      background-position: 4500vh;
    }
  }
`
export const Image = styled.img`
  height: 400px;
  border-radius: 25px;
  box-shadow: 0px 0px 62px 50px rgba(39, 177, 219, 0.1);
`
