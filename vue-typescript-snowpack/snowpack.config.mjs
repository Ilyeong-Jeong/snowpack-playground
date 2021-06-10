/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  // 빌드에 사용할 현재 경로와 빌드 결과 경로 설정
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  // snowpack 플러그인 추가
  plugins: [
    '@snowpack/plugin-vue',
    '@snowpack/plugin-vue/plugin-tsx-jsx.js',
    '@snowpack/plugin-dotenv',
  ],
  // 디렉토리 또는 패키지 alias 지정
  alias: {
    '@': './src',
  },
  // 별도로 구성된 base config를 병합. 상대 파일 경로, npm 패키지 또는 npm 패키지 내의 파일일 수 있음
  extends: '',
  // 빌드에서 제외할 파일 
  exclude: [], // string[]
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  // snowpack dev server option
  devOptions: {
    port: 3000, // default: 8080
    hmr: true, // hot module replacement toggle default: true
    hmrDelay: 0, // hmr delay(milliseconds) default: 0
    /* ... */
  },
  // build config
  buildOptions: {
    out: 'build', // 최종 빌드를 출력하는 디렉토리 이름 default: 'build' 
    /* ... */
  },
  // test config
  testOptions: {
    /* ... */
  },
  packageOptions: {
    /* ... */
  },
};
