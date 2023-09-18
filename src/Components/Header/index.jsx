import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import Lottie from 'lottie-react'

import animationData from '../../assets/ReactAnimation.json'
import { categories } from './categories'
import * as C from './styles'
function Header() {
  const { ref: myRef, inView: myElementIsVisible } = useInView()
  const [bottonActive, setBottonActive] = useState(1)
  return (
    <C.Container ref={myRef} isVisible={myElementIsVisible}>
      <C.ContainerName>
        <Lottie animationData={animationData} />
        <C.Text>Marcus</C.Text>
      </C.ContainerName>

      <C.ContainerItems>
        {categories &&
          categories.map((category) => (
            <C.CategoryButton
              to={category.ref}
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              type="button"
              key={category.id}
              isActiveCategory={bottonActive === category.id}
              onClick={() => {
                setBottonActive(category.id)
              }}
            >
              {category.name}
            </C.CategoryButton>
          ))}
      </C.ContainerItems>
    </C.Container>
  )
}

export default Header
