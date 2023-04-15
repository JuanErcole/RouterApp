const blogdata = [
  {
    title: '¿Qué es React?',
    slug: 'que-es-react',
    content: 'React es el mejor framework de JavaScript.',
    author: 'juandc',
  },
  {
    title: '¿Qué es Vue?',
    slug: 'que-es-vue',
    content: 'Vue es el mejor framework de JavaScript.',
    author: 'diannerd',
  },
  {
    title: '¿Qué es Angular?',
    slug: 'que-es-angular',
    content: 'Angular es el mejor framework de JavaScript.',
    author: 'nicobytes',
  }
];

const homeData = {
  title: 'Curso React-Router-Dom',
  p1: 'React Router Dom es una librería de enrutamiento para React que nos permite manejar la navegación en una aplicación web de manera sencilla y eficiente. Con esta librería, podemos crear rutas que correspondan a diferentes componentes, lo que significa que podemos renderizar diferentes componentes según la URL actual.',
  p2: 'React Router Dom es fácil de usar y proporciona una gran cantidad de funcionalidades, como enrutamiento anidado, manejo de parámetros de URL, redirecciones y mucho más. Además, es muy popular en la comunidad de React, por lo que es fácil encontrar ayuda y recursos en línea.',
  p3: 'La librería tiene tres componentes principales: <BrowserRouter>, <Switch> y <Route>. <BrowserRouter> envuelve toda la aplicación y se encarga de manejar la historia del navegador, mientras que <Switch> se encarga de mostrar el primer componente que coincide con la URL actual. Por último, <Route> se usa para definir una ruta que renderizará un componente en particular.'

}

export { blogdata, homeData };