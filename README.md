## 인증,인가 게시판
```
git clone 
docker-compose up
```
### 프로젝트 설명
NestJS와 React를 이해하고, 라이브러리 사용에 익숙해지고자 진행하였고, 회원가입과 로그인을 통해서 인증,인가 기능을 구현한 게시판입니다
### 프로젝트 구조
```
Board-App
 ├─ Dockerfile
 ├─ compose.yml
 ├─ backend
 └─ frontend
```

### 사용스택
[![My Skills](https://skillicons.dev/icons?i=ts,react,nodejs,nestjs,postgres,docker,git,github,aws&theme=light)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=ts)](https://skillicons.dev) <br/>**5.5.4v**

### ERD
### 흐름도
### trouble
1. axios 요청 url과 엔드포인트에서 받는 url 이 달라 새로고침 및 뒤로가기 시 404 에러 발생 문제
2. 인증 및 인가를 위한 token 활용방식
3. typeorm의 migration시 타입이 다르게 설정되고 pk관계 mapping이 제대로 되지않음
   
