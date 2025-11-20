import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

import {StyledEngineProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StyledEngineProvider injectFirst>
      <CssBaseline />
      <App />
  </StyledEngineProvider>
)
