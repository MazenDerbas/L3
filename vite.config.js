export default {
  root: 'labb3-App',
  build: {
    rollupOptions: {
      input: 'labb3-App/index.html' // point to the correct entry file
    },
    outDir: '../dist',
    target: 'esnext'
  }
}
