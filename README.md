Vue + Express front and rear scaffolding (** ElementUI **)
=========================================


On the basis of the original version, modify the relevant configuration file webpack. Make the project can run build command, compile vue related code.
The front part adds the vue-bucket (vue-router, vuex) and ~ iView ~~ ** ElementUI ** association
Back part of the increase of the history part of the express mode
Re-edit the folder structure

fork source：[southerncross/vue-express-dev-boilerplate](https://github.com/southerncross/vue-express-dev-boilerplate)

## Key words

- Vue (vue-router + vuex)
- ~~iView~~
- **ElementUI**
- Express
- Nodemon
- Webpack
- Npm


##  File Directory

```
.
├── LICENSE
├── README.md
├── nodemon.json
├── package.json
├── src
│   ├── client
│   │   ├── App.vue
│   │   ├── components
│   │   │   └── Hello.vue
│   │   │── static
│   │   │── router
│   │   │── store
│   │   │── views
│   │   └── index.js
│   └── server
│       ├── index.js
│       ├── config
│       ├── dao
│       ├── model
│       ├── router
│       ├── public
│       │   └── favicon.ico
│       └── views
│             └── index.html
├── build
│   ├── build.js
│   ├── clicheck-version.js
│   ├── dev-client.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
     ├── dev.env.js
     ├── index.js
     └── prod.env.js
```

## Usage

1. Install Dependencies

   `npm install`

2. Run the development environment

   `npm run dev`

3. build the front end code

    `npm run build`
    
    The generated code will be in the root directory of the dist directory.
    At this point can be specifically written to start a production environment       express script.

## Reference

Some ideas are stolen from them, really appreciated.

- [Eslint guide](http://eslint.org/docs/user-guide/getting-started)
- [Express generator](http://expressjs.com/en/starter/generator.html)
- [Vue template](https://github.com/vuejs-templates/webpack)
- [Nodemon doc](https://github.com/remy/nodemon#nodemon)
- [Babel register](http://www.ruanyifeng.com/blog/2016/01/babel.html)
- [webpack-dev-middleware-boilerplate](https://github.com/madole/webpack-dev-middleware-boilerplate/tree/master/src)
- [how-can-i-use-webpack-with-express](http://stackoverflow.com/questions/31102035/how-can-i-use-webpack-with-express)
- [The-ultimate-webpack-setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)
