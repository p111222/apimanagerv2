import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContextProvider } from './Context/AuthContext';
import { ApiEndpointContextProvider } from './Context/ApiEndpointContext';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ApiEndpointContextProvider>
          <App />
        </ApiEndpointContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);