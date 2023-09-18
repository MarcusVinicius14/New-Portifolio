import { useInView } from 'react-intersection-observer'

import Lottie from 'lottie-react'

import downAnimationData from '../../assets/downAbout.json'
import animationData from '../../assets/FirstImage.json'
import * as C from './styles'
function Apresentation() {
  const { ref: myRef, inView: myElementIsVisible } = useInView()
  return (
    <C.Container
      ref={myRef}
      isVisible={myElementIsVisible}
      className="/"
      id="/"
    >
      <C.ContainerText>
        <C.Text>Olá, 👋🏾</C.Text>
        <C.Text>Me chamo Marcus,</C.Text>
        <C.Text>sou um</C.Text>
        <C.TextDev>Desenvolvedor Web!</C.TextDev>
        <C.Button>
          About me
          <C.ContainerAnimation>
            <Lottie animationData={downAnimationData} />
          </C.ContainerAnimation>
        </C.Button>
      </C.ContainerText>

      <C.ContainerItems>
        <Lottie animationData={animationData} />
      </C.ContainerItems>
    </C.Container>
  )
}

export default Apresentation
