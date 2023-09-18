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
export const Image = styled.img`
  height: 400px;
  border-radius: 25px;
  box-shadow: 0px 0px 62px 50px rgba(39, 177, 219, 0.1);
`
