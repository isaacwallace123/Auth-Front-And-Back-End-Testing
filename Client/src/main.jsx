import React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from 'notistack'

import App from './App';

createRoot(document.getElementById('root')).render(
  <SnackbarProvider autoHideDuration={3000} maxSnack={3} variant='info'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SnackbarProvider>
)
