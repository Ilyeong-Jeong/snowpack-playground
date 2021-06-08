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
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  // snowpack dev server option
  devOptions: {
    port: 3000,
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
