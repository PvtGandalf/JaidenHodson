import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Blog from './pages/blog';
import Posts from './pages/posts';
import Contact from './pages/contact';
import PrivacyPolicy from './pages/privacyPolicy';
import AppAdsFile from './pages/app-ads';
import Error from './pages/error';

const App = () => useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/posts/:path", element: <Posts /> },
    { path: "/contact", element: <Contact /> },
    { path: "/privacyPolicy", element: <PrivacyPolicy /> },
    { path: "/app-ads.txt", element: <AppAdsFile /> },
    { path: "*", element: <Error /> }
  ]);

export default App;
