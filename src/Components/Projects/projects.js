import codeBurguer from '../../assets/codeBurguer.jpeg'
import devMovie from '../../assets/devmovie.jpeg'
import instagram from '../../assets/instagram.jpeg'
import landingpage from '../../assets/landingpage.jpeg'
export const ProjectsData = [
  {
    id: 1,
    name: 'DevMovie',
    about: `Utilizando React, JavaScript, CSS e HTML e features como UseEffect, UseState,
    ReactIcons para formular o Front-end utilizando componentes como Carrossel, cards, modal,
    juntamente com o Back-end criado através de Node.js e mongoDB. O DevMovie é um Midia
    Player com series e filmes, que pode ser adaptado para uma plataforma de aulas e cursos.`,
    image: devMovie,
    link: 'https://dev-movie-marcus.netlify.app'
  },
  {
    id: 2,
    name: 'Instagram',
    about: `Aplicação baseada no Instagram, desenvolvida com React, Javascript, CSS, HTML. Possui
    elementos visuais demarcados como feed, stories, header, perfil do publicador além de
    oferecer a troca de tema entre claro e escuro provenientes de features como ThemeProvider,
    React-Loading, React-icons, UseEffect e UseState. As Imagens presentes na aplicação são
    fornecidas por uma API externa chamada Pexels.`,
    image: instagram,
    link: 'https://instagram-devclub-marcus.netlify.app'
  },
  {
    id: 3,
    name: 'Landing pages, login pages...',
    about: `Utilizando Javascript, React, HTML, Bootstrap e CSS essas aplicações permitem o
    recolhimento de dados dos usuários para integrar em uma série de utilidades sendo elas, uso
    de dados para o RH, pedidos para Lojas, cadastramento em redes sociais entre outras, tudo
    isso possível graça a integração com APIs externas. Sendo responsivas essas aplicações
    fornecem possibilidades tanto para usuários Desktop quanto Mobile.`,
    image: landingpage,
    link: 'https://landing-page-halloween-marcus.netlify.app'
  },
  {
    id: 4,
    name: 'E-Commerce CodeBurguer',
    about: `Esse projeto é um E-Commerce de uma hambúrgueria que permite a criação de produtos, categorias, pedidos usuários... Ele possui uma API própria e dois banco de dados, um relacional (PostgreSQL) e outro não relacional (MongoDB), ambos com deploy na nuvem para que fique acessível para qualquer pessoa. Além disso possui uma interface feita em React e diversos react hooks.`,
    image: codeBurguer,
    link: 'https://code-burguerinterface.vercel.app/login'
  }
]
