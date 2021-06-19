import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import "@fontsource/archivo/400.css"
import "@fontsource/archivo/700.css"

import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'




const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
