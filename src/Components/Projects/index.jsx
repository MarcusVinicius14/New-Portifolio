import { useInView } from 'react-intersection-observer'

import { ProjectsData } from './projects'
import * as C from './styles'
function Projects() {
  const { ref: myRef, inView: myElementIsVisible } = useInView()

  return (
    <C.Container
      ref={myRef}
      isVisible={myElementIsVisible}
      className="projects"
      id="projects"
    >
      <C.Title>Projects</C.Title>
      <C.ContainerItems>
        {ProjectsData &&
          ProjectsData.map((projects) => (
            <C.ContainerProject key={projects.id}>
              <C.ContainerText>
                <C.ProjectTitle>{projects.name}</C.ProjectTitle>
                <C.Text>{projects.about}</C.Text>
              </C.ContainerText>
              <C.Image src={projects.image} />
            </C.ContainerProject>
          ))}
      </C.ContainerItems>
    </C.Container>
  )
}

export default Projects
