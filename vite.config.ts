import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/"
})

// todo: use https://vitejs.dev/guide/static-deploy.html
// todo use https://github.com/minimal-ui-kit/material-kit-react
