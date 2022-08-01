# RealWorld Clone!

RealWorld Demo => [https://demo.realworld.io/#/](https://demo.realworld.io/#/)

해당 프로젝트를 써보고 싶었던 스택들로 카피해보장.

- Next.js(TypeScript)
- TailwindCss & twin.macro
- recoil, swr, etc...

## 잡설

Backend는,, 우선 기본 제공해주는 api를 사용

현재 과정(귀찮아서 수정안할 가능성 85%)
- Next Tailwind Example install (next.js + ts + tailwind가 적용되어 있는 보일러플레이트를 쉽게 설치 할 수 있따.)
- eslint, prettier 설정 (특히! eslint react-hooks plugin은 react를 쓴다면 꼭 사용해보자!!!!!!)
- twin macro, tailwind 의존 설정
- Next Webfont document단에서 글로벌 설정 (next가 알아서 최적화도 해준다!)
- 개발에 필요한 컴포넌트 작업중... (Layout / Header 등등등)

## 로컬환경 시작하기

```bash
yarn install
yarn dev
```

## 혹시 몰라 남겨놓은 Vercel Deploy 

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## TODO
- JWT 토큰 인증
- 폼 마무리
- 로그인 관련 로직 추가
  - 헤더 아이템 추가 (recoil)
  - index 페이지 컨텐츠 추가 (recoil)
  - 등등드으등