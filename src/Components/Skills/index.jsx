import { useInView } from 'react-intersection-observer'

import * as C from './styles'
import { Tecnologies } from './tecnologies'

function Skills() {
  const { ref: myRef, inView: myElementIsVisible } = useInView()
  return (
    <C.Container
      ref={myRef}
      isVisible={myElementIsVisible}
      id="skills"
      className="skills"
    >
      <C.Title>Skills</C.Title>
      <C.ContainerItems>
        {Tecnologies &&
          Tecnologies.map((tecnologies) => (
            <C.ConteinerTecnologies key={tecnologies.id}>
              <img src={tecnologies.animation} />
              <C.Text>{tecnologies.name}</C.Text>
            </C.ConteinerTecnologies>
          ))}
      </C.ContainerItems>
    </C.Container>
  )
}

export default Skills
