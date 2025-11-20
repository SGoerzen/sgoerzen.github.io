import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: "/"
})

// todo: use https://vitejs.dev/guide/static-deploy.html
// todo use https://github.com/minimal-ui-kit/material-kit-react
