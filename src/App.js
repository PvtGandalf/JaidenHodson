import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Error from './pages/error';

const App = () => useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/blog", element: <Blog /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <Error /> }
  ]);

export default App;
