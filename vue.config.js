module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/ounce/" : "",
  // outputDir: "",
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      title: 'Ounce ui - a Vue3-based UI toolkit for the web.',
    }
  }
};