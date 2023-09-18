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
  transform: translateX(${(props) => (props.isVisible ? '0' : '-100%')});
  margin-top: 250px;
`
export const AnimationDiv = styled.div`
  height: 650px;
`

export const TextContainer = styled.div`
  height: 650px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Text = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
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
