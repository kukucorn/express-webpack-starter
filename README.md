# express-webpack-starter

express의 기본 구조에 mvc 패턴을 적용할 수 있게 /models, /services 폴더 추가 생성
webpack을 bundler로 사용하고 있고, webpack으로 babel과 sass 컴파일을 하고 있다.
bundle된 파일들은 /dist/js, /dist/css 폴더에 생성된다.

### 실행 방법

  > npm install
  > npm run build 
  > npm run start

localhost:3000 접속

### configuration

babel preset으로 @babel/preset-env 사용
bundle된 파일들은 /dist 폴더에 생성


### 사용한 라이브러리

express-generator : express의 기본 구조 생성(rendering engine 사용 x)

// express 에서 사용
"cookie-parser": "~1.4.4",
"debug": "~2.6.9",
"express": "~4.16.1",
"morgan": "~1.9.1"

// webpack 에서 사용
"webpack": "^5.52.0",
"webpack-cli": "^4.8.0"

// webpack 에서 babel을 사용하기 위해
"babel-loader": "^8.2.2",

"@babel/polyfill": "^7.12.1",
"@babel/cli": "^7.15.4",
"@babel/core": "^7.15.5",
"@babel/preset-env": "^7.15.4",

// webpack 에서 sass를 컴파일 하기 위해
"css-loader": "^6.2.0",
"style-loader": "^3.2.1",
"sass-loader": "^12.1.0",

"sass": "^1.39.0",

// css 파일을 생성하기 위해
"mini-css-extract-plugin": "^2.2.2",

