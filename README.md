## 인증,인가 게시판
```
git clone https://github.com/foriinrangelen/Board-App.git
cd Board-App
docker-compose up

yarn seed > 테스트 게시물생성
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
[![My Skills](https://skillicons.dev/icons?i=ts,react,nodejs,nestjs,postgres,vite,yarn&theme=light)](https://skillicons.dev)
![제목을-입력해주세요_-001 (15)](https://github.com/user-attachments/assets/89c61d2f-6460-4792-8013-4eecb7cd15cd)
[![My Skills](https://skillicons.dev/icons?i=docker,git,github,aws&theme=light)](https://skillicons.dev)
<br/>**5.5.4v**&nbsp;&nbsp;**18.3.1v**&nbsp;&nbsp;**20.16.0v**&nbsp;**10.1.8v**&nbsp;&nbsp;&nbsp;**16.3v**&nbsp;&nbsp;&nbsp;&nbsp;**5.4.3v**&nbsp;**1.22.22v**&nbsp;**0.3.20v**

### ERD

### 흐름도

### trouble
1. 요청 url과 엔드포인트에서 받는 url 이 달라 새로고침 및 뒤로가기 시 404 에러 발생 문제
2. 인증 및 인가를 위한 token 활용방식
3. typeorm의 migration시 타입이 다르게 설정되고 pk관계 mapping이 제대로 되지않음
4. node_modules 가 있는 상태에서 docker-compose up 시 bcrypt 모듈이 호환되지않음

### ing~
1. 댓글, 대댓글 기능 추가
2. admin 추가
3. 404페이지 추가
