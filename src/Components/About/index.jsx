import { useInView } from 'react-intersection-observer'

import Lottie from 'lottie-react'

import AboutAnimation from '../../assets/AboutAnimation.json'
import * as C from './styles'

function About() {
  const { ref: myRef, inView: myElementIsVisible } = useInView()
  return (
    <C.Container
      ref={myRef}
      isVisible={myElementIsVisible}
      className="about"
      id="about"
    >
      <C.AnimationDiv>
        <Lottie animationData={AboutAnimation} />
      </C.AnimationDiv>
      <C.TextContainer>
        <C.Title>About Me</C.Title>
        <C.Text>
          Me chamo Marcus Vinicius, sempre fui apaixonado e envolvido no mundo
          da tecnologia e mais recentemente me aventurei a entrar no mundo da
          programação e desenvolvimento Web. Possuo grande interesses em
          aprender novos conhecimentos e busco sempre evoluir, mantendo uma boa
          relação com os meus colegas de trabalho, recebo feedbacks e procuro
          sempre melhorar com eles. Como desenvolvedor Front-End prezo pela
          qualidade, usabilidade e praticidade, sempre entregando trabalhos com
          as melhores soluções para os clientes e usuários, juntamente com um
          código limpo e organizado. Sou uma pessoa focada e dedicada sempre,
          visando uma boa relação nos trabalhos em equipe e no dia a dia.
        </C.Text>
      </C.TextContainer>
    </C.Container>
  )
}

export default About
