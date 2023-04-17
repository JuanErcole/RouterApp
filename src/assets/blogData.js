const blogdata = [
  {
    title: '¿Qué es React?',
    slug: 'que-es-react',
    p1: 'React es una biblioteca de JavaScript de código abierto utilizada para construir interfaces de usuario (UI) en aplicaciones web. Fue desarrollada por Facebook y se lanzó por primera vez en 2013.',
    p2:'React se enfoca en la construcción de componentes reutilizables, lo que permite crear interfaces de usuario dinámicas y eficientes. Los componentes en React son bloques de construcción que se pueden combinar para crear aplicaciones web complejas. Cada componente tiene su propio estado y propiedades, y puede renderizarse en respuesta a los cambios en el estado o las propiedades.',
    p3: 'React utiliza un enfoque de "modelo de datos descendente", lo que significa que los cambios en el modelo de datos (el estado) se propagan hacia abajo a través de los componentes para actualizar la interfaz de usuario. Esto ayuda a mantener la coherencia y la integridad de la interfaz de usuario y hace que la aplicación sea más fácil de mantener y depurar.',
    p4:'Además, React es altamente personalizable y se puede integrar con otras bibliotecas y herramientas de desarrollo de JavaScript para crear aplicaciones web más sofisticadas. En resumen, React es una biblioteca de JavaScript que se utiliza para construir interfaces de usuario interactivas y eficientes en aplicaciones web.',
  },
  {
    title: '¿Qué es el virtual DOM?',
    slug: 'que-es-virtual-dom',
    p1: 'El Virtual DOM (DOM Virtual en español) de React es una técnica de renderizado eficiente que utiliza un árbol de objetos JavaScript para representar la estructura de la interfaz de usuario de una aplicación web en memoria.',
    p2:'Cuando se producen cambios en la aplicación, React compara la versión anterior del Virtual DOM con la nueva versión y solo actualiza los elementos que han cambiado. Esto evita la necesidad de volver a renderizar la página entera cada vez que ocurre un cambio, lo que hace que la aplicación sea más rápida y eficiente.',
    p3: 'El Virtual DOM de React funciona como una capa de abstracción entre la aplicación y el DOM real del navegador, lo que permite que la manipulación de la interfaz de usuario sea más eficiente y fácil de mantener. En resumen, el Virtual DOM de React es una herramienta clave para lograr una mejor performance y experiencia del usuario en aplicaciones web de alta calidad.',
    p4: 'En general, el Virtual DOM es una técnica clave que ha permitido a React convertirse en una de las bibliotecas más populares y poderosas para el desarrollo de aplicaciones web modernas. Su enfoque eficiente y modularizado hace que sea más fácil para los desarrolladores crear y mantener aplicaciones de alta calidad en un entorno de rápido cambio.'

  },
  {
    title: '¿Qué es next.js?',
    slug: 'que-es-next',
    p1: 'Next.js es un framework de React para construir aplicaciones web del lado del servidor (SSR) y aplicaciones web estáticas. Proporciona una serie de herramientas y funcionalidades que simplifican el proceso de desarrollo y mejora el rendimiento y la experiencia del usuario en aplicaciones web.',
    p2: 'Una de las principales características de Next.js es que facilita la creación de aplicaciones SSR, lo que permite que las páginas se rendericen en el servidor antes de enviarse al navegador del usuario. Esto mejora el tiempo de carga y la capacidad de indexación del contenido, lo que puede mejorar la clasificación en los motores de búsqueda.',
    p3: 'Además, Next.js permite a los desarrolladores crear aplicaciones web estáticas, que son páginas web que se generan previamente y se pueden entregar directamente al navegador sin necesidad de un servidor. Esto también mejora el rendimiento de la aplicación y reduce la carga en el servidor.',
    p4: 'Otra característica importante de Next.js es su capacidad para proporcionar una experiencia de desarrollo más rápida y productiva. Incluye herramientas de compilación y optimización de código integradas que permiten a los desarrolladores enfocarse en el código y la lógica de la aplicación sin tener que preocuparse por la configuración de la infraestructura.',
  }
];

const homeData = {
  title: 'Curso React-Router-Dom',
  p1: 'React Router Dom es una librería de enrutamiento para React que nos permite manejar la navegación en una aplicación web de manera sencilla y eficiente. Con esta librería, podemos crear rutas que correspondan a diferentes componentes, lo que significa que podemos renderizar diferentes componentes según la URL actual.',
  p2: 'React Router Dom es fácil de usar y proporciona una gran cantidad de funcionalidades, como enrutamiento anidado, manejo de parámetros de URL, redirecciones y mucho más. Además, es muy popular en la comunidad de React, por lo que es fácil encontrar ayuda y recursos en línea.',
  p3: 'La librería tiene tres componentes principales: <BrowserRouter>, <Switch> y <Route>. <BrowserRouter> envuelve toda la aplicación y se encarga de manejar la historia del navegador, mientras que <Switch> se encarga de mostrar el primer componente que coincide con la URL actual. Por último, <Route> se usa para definir una ruta que renderizará un componente en particular.'

}

