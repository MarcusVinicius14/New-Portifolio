import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  gap: 100px;
  padding-bottom: 300px;
  opacity: ${(props) => (props.isVisible ? '1' : '-2')};
  transition: all ease 1s;
  filter: blur(${(props) => (props.isVisible ? '0' : '5px')});
  transform: translateY(${(props) => (props.isVisible ? '0' : '100%')});
`
export const ContainerItems = styled.div`
  background: transparent;
  display: flex;
  gap: 20px;
`

export const Text = styled.p`
  font-size: 32px;
  width: 150px;
  margin-bottom: 10px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
  border-bottom: 4px solid #1053e4;
`
export const Link = styled.a`
  img {
    width: 70px;
    height: 70px;
    cursor: pointer;
    background: transparent;
    border: none;
    border-radius: 25px;
    padding: 5px;
  }
`
