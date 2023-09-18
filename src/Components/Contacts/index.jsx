import { useInView } from 'react-intersection-observer'

import github from '../../assets/github.svg'
import gmail from '../../assets/gmail.svg'
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'
import * as C from './styles'

function Contacts() {
  const { ref: myRef, inView: myElementIsVisible } = useInView()

  return (
    <C.Container
      ref={myRef}
      isVisible={myElementIsVisible}
      className="contacts"
      id="contacts"
    >
      <C.Text>Contacts</C.Text>
      <C.ContainerItems>
        <C.Link
          href="https://www.linkedin.com/in/marcus-vinicius-assunção-silva"
          target="_blank"
        >
          <img src={linkedin} />
        </C.Link>
        <C.Link href="https://w.app/i0Cdwo" target="_blank">
          <img src={whatsapp} />
        </C.Link>
        <C.Link href="mailto:marcus.vas14@gmail.com" target="_blank">
          <img src={gmail} />
        </C.Link>
        <C.Link href="https://github.com/MarcusVinicius14" target="_blank">
          <img src={github} />
        </C.Link>
      </C.ContainerItems>
    </C.Container>
  )
}

export default Contacts