const HooksData = [
  {
    title: 'useHistory()',
    slug: 'usehistory',
    description: ' Devuelve el objeto de historial que se puede usar para navegar a través de la pila de historial del navegador. Puede utilizarse para navegar a una ruta específica, ir hacia atrás o hacia adelante en la pila de historial, entre otras cosas.',
    imgUsing: 'https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/342194142_131620646550660_3763288636479533197_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE2sp0CQ7NIEMaiRZtyd_2_RZ6BkK9awzJFnoGQr1rDMt7yh3KvXFxKjEtd3wz6z8o&_nc_ohc=Ui1eBJfF8FQAX9b30Kd&_nc_ht=scontent.fcor10-3.fna&oh=00_AfANJekw92MoA-5e-D1HY-R7KnzdppGCDBJLIeHLMeDB_Q&oe=6442568D',
    using: "En este ejemplo, useHistory() devuelve el objeto de historial que se utiliza para navegar a la nueva ruta /ruta-nueva. Cuando el botón se hace clic, handleClick() se ejecuta y llama a history.push('/ruta-nueva'), que navega a la ruta /ruta-nueva.",
  },
  {
    title: 'useLocation()',
    slug: 'uselocation',
    description: ' Devuelve un objeto que representa la ubicación actual en la aplicación. Proporciona información como la ruta actual, los parámetros de consulta y el hash de la URL.',
    imgUsing: 'https://scontent.fcor10-4.fna.fbcdn.net/v/t39.30808-6/341907435_183676114505764_5412253318500794237_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHSl_sqgHVJDpZ3Bf7jJ_7vo3MWKLJKxK-jcxYoskrEr-Lb5iY9q_covvalQNrbqso&_nc_ohc=M7lbWl1vuPMAX_lqNX7&_nc_ht=scontent.fcor10-4.fna&oh=00_AfAooeIGP98RK4n15YPDqYaZUmxNFW70GDg8LgF2XZ-4Ng&oe=6442BAC2',
    using: 'En este ejemplo, useLocation() devuelve un objeto que contiene información sobre la ubicación actual. El valor de location.pathname se utiliza para mostrar la ruta actual, el valor de location.search se utiliza para mostrar los parámetros de consulta y el valor de location.hash se utiliza para mostrar el hash de la URL.',
  },
  {
    title: 'useRouteMatch()',
    slug: 'useroutematch',
    description: 'Devuelve un objeto que contiene información sobre la coincidencia de la ruta actual con una ruta específica. Se puede utilizar para determinar si una ruta determinada coincide con la URL actual y obtener información sobre los parámetros de la ruta.',
    imgUsing: 'https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/342185017_2678108332361168_3935497753326829352_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHjG1NFZfHeLAmikoImZCMu9Fl3sk5IuCL0WXeyTki4ImLXflb6DJ2ib6itM0UWcq8&_nc_ohc=WIxecvL5M88AX-ie-bQ&_nc_ht=scontent.fcor10-3.fna&oh=00_AfCMbxIqNN_kt647uHe0vAZ00H18HJQ-zQSNE0dziJ7QFQ&oe=6442457A',
    using: 'En este ejemplo, useRouteMatch() se utiliza para determinar si la URL actual coincide con la ruta /usuarios/:username. Si la ruta no coincide, se muestra un mensaje de error. Si la ruta coincide, match.params.username se utiliza para mostrar la información del perfil del usuario.',
  },
  {
    title: 'useParams()',
    slug: 'useparams',
    description: ' Devuelve un objeto con los parámetros de la ruta actual. Si la ruta tiene una sección de parámetros (por ejemplo, /:id), este objeto contendrá el valor del parámetro id.',
    imgUsing: 'https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/342205228_1425884581546418_3935563267937338439_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGcXv3-gGWCjS28UsJZFGGU2wTuLyCYYp3bBO4vIJhinWW9nHqR3CM_7CkABBzPV7c&_nc_ohc=JE4Degj3YlsAX_lo_Wl&_nc_ht=scontent.fcor10-3.fna&oh=00_AfDH7K3hDslwuTuFOF_RGenPdimznPwxk_-UdgjUwn7U9g&oe=6441CBEB',
    using: 'En este ejemplo, la ruta para este componente es /usuarios/:username. useParams() devuelve un objeto que contiene el parámetro username, que se utiliza para mostrar la información del usuario. Por ejemplo, si la URL es /usuarios/johndoe, useParams() devuelve { username: "johndoe" }.',
  }
]

export { blogdata, homeData };