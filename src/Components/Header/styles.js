import { Link } from 'react-scroll'

import { styled } from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(
    90deg,
    rgba(32, 40, 116, 1) 0%,
    rgba(14, 14, 83, 1) 35%,
    rgba(2, 0, 36, 1) 100%
  );
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  position: fixed;

  z-index: 1000;
  opacity: ${(props) => (props.isVisible ? '1' : '-2')};
  transition: all ease 1s;
  filter: blur(${(props) => (props.isVisible ? '0' : '5px')});
  transform: translateY(${(props) => (props.isVisible ? '0' : '100%')});
`
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const ContainerName = styled.div`
  width: 150px;
  height: 75px;
  display: flex;
  flex-direction: row;
`

export const Text = styled.p`
  cursor: pointer;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: white;
`

export const CategoryButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease 0.1s;
  background: transparent;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 125px;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: black;
  border-bottom: ${(props) =>
    props.isActiveCategory ? '3px solid #3361dffb' : '#ffffff'};
  color: ${(props) => (props.isActiveCategory ? '#3361dffb' : '#ffffff')};
`
