import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Media from './pages/media';
import Posts from './pages/posts';
import Contact from './pages/contact';
import Error from './pages/error';

const App = () => useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/media", element: <Media /> },
    { path: "/media/posts/:id", element: <Posts /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <Error /> }
  ]);

export default App;
