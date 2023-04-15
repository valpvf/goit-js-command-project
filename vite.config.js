import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
//import handlebars from 'vite-plugin-handlebars';
// import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
      // input: {
      //   input: glob.sync('./src/*.html'),
      //   main: resolve(__dirname, './src/index.html'),
      //   comics: resolve(__dirname, './src/comics/index.html'),
      // },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
