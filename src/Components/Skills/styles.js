import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 400px;
  opacity: ${(props) => (props.isVisible ? '1' : '-2')};
  transition: all ease 1s;
  filter: blur(${(props) => (props.isVisible ? '0' : '5px')});
  transform: translateX(${(props) => (props.isVisible ? '0' : '100%')});
  margin-top: 100px;
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
export const Text = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 400;
  color: #ffffff;
  padding-bottom: 20px;
`

export const ContainerItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  gap: 25px;
  width: 65%;
  flex-wrap: wrap;
`

export const ConteinerTecnologies = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: center;
  border: 3px solid rgb(41, 53, 72);
  border-radius: 10px;
  gap: 10px;
  padding: 6px 7px;

  img {
    width: 50px;
    height: 50px;
    padding: 5px 0px;
  }
`
