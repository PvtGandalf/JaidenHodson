import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);