import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 300px;
  height: 650px;
  padding-top: 75px;
  opacity: ${(props) => (props.isVisible ? '1' : '-2')};
  transition: all ease 1s;
  filter: blur(${(props) => (props.isVisible ? '0' : '5px')});
  transform: translateX(${(props) => (props.isVisible ? '0' : '100%')});
`
export const ContainerItems = styled.div`
  width: 500px;
  height: 300px;
  background: transparent;
  border-radius: 50%;
`
export const ContainerText = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ContainerAnimation = styled.div`
  width: 50px;
  height: 50px;
`
export const Text = styled.span`
  font-size: 42px;
  margin-bottom: 10px;
  font-weight: 700;
  color: #ffffff;
`
export const TextDev = styled.span`
  font-size: 42px;
  margin-bottom: 10px;
  font-weight: 700;
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
export const Button = styled.button`
  margin-top: 20px;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  width: 150px;
  height: 50px;
  background: #0b0a3a;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  gap: 5px;
  box-shadow: 3px 2px 9px 8px rgba(26, 14, 197, 0.4);
  transition: 0.5s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
