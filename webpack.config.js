 module.exports = {
   entry: ['@babel/polyfill', './src/main.js'], /* entry => qual o arquivo principal */
   output: {           /* output => qual lugar enviar o codigo convertido */
    path: __dirname + '/public',   /* __dirname => se refere ao diretorio onde se encontra o webpack.config.js */
    filename: 'bundle.js'
   },
   devServer: {
    contentBase: __dirname + '/public'
   },
   module: {
     rules: [         /* rules => propriedade obrigatória, ela diz como o webpack deve se comportar, quando o usuario estiver importando um arquivo */
      {
        test: /\.js$/, /* expressao regular pra ver se o arquivo terminar com .js */
        exclude: /node_modules/, /* desconsidera os arquivos node_modules */
        use: {
          loader: 'babel-loader',
        }
      }
     ],
   },

 }