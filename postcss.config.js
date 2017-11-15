module.exports = (ctx) => ({
  parser: ctx.parser ? 'sugarss' : false,
  map: true,
  plugins: {
    'postcss-import': {
      root: ctx.file.dirname,
      addModulesDirectories: ['node_modules']
    },
    'postcss-cssnext': {
      browsers: ['last 2 versions']
    }
  }
});
