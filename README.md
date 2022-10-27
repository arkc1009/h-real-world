# 마감 관리를 편하게 해보자!

1주일에 갑자기 작업물들이 우수수 쏟아지는 유일의 마감을 슬기롭게 관리해보도록 하자.

## 잡설

계정 인증은 next-auth 쓰자.

서버는 그냥 next 자체 api 사용하자.

planetscale + prisma 로 db 사용하자.

Vercel에 배포 예정

## 로컬환경 시작하기
```bash
yarn install
```

```bash
pscale auth login // 최초 로그인

pscale connect <planetscale db 이름> --port 3309 // 계속 유지

// 위처럼 connect 하는 경우가 아니라면 planetscale 에서 직접 url 따와야함
```

```bash
npx prisma db push // db에 prisma schema push
```

```bash
npx prisma generate // prisma client 스키마대로 생성
```

```bash
yarn dev
```

```bash
npx prisma studio // 편하게 웹으로 db 조회, 관리 가능
```

### env
```
DATABASE_URL='mysql://root@127.0.0.1:3309/<planetscale db 이름>'
NEXT_PUBLIC_BASE_API_URL=<api 링크>

GOOGLE_CLIENT_ID=<구글 클라이언트 id>
GOOGLE_CLIENT_SECRET=<구글 클라이언트 시크릿 키(패스워드)>

SECRET=<시크릿 키>
NEXTAUTH_SECRET=<시크릿 키>
```

## TODO
- next auth로 계정 인증 F
- Task CRUD (role === MEMBER || role === ADMIN)
- Member CRUD (role === ADMIN)
- 사이드바 접기 피기 (Collapse)
- UI 설계

## Flow & API
- Login -> GET Profile (profile data, my Tasks) -> Use Site
- Logout -> DELETE Session -> Route Home

### 태스크
- 일감 클릭 -> 해당 일감의 id를 쿼리 or 파라미터로 쏴줌 -> router로 읽어와서 컨텐츠 표시.
- 내 작품, 전체 작품 모두 같은 페이지, 같은 컴포넌트를 사용하고, key따라 내 마감물 or 전체 마감물을 props로 내려주면 모두 동작하게끔 해야함!'
- 내 작품 필터: 기간, 프론트맨이 나인것만
- 전체 작품 필터: 기간, 프론트맨이 나인것만, 내가 포함된것만, 특정 사람만 포함된것만
- 작품 제목으로 검색 가능 하게끔?