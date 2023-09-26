import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import 'node_modules/primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
